const Course = require('../model/course')
const createCourse = async (req, res) => {
  try{
    const course = await Course.create({...req.body, courseImage: req.files['courseImage'][0].filename, promoVideo: req.files['promoVideo'][0].filename})
    res.status(201).json({course})
  }catch(error){
    console.log(error)
  }
  
}

module.exports = createCourse