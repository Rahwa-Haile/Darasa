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

router.post(
  "/course",
  upload.fields([
    { name: "courseImage", maxCount: 1 },
    { name: "promoVideo", maxCount: 1 },
  ]),
  createCourse
);
router.get("/course", getAllCourses);
router.get("/course/:id", getCourse);
router.patch(
  "/course/:id",
  upload.fields([
    { name: "courseImage", maxCount: 1 },
    { name: "promoVideo", maxCount: 1 },
  ]),
  updateCourse
);
router.delete("/course/:id", deleteCourse);

module.exports = router;
