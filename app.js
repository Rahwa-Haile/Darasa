const express = require('express')
const app = express()
require('dotenv').config()
const connectDB=require('./db/connectDB')
const authRouter=require('./routes/auth')

app.use(express.json())

app.use('/api/v1/students', authRouter)

const start =  ()=>{
    connectDB(process.env.MONGO_URI)
    app.listen(5000, ()=>{
        console.log('server is listening at port 5000')
    })
}
start()