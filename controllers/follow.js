const Follow = require("../model/follow");

const addToFollow = async (req, res) => {
  try {
    const instructorId = req.params.id;
    const studentId = req.body.followedBy;
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
    const studentId = req.body.followedBy 
    const follow = await Follow.find({followedBy: studentId})
    res.status(201).json({ follow });
  } catch (error) {
    console.log(error);
  }
};
const removeFromFollow = async (req, res) => {
  try {
    const instructorId = req.params.id
    const studentId = req.body.followedBy
    const follow = await Follow.findOneAndDelete({instructorId, followedBy: studentId});
    res.status(201).json({ msg: 'Follow successfully deleted' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addToFollow, viewFollow, removeFromFollow };
