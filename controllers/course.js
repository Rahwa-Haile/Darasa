const Course = require("../model/course");

const createCourse = async (req, res) => {
  try {
    const course = await Course.create({
      ...req.body,
      courseImage: req.files["courseImage"][0].filename,
      promoVideo: req.files["promoVideo"][0].filename,
    });
    res.status(201).json({ course });
  } catch (error) {
    console.log(error);
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json({ courses });
  } catch (error) {
    console.log(error);
  }
};
const getCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.find({ _id: courseId });
    if (!course) {
    }
    res.status(200).json({ course });
  } catch (error) {
    console.log(error);
  }
};
const updateCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findOneAndUpdate({ _id: courseId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!course) {
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
    res
      .status(200)
      .json({ msg: `course ${course.courseTitle} has been deleted` });
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
