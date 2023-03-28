const express = require("express");
const {
    getAllTurfs,
    getAsingleTurf,
    createTurfs,
    updateTurf,
    deleteTurf,
    uploadImage,

} = require("../controllers/turfsControllers");

const router = express.Router();

// get all turf 

router.get('/' , getAllTurfs)

// get a single turf 

router.get('/:id' , getAsingleTurf)

// posting a new turf 

router.post('/' , createTurfs, uploadImage);

// delete a turf

router.delete('/:id' , deleteTurf);

// update a turf

router.patch('/:id' , updateTurf);


module.exports = router;
