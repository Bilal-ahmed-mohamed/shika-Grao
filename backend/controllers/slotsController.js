
const Slots = require("../models/slotsModels");
const Turfs = require("../models/turfsModels");



// controller to fetch all the slots

const fetchAllSlots = async (req, res) => {

    const {turf_id} = req.params;
    if (!turf_id) {
        return res.status({
            success : false,
            message : "turf id  not found",
        })
    }

    try {
        const slots = await Slots.findAll({
            where: {
                turfIid: turf_id,
                
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
            success : false,
            message : "No any data there",
        })
    }
}



// controller to create  timeslots
const generateSlots = async (turf_id , req) => {
    const turf = await Turfs.findByPk(turf_id);
    
    if (!turf) {
        throw new Error("Turf not found");
    }
    console.log(`Turf found: ${JSON.stringify(turf)}`);
    
    const { startTime, closeTime, matchDuration } = turf;
    
    console.log(`Start time: ${startTime}, Close time: ${closeTime}, Match duration: ${matchDuration}`);

    // convert he hours into minutes
    let duration = 0;
    const matchDurationLowerCase = matchDuration.toLowerCase();
    
    // extract the hours
    const hoursMatch = matchDurationLowerCase.match(/(\d+)\s*hour/);
    if (hoursMatch) {
        const hours = parseInt(hoursMatch[1]);
        duration += hours * 60;
    }

    // extract if minutes are there 
    const minutesMatch = matchDurationLowerCase.match(/(\d+)\s*minute/);
    if (minutesMatch) {
        const minutes = parseInt(minutesMatch[1]);
        duration += minutes;
    }

    
    const start = new Date(`1970-01-01T${startTime}`);
    const end = new Date(`1970-01-01T${closeTime}`);
    // const duration = parseInt(matchDuration);
    
    let currentTime = new Date(start);
    
    while (currentTime < end) {
        const slotStartTime = currentTime.toTimeString().slice(0, 5); // HH:MM format
        const nextTime = new Date(currentTime.getTime() + duration * 60000);
        const slotEndTime = nextTime.toTimeString().slice(0, 5); // HH:MM format
        
        if (nextTime > end) break;

        // Determine the price of the slot based on the time
        let price;
        const hours = currentTime.getHours();
        
        if (hours >= 6 && hours < 12) {
            price = 1500;
        } else if (hours >= 12 && hours < 18) {
            price = 2000;
        } else {
            price = 2500;
        }

        console.log(`Creating slot: Start: ${slotStartTime}, End: ${slotEndTime}, Price: ${price}`);
        
        // Create slots for each day of the week
        try {
            for (let i = 0; i < 7; i++) {
                await Slots.create({
                    // slot_id : slot_id,
                    turf_id: turf_id,
                    day_of_the_week: i,
                    start_time: slotStartTime,
                    end_time: slotEndTime,
                    is_booked: false,
                    price: price,
                });
                console.log(`Slot created successfully for day ${i}`);
            }
        } catch (error) {
            console.error(`Error creating slot: ${error.message}`);
        }
        
        currentTime = nextTime;
    }
    
    console.log("Finished generating slots");
}

// fetch slots for a specific turf

const fetchSlotsForATurf = async (req,res) => {
    
}

module.exports = {
    generateSlots,
    fetchAllSlots
}


