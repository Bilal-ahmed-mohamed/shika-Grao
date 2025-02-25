const express = require("express");
const {
    generateSlots,
    fetchAllSlots,
    fetchSlotsForATurf
} = require("../controllers/slotsController")

const router = express.Router();

// getallslots
// router.get('/' , fetchAllSlots )
router.get('/:turf_id', fetchAllSlots);

// posting a new slot
// router.post('/' , generateSlots)

router.post('/generate-slots/:turfId', async (req, res) => {
    try {
        const turfId = req.params.turfId;
        console.log(`Received request to generate slots for turf ID: ${turfId}`);
        const slotsCreated = await generateSlots(turfId);
        res.status(200).json({ message: `Slots generated successfully (${slotsCreated} slots created)` });
    } catch (error) {
        console.error(`Error in route handler: ${error.message}`);
        res.status(500).json({ error: `An error occurred while generating slots: ${error.message}` });
    }
});




module.exports = router;