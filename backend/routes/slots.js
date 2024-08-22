const express = require("express");
const {
    generateSlots,
    fetchAllSlots
} = require("../controllers/slotsController")

const router = express.Router();

// getallslots
router.get('/' , fetchAllSlots )

// posting a new slot
router.post('/' , generateSlots)

module.exports = router;