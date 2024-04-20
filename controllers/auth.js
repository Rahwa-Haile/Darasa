const Student = require('../model/Student')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

const register = async (req,res) => {
    try{
        const {password} = req.body
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        const student = await Student.create({...req.body, password: hashedPassword})
        const token= await jwt.sign({name: student.name, id: student._id}, process.env.JWT_SECRET, {expiresIn: '30d'})
        res.status(201).json({student, token})
    }
    catch(error){
        console.log(error)
    }
    
   
    // const token = jwt.sign({student.name,student._id}, 'secret', {expiresIn: '30d'})
}
const login = (req, res) => {

}


module.exports = {register, login}