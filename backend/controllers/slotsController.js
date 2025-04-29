
const Slots = require("../models/slotsModels");
const Turfs = require("../models/turfsModels");
const {Op, where} = require('sequelize');
const moment = require('moment');


// controller to fetch all the slots

const fetchAllSlots = async (req, res) => {

    const {turf_id} = req.params;
    console.log("Requested turf_id:", turf_id);
    if (!turf_id) {
        return res.status({
            success : false,
            message : "turf id  not found",
        })
    }

    try {
        const slots = await Slots.findAll({
            where: {
                 turf_id: turf_id,
                
            },
            order: [['start_time', 'ASC']],  // Optionally, order by start time
        });

        const response = slots.map(slot => ({
            slot_id: slot.slot_id,
            turf_id: slot.turf_id,
            day_of_the_week: slot.day_of_the_week,
            start_time: slot.start_time,
            end_time: slot.end_time,
            status: slot.is_booked ? 'Booked' : 'Available',
            booked_by : "bilal",
            price: slot.price,
           
        }));

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching data",
            error: error.message
        })
    }
}

const generateSlotsForDay = (turf , dayOfWeek)  => {
    const {startTime , closeTime , matchDuration}  = turf;

     // convert the hours into minutes
     let duration = 0;
        
     if (!matchDuration) {
         throw new Error("Match duration not defined for this turf");
     }
     
     const matchDurationLowerCase = matchDuration.toLowerCase();
     
     // extract the hours
     const hoursMatch = matchDurationLowerCase.match(/(\d+)\s*hour/);
     if (hoursMatch) {
         const hours = parseInt(hoursMatch[1]);
         duration += hours * 60;
         console.log(`Extracted ${hours} hours (${hours * 60} minutes)`);
     }
     
     const minutesMatch = matchDurationLowerCase.match(/(\d+)\s*minute/);
        if (minutesMatch) {
            const minutes = parseInt(minutesMatch[1]);
            duration += minutes;
            console.log(`Extracted ${minutes} minutes`);
        }
        
        if (duration === 0) {
            throw new Error(`Could not parse duration from: ${matchDuration}`);
        }
        
        console.log(`Total duration in minutes: ${duration}`);

        // Generate slots
    const start = new Date(`1970-01-01T${startTime}`);
    const end = new Date(`1970-01-01T${closeTime}`);
    
    let currentTime = new Date(start);
    const slots = [];
    
    while (currentTime < end) {
        const slotStartTime = currentTime.toTimeString().slice(0, 5);
        const nextTime = new Date(currentTime.getTime() + duration * 60000);
        const slotEndTime = nextTime.toTimeString().slice(0, 5);
        
        if (nextTime > end) break;
        
        // Determine price based on time
        let price;
        const hours = currentTime.getHours();
        
        if (hours >= 6 && hours < 12) {
            price = 1500;
        } else if (hours >= 12 && hours < 18) {
            price = 2000;
        } else {
            price = 2500;
        }
        
        slots.push({
            turf_id: turf.id,
            day_of_the_week: dayOfWeek,
            start_time: slotStartTime,
            end_time: slotEndTime,
            price,
            // These are temporary slots - not stored in DB
            slot_id: `temp_${dayOfWeek}_${slotStartTime}`,
            is_booked: false
        });
        
        currentTime = nextTime;
    }
    
    return slots;


};


// controller to create  timeslots
// const generateSlots = async (turf_id) => {
//     try {
//         const turf = await Turfs.findByPk(turf_id);
        
//         if (!turf) {
//             throw new Error("Turf not found");
//         }
//         console.log(`Turf found: ${JSON.stringify(turf)}`);
        
//         const { startTime, closeTime, matchDuration } = turf;
        
//         console.log(`Start time: ${startTime}, Close time: ${closeTime}, Match duration: ${matchDuration}`);
        
//         // convert the hours into minutes
//         let duration = 0;
        
//         if (!matchDuration) {
//             throw new Error("Match duration not defined for this turf");
//         }
        
//         const matchDurationLowerCase = matchDuration.toLowerCase();
        
//         // extract the hours
//         const hoursMatch = matchDurationLowerCase.match(/(\d+)\s*hour/);
//         if (hoursMatch) {
//             const hours = parseInt(hoursMatch[1]);
//             duration += hours * 60;
//             console.log(`Extracted ${hours} hours (${hours * 60} minutes)`);
//         }
        
//         // extract if minutes are there  
//         const minutesMatch = matchDurationLowerCase.match(/(\d+)\s*minute/);
//         if (minutesMatch) {
//             const minutes = parseInt(minutesMatch[1]);
//             duration += minutes;
//             console.log(`Extracted ${minutes} minutes`);
//         }
        
//         if (duration === 0) {
//             throw new Error(`Could not parse duration from: ${matchDuration}`);
//         }
        
//         console.log(`Total duration in minutes: ${duration}`);
        
//         const start = new Date(`1970-01-01T${startTime}`);
//         const end = new Date(`1970-01-01T${closeTime}`);
        
//         if (isNaN(start.getTime()) || isNaN(end.getTime())) {
//             throw new Error(`Invalid time format: startTime=${startTime}, closeTime=${closeTime}`);
//         }
        
//         let currentTime = new Date(start);
//         let slotsCreated = 0;
        
//         while (currentTime < end) {
//             const slotStartTime = currentTime.toTimeString().slice(0, 5); // HH:MM format
//             const nextTime = new Date(currentTime.getTime() + duration * 60000);
//             const slotEndTime = nextTime.toTimeString().slice(0, 5); // HH:MM format
            
//             if (nextTime > end) break;
            
//             // Determine the price of the slot based on the time
//             let price;
//             const hours = currentTime.getHours();
            
//             if (hours >= 6 && hours < 12) {
//                 price = 1500;
//             } else if (hours >= 12 && hours < 18) {
//                 price = 2000;
//             } else {
//                 price = 2500;
//             }
            
//             console.log(`Creating slot: Start: ${slotStartTime}, End: ${slotEndTime}, Price: ${price}`);
            
//             // Create slots for each day of the week
//             try {
//                 for (let i = 0; i < 7; i++) {
//                     await Slots.create({
//                         turf_id: turf_id,
//                         day_of_the_week: i,
//                         start_time: slotStartTime,
//                         end_time: slotEndTime,
//                         is_booked: false,
//                         price: price,
//                     });
//                     slotsCreated++;
//                     console.log(`Slot created successfully for day ${i}, time ${slotStartTime}-${slotEndTime}`);
//                 }
//             } catch (error) {
//                 console.error(`Error creating slot: ${error.message}`);
//                 throw error; // Rethrow to stop the process if a slot can't be created
//             }
            
//             currentTime = nextTime;
//         }
        
//         console.log(`Finished generating slots. Total slots created: ${slotsCreated}`);
//         return slotsCreated;
//     } catch (error) {
//         console.error(`Error in generateSlots: ${error.message}`);
//         throw error;
//     }
// };

// fetch slots for a specific turf

const fetchSlotsForATurf = async (turf_id , date) => {

    try {
        const targetDate = moment(date);

        const startOfTheWeek = targetDate.clone().startOf('week').toDate();
        const endOfWeek = targetDate.clone().endOf('week').toDate();

        // fetch the slots for the specific week
        const slots = await Slots.findAll({
            where:{
                turf_id : turf_id,
                [Op.or] : [
                    {
                        day_of_the_week : {
                            [Op.between] : [0 , 6]
                        }
                    }
                ]
            },
            order : [
                ['day_of_the_week' , 'ASC'],
                ['start_time' , 'ASC']
            ]
        });


        // group the slots by day of the week
        const groupedSlots =  slots.reduce((acc , slot) => {
            if (!acc(slot.day_of_the_week)) {
                acc[slot.day_of_the_week] = [];
            }
            acc[slot.day_of_the_week].push(slot);
            return acc;
        }, {});



        // create an array of dates for the week
        const weekDates = [];
        for(let i = 0; i < 7; i++){
            weekDates.push(moment(startOfTheWeek).add(i, 'days').format('YYYY-MM-DD'));
        }


        // combine dates with slots
        const result = weekDates.map((date , index) => ({
            date,
            day_of_week : index,
            slots : groupedSlots[index] || []
        }));

        return result;
  
     
    } catch (error) {
        console.error('Error fetching weekly slots:', error);
        throw error;
    }
    
}

module.exports = {
    // generateSlots,
    fetchAllSlots,
    fetchSlotsForATurf,
    generateSlotsForDay
}


