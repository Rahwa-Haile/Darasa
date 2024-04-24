const Student = require("../model/Student");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const {BadRequestError, UnauthenticatedError, NotFoundError} = require('../errors')
const {readFileSync} = require('fs')
const path = require('path')

const register = async (req, res) => {
  try {
    // const { password } = req.body;
    // const salt = await bcryptjs.genSalt(10);
    // const hashedPassword = await bcryptjs.hash(password, salt);
    const student = await Student.create({
      // ...req.body,
      // password: hashedPassword,
      avatar: readFileSync(req.file.path)
    });

    
    // const token = await jwt.sign(
    //   { name: student.name, id: student._id },
    //   process.env.JWT_SECRET,
    //   { expiresIn: "30d" }
    // );
    res.status(201).json({ msg: 'image successfully uploaded'});
  } catch (error) {
    console.log(error);
  }
};
// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!password && !email) {
//       throw new BadRequestError('Please provide email and password')
//     }
//     const student = await Student.findOne({ email });
//     let isMatch = false;
//     if (!student) {
//       res.status(404).json({msg: "student doesn't exist"})
//     }
//     console.log(student)
//     isMatch = await bcryptjs.compare(password, student.password);
//     if (!isMatch) {
//       res.status(404).json({ msg: "Incorrect password" });
//     }
    
    
//     res.status(201).json({ student });
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = { register };
