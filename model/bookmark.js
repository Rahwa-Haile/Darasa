const mongoose = require('mongoose')
const User = require('./user')
const Course = require('./course')

const BookmarkSchema = new mongoose.Schema({
  bookmarkedBy: {
    type: mongoose.Types.ObjectId,
    required: [true, "please provide student id"],
    ref: User
  },
  courseId: {
    type: mongoose.Types.ObjectId,
    required: [true, "please provide course id"],
    ref: Course,
  },
}, {timestamps: true});


module.exports = mongoose.model('Bookmark', BookmarkSchema)
