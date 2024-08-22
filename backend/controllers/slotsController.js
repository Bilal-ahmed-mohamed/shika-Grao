
const Slots = require("../models/slotsModels");
const Turfs = require("../models/turfsModels");



// controller to fetch all the slots

const fetchAllSlots = async (req, res) => {

    const {turf_id} = req.params;

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
            is_booked: slot.is_booked,
            price: slot.price,
            status: slot.is_booked ? 'Booked' : 'Available',
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

const generateSlots = async (turf_id) => {
    const turf = await Turfs.findByPk(turf_id);

    if (!turf) {
        throw new Error("turf not found");
    }

    const {startTime , closeTime , matchDuration} = turf;
   
    const start = new Date(`1970-01-01T${startTime}:00Z`);
    const end = new Date(`1970-01-01T${closeTime}:00Z`);
    const duration = parseInt(matchDuration);

    let currentTime = start;

    while (currentTime < end) {

        const slotsStartTime = currentTime.toTimeString().split('')[0];
        const nextTime = new Date(currentTime.getTime() + duration * 60000);
        const slotEndTime = nextTime.toTimeString().split('')[0];

       if(nextTime > end) break;

    // determine the price of the slot of the turf for a specific time
     let price;
     const hours = currentTime.getUTCHours();

     if (hours >= 6 && hours < 12) {
        price = 1500;
     } else if(hours >= 12 && hours < 18){
        price = 2000;
     }
     else {
        price = 2500;
     }


       await Slots.create({
             turfId: turf_id,
            day_of_the_week: new Date().getDay(),
            start_time: slotsStartTime,
            end_time: slotEndTime,
            price : price,
       });

       currentTime = nextTime;
        
    }
}

module.exports = {
    generateSlots,
    fetchAllSlots
}


