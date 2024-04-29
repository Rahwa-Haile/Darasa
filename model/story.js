const mongoose = require('mongoose')
const User = require('./user')

const StorySchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: User
    },
    story: {
        type: Array,
        required: [true, 'story cannot be empty']
    }
},{timeStamps: true})


module.exports = mongoose.model('Story', StorySchema)