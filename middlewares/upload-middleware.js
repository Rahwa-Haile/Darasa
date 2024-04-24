const multer = require("multer");
const path = require('path');
const { MIMEType } = require("util");

    const storage = multer.diskStorage({
        destination: (req, file, cb)=>{
            cb(null, 'images')
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + file.originalname)
        }
    })

    const upload = multer({
        storage 
        // fileFilter: (req, file, cb) => {
        // if(mimetype === 'image/png' || MIMEType === 'image/jpg'){
        //     cb(null, true)
        // }else{
        //     console.log('Only png and jpg file foramts are supported')
        //     cb(null, false)
        // }
        ,
        limits: {
            fileSize: 1024 * 1024 * 2
        }
    })

    module.exports = upload