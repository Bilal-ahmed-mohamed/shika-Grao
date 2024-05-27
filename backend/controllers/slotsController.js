const Slots = require("../models/slotsModels");
const Turfs = require("../models/turfsModels");

// getallSlots

const getAllSlots = async (req,res) => {
    try {
        const slots = await Slots.findAll({
            include : [{
                model : Turfs,
                attributes : ['startTime','closeTime' , 'matchDuration' ]
            }]
        });
        res.status(200).json({
            success: true,
            slots,
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "No any slots ",
        })
    }
    console.log("All slots :" , JSON.stringify(getAllSlots, null));
}


// getAsingleSlot

module.exports = {
    getAllSlots
}


