const Bookmark = require("../model/bookmark");
const Course = require("../model/course")

const addToBookmark = async (req, res) => {
  try {
    const courseId = req.params.id;
    const studentId = req.user.id
 
    const course = await Course.findById({ _id: courseId });
    if (!course) {
      res.status(404).json({ msg: "Course doesn't exist" });
    }
    let bookmark = await Bookmark.findOne({
      bookmarkedBy: studentId,
      courseId,
    });
    if (!bookmark) {
      bookmark = await Bookmark.create({ bookmarkedBy: studentId, courseId });
    }

    res.status(201).json({ bookmark });
  } catch (error) {
    console.log(error);
  }
};
const viewBookmark = async (req, res) => {
  try {
    const studentId = req.user.id;
    const bookmark = await Bookmark.find({ bookmarkedBy: studentId }).populate(
      "courseId"
    );
    res.status(200).json({ bookmark });
  } catch (error) {
    console.log(error);
  }
};
const removeFromBookmark = async (req, res) => {
  try {
    const courseId = req.params.id;
  
    const course = await Course.findById({ _id: courseId });
    if (!course) {
      res.status(404).json({ msg: "Course doesn't exist" });
    }
    const studentId = req.user.id
    let bookmark = await Bookmark.findOneAndDelete({
      bookmarkedBy: studentId,
      courseId,
    });
    res.status(200).json({ msg: "removed from bookmark" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addToBookmark, viewBookmark, removeFromBookmark };
