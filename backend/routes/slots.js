const express = require("express");
const {
    generateSlots,
    fetchAllSlots
} = require("../controllers/slotsController")

const router = express.Router();

// getallslots
router.get('/' , fetchAllSlots )

// posting a new slot
// router.post('/' , generateSlots)

router.post('/generate-slots/:turfId', async (req, res) => {
    try {
        const turfId = req.params.turfId;
        await generateSlots(turfId);
        res.status(200).json({ message: 'Slots generated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while generating slots' });
    }
});


module.exports = router;