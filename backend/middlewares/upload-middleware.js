const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/pjpeg" ||
      file.mimetype === "image/jpeg"||
      file.mimetype.startsWith("video/")
    ) {
      cb(null, true);
    }else {
      console.log("Only png and jpg file foramts are supported");
      cb(null, false);
    }
  },
  limits: {
    fileSize: 15 * 1024 * 1024,
  },
});

module.exports = upload;
