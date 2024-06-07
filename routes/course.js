const express = require("express");
const router = express.Router();
const {
  createCourse,
  getAllCourses,
  getCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/course");
const upload = require("../middlewares/upload-middleware");
const authenticationMiddleware = require('../middlewares/authenticationMiddleware')

router.post(
  "/course",
  authenticationMiddleware('Instructor'),
  upload.fields([
    { name: "courseImage", maxCount: 1 },
    { name: "promoVideo", maxCount: 1 },
  ]),

  createCourse
);
router.get("/course", authenticationMiddleware(), getAllCourses);
router.get("/course/:id", authenticationMiddleware(), getCourse);
router.patch(
  "/course/:id",
  authenticationMiddleware('Instructor'),
  upload.fields([
    { name: "courseImage", maxCount: 1 },
    { name: "promoVideo", maxCount: 1 },
  ]),
  updateCourse
);
router.delete("/course/:id", authenticationMiddleware("Instructor"), deleteCourse);

module.exports = router;
