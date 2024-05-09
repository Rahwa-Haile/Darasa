const mongoose = require('mongoose')
const User = require('./user')
const Course = require('./course')

const CartSchema = new mongoose.Schema({
    addedToCartBy : {
        type: mongoose.Types.ObjectId,
        ref: User,
        required: true
    },
    courseIdList : [{
        type: mongoose.Types.ObjectId,
        ref: Course,
        required: true
    }]
}, {timestamps: true})

module.exports = mongoose.model('cart', CartSchema)