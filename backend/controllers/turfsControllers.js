const Turfs = require("../models/turfsModels")
const cloudinary = require("cloudinary")
const dotenv = require("dotenv");


cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key:  process.env.CLOUD_KEY,
    api_secret : process.env.CLOUD_KEY_SECRET
   });
   

// get all turfs
const getAllTurfs = async (req,res) =>{
    try {
        const turfs = await Turfs.findAll(); 
        res.status(200).json({
            success : true,
            turfs,
        });
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "No any data there",
        })
    }
    console.log("All Turfs :" , JSON.stringify(getAllTurfs, null));
}


// create new turfs
const createTurfs = async (req,res) => {

  const result = await cloudinary.uploader.upload(req.file.path, {folder: "Turfs"} , (error , result) => {
    if (error) {
      console.error('cloudinary upload error :',  error);
    }else{
      console.log('cloudinary upload result :' , result);
    }
  });

 let newTurf = {
    user_id:req.body.user_id,
    title : req.body.title,
    format : req.body.format,
    surface : req.body.surface,
    postcode : req.body.postcode,
    numberOfPitches : req.body.numberOfPitches,
    venue : req.body.venue,
    facilities : req.body.facilities,
    startTime : req.body.startTime,
    closeTime : req.body.closeTime,
    matchDuration : req.body.matchDuration,
    Image : result.secure_url,
    
 }
console.log(newTurf.user);
    if (!newTurf ) {
        return res.status(400).json({
            success : false,
            message : "All fields must be required",
        });
    }else{
        try {
       
            const Turf = await Turfs.create(newTurf);
            res.status(200).json({
                success : true,
                message : "New Turf Added",
                Turf,
            })
        } catch (error) {
            res.status(500).json({
                success : false,
                message : "All fields must be requird",
            })
        }
        console.log(newTurf);
    }
    
    
    

}

// get a single turf
const getAsingleTurf = async (req,res) => {

    const { turf_id }  = req.params;
    if (!turf_id) {
        return res.status({
            success : false,
            message : "turf id  not found",
        }) 
    }

    try {
        const singleTurf = await Turfs.findOne({where : { turf_id }});
        if (!singleTurf) {
            return res.status(404).json({
                success : false,
                message : "turf was not found",
            });
        }

        return res.status(200).json({
            success : true,
            singleTurf,
        });
    } catch (error) { 
        return res.status(500).json({
            success : false,
            message : " server error",
            error : error.message,
        });
    }
   
}


// update a turf

const updateTurf = async (req,res) => {
    const { id } = req.params;
    const {title ,format , surface , postcode , numberOfPitches} = req.body;
    if (!title  || !format || !surface || !postcode || !numberOfPitches ) {
        return res.status(400).json({
            success : false,
            message : "All fields must be required",
        });
    }

    try {
         
       const oldTurf = await Turfs.findOne({where : {id}});

         let newTurf = {
            title : req.body.title,
            format : req.body.format,
            surface : req.body.surface,
            postcode : req.body.postcode,
            numberOfPitches : req.body.numberOfPitches
         }

          await Turfs.update(newTurf, {where: { id : req.param.id }})
         return res.status(200).json({
            success : true,
            oldTurf : Turfs,
         })
    } catch (error) {
        return res.status(500).json({
      success: false,
      message: "Server error",
    });
    }

 
}

// delete a turf 

const deleteTurf = async (req,res) => {
    const {id} = req.param;
    if (!id) {
    return res.status(400).json({
      success: false,
      message: "Id is missing",
    });
}
 try {
    const deletedTurf = await Turfs.findOne({where : {id}});
    res.status(200).json({
        success : true,
        
        turfId : id,
        
    })
 } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
 }

    // const deletedTurf = await deletedTurf.destroy({
    //     where: {
    //         id: req.params.id
    //     }
    // });

    res.status(200).json()
}

const uploadImage = async (req,res) => {
    const {imageData} = req.body 

    cloudinary.uploader.upload(imageData, (error , result) => {
        if (error) {
            console.error(error);
            return res.status(400).json({ error: 'Upload failed' });
          }

          res.json({ url: result.secure_url });
    })
}

module.exports = {
    getAllTurfs,
    getAsingleTurf,
    createTurfs,
    updateTurf,
    deleteTurf,
    uploadImage,
};
