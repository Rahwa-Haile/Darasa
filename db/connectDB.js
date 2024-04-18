const mongoose = require('mongoose')

const connectDB = (url) => {
    mongoose.set('strictQuery', false)
    mongoose.connect(url)
    console.log('connected to db')
}

module.exports = connectDB