const express = require("express");
const {
    getAllSlots
} = require("../controllers/slotsController")

const router = express.Router();

// getallslots
router.get('/' , getAllSlots);

module.exports = router;