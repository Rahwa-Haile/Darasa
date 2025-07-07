const Follow = require("../model/follow");

const addToFollow = async (req, res) => {
  try {
    console.log(req.user)
    const instructorId = req.params.id;
    const studentId = req.user.id;
    let follow = await Follow.findOne({ instructorId, followedBy: studentId });
   
    if (!follow && (studentId !== instructorId)) {
      follow = await Follow.create({
        instructorId,
        followedBy: studentId
        
      })
    }
    res.status(201).json({ follow });
  } catch (error) {
    console.log(error);
  }
};
const viewFollow = async (req, res) => {
  try {
    const userMode = req.user.userMode
    const userId = req.user.id 
    let follow = await Follow.find({followedBy: userId})
    if(userMode==="Instructor"){
      follow = await Follow.find({instructorId: userId})
    }
    res.status(201).json({ follow });
  } catch (error) {
    console.log(error);
  }
};
const removeFromFollow = async (req, res) => {
  try {
    const instructorId = req.params.id
    const studentId = req.user.id
    const follow = await Follow.findOneAndDelete({instructorId, followedBy: studentId});
    res.status(201).json({ msg: 'Follow successfully deleted' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addToFollow, viewFollow, removeFromFollow };
