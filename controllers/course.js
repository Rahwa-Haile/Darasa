const Course = require("../model/course");

const createCourse = async (req, res) => {
  try {
    const promoVideo = req.files.promoVideo[0];
    const courseImage = req.files.courseImage[0];

    if (
      !promoVideo.mimetype.startsWith("video/") ||
      !courseImage.mimetype.startsWith("image/")
    ) {
      res.status(401).json({ msg: "Invalid format" });
    }

    const course = await Course.create({
      ...req.body,
      courseImage: courseImage.filename,
      promoVideo: promoVideo.filename,
    });
    res.status(201).json({ course, length: course.length });
  } catch (error) {
    console.log(error);
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json({ courses, length: courses.length });
  } catch (error) {
    console.log(error);
  }
};
const getCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findOne({ _id: courseId });
    if (!course) {
      res.status(404).json({ msg: "course not found" });
    }
    res.status(200).json({ course });
  } catch (error) {
    console.log(error);
  }
};
const updateCourse = async (req, res) => {
  try {
    
    const courseId = req.params.id;
    const updateData = { ...req.body };
    console.log(req.files);
    if (
      req.files.courseImage &&
      req.files.courseImage[0].mimetype.startsWith("image/")
    ) {
      updateData.courseImage = req.files["courseImage"][0].filename;
    }
    if (
      req.files.promoVideo &&
      req.files.promoVideo[0].mimetype.startsWith("video/")
    ) {
      updateData.promoVideo = req.files["promoVideo"][0].filename;
    }

    console.log(updateData) 
    const course = await Course.findOneAndUpdate(
      { _id: courseId },

      updateData,

      {
        new: true,
        runValidators: true,
      }
    );
    if (!course) {
      res.status(404).json({ msg: "course not found" });
    }
    res.status(200).json({ course });
  } catch (error) {
    console.log(error);
  }
};
const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findOneAndDelete({ _id: courseId });
    if (!course) {
      res.status(404).json({ msg: "course not found" });
    }
    res.status(200).json({ msg: `course ${course._id} has been deleted` });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createCourse,
  getCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
};
