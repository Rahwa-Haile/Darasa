const mongoose = require("mongoose");
const User = require('./user')
const Course = require('./course')

const CommentSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Types.ObjectId,
      required: [true, "please provide student id"],
      ref: User,
    },
    courseId: {
      type: mongoose.Types.ObjectId,
      required: [true, "please provide course id"],
      ref: Course,
    },
    comment: {
      type: String,
      required: [true, "please provide the comment"],
    },
    numberOfLikes: {
      type: Number,
      required: [true, "please provide the number of likes"],
      default: 0,
    },
    numberOfDislikes: {
      type: Number,
      required: [true, "please provide the number of dislikes"],
      default: 0,
    },
    replyTo: {
      type: mongoose.Types.ObjectId,
      ref: 'Comment',
      // required: [true, 'Clarify whether this is a reply'],
      default: null
    },
    numberOfReplies: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);

