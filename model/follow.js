const mongoose = require('mongoose')
const User = require('./user')

const followSchema = new mongoose.Schema({
    instructorId: {
        type: mongoose.Types.ObjectId,
        required: [true, 'Please provide instructor id'],
        ref: User
    },
    followedBy: {
        type: mongoose.Types.ObjectId,
        required: [true, 'Please provide student id'],
        ref: User
    }
}, {timestamps: true})

module.exports = mongoose.model('Follow', followSchema)