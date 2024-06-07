const Comment = require("../model/comment");
const Course = require("../model/course");

const createComment = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const replyTo = req.query.replyTo;
    const createdBy = req.user.id
    let replies;

    const course = await Course.findById({ _id: courseId });
    if (!course) {
      res.status(404).json({ msg: "Course doesn't exist" });
    }
    if (replyTo) {
      const referenceComment = await Comment.findOne({ _id: replyTo });
      if(!referenceComment){
        res.status(404).json({msg: "reference comment doesn't exist"})
      }
      replies = referenceComment.numberOfReplies;
      await Comment.findOneAndUpdate(
        { _id: replyTo },
        { numberOfReplies: replies + 1 },
        { new: true, runValidators: true }
      );
    }
    const comment = await Comment.create({
      ...req.body,
      createdBy,
      courseId,
      replyTo,
    });

    res.status(201).json({ comment });
  } catch (error) {
    console.log(error);
  }
};

const getComment = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const commentId = req.params.id;
     const course = await Course.findById({ _id: courseId });
     if (!course) {
       res.status(404).json({ msg: "Course doesn't exist" });
     }
    const comment = await Comment.findOne({ _id: commentId, courseId });
    const replies = await Comment.find({ replyTo: commentId });
    if (!comment) {
      res.status(404).json({ msg: "no comment found" });
    }
    res.status(200).json({ comment, replies });
  } catch (error) {
    console.log(error);
  }
};
const getAllComments = async (req, res) => {
  try {
    const courseId = req.params.courseId;
     const course = await Course.findById({ _id: courseId });
     if (!course) {
       res.status(404).json({ msg: "Course doesn't exist" });
     }
    const comment = await Comment.find({ courseId }).sort(
      "-numberOfReplies numberOfDislikes -numberOfLikes"
    );
    // const sortedComments = await comment

    res.status(201).json({ comment });
  } catch (error) {
    console.log(error);
  }
};
const updateComment = async (req, res) => {
  try {
    console.log(req.user);
    const courseId = req.params.courseId;
    const commentId = req.params.id;
     const course = await Course.findById({ _id: courseId });
     if (!course) {
       res.status(404).json({ msg: "Course doesn't exist" });
     }
    const comment = await Comment.findOneAndUpdate(
      { courseId, _id: commentId },
      req.body,
      { new: true, runValidators: true }
    );
    if (!comment) {
      res.status(404).json({ msg: "No such comment" });
    }
    res.status(201).json({ comment });
  } catch (error) {
    console.log(error);
  }
};
const deleteComment = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const commentId = req.params.id;
     const course = await Course.findById({_id: courseId})
    if(!course){
      res.status(404).json({msg: "Course doesn't exist"})
    }
    const comment = await Comment.findOneAndDelete({
      courseId,
      _id: commentId,
    });
    

    res.status(200).json({ msg: "comment deletion is successful" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createComment,
  getComment,
  getAllComments,
  updateComment,
  deleteComment,
};
