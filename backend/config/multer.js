const multer = require("multer")
const path = require("path")

const UploadImageTurf = multer({
    storage : multer.diskStorage({}),
    fileFilter : (req,file,cb) => {
        let ext  = path.extname(file.originalname)
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
            cb(new Error("file is not supported") , false );
            return;
        }
        cb(null , true);
 
    },

}).single("image")

module.exports= UploadImageTurf;