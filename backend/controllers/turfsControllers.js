const Turfs = require("../models/turfsModels")
const cloudinary = require("cloudinary")


cloudinary.config({
    cloud_name : "dxdiozidt",
    api_key: "315532219354147",
    api_secret : "TnmzQ0jEgFdAz29xBf2IsQGL_ww"
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

    

    const result = await cloudinary.uploader.upload(req.file.path, {folder : "Turfs"});

 let newTurf = {
    title : req.body.title,
    format : req.body.format,
    surface : req.body.surface,
    postcode : req.body.postcode,
    numberOfPitches : req.body.numberOfPitches,
    image : result.secure_url,

 }
  
   

    

    if (!newTurf ) {
        return res.status(400).json({
            success : false,
            message : "All fields must be required",
        });
    }else{
        console.log(newTurf);
    }
    try {
       
        const Turf = await Turfs.create(newTurf);
        res.status(200).json({
            success : true,
            Turf,
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "All fields must be requird",
        })
    }
    
    

}


// get a single turf
const getAsingleTurf = async (req,res) => {

    const {id} = req.params;
    if (!id) {
        return res.status({
            success : false,
            message : "turf not found",
        })
    };

    try {
        const singleTurf = await Turfs.findOne({where : {id}});
        if (!singleTurf) {
            return res.status(404).json({
                success : false,
                message : "turf was not founf",
            })
        };

        return res.status(200).json({
            success : true,
            singleTurf,
        });
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "error for noe",
        });
    }
   
}


// update a turf

const updateTurf = async (req,res) => {
    const {id} = req.params;
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
