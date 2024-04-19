const Student = require('../model/Student')

const register = (req,res) => {
    const {name, email, password} = req.body

    const student = Student.create({...req.body})

    res.status(201).json({student})
}
const login = (req, res) => {

}


module.exports = {register, login}