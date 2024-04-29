const mongoose = require('mongoose')
const User = require('./user')

const LearningGroupSchema = new mongoose.Schema({
  groupName: {
    type: String,
    required: [true, "Please provide group name"],
  },
  groupBio: {
    type: String,
    required: [true, "Please provide group bio"],
  },
  areas: {
    type: Array,
    items: {
      enum: [
        "Technology",
        "Finance",
        "Healthcare",
        "Education",
        "Business",
        "Engineering",
        "Marketing",
        "Science",
        "Art",
        "Design",
        "Law",
        "Hospitality",
        "Media",
        "Entertainment",
        "Sports",
        "Environment",
        "Social Sciences",
        "Politics",
        "Culinary",
        "Fashion",
        "Automotive",
        "Agriculture",
        "Architecture",
        "Music",
      ],
    },
    required: [true, "Please provide areas"],
  },
  // Admins: {
  //   type: Array,
  //   items: {
  //     type: User
  //   },
  //   required: [true, 'Please provide admin']
  // },
  // members: {
  //   type: Array,
  //   items: {
  //     type: User
  //   },
  //   required: [true, 'Please provide members']
  // },
  avatar: {
    type: String
  },
  coverPhoto: {
    type: String
  },
  // createdBy: {
  //   type: mongoose.Types.ObjectId,
  //   ref: User,
  //   required: [true, 'Please provide createdBy']
  // }
}, {timestamps: true});

module.exports = mongoose.model('LearningGroup', LearningGroupSchema)