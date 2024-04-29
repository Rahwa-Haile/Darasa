const LearningGroup = require("../model/LearningGroup");

const createLearningGroup = async (req, res) => {
  try {
    console.log(req.body)
    const learningGroup = await LearningGroup.create({
      ...req.body,
      avatar: req.files["avatar"][0].filename,
      coverPhoto: req.files["coverPhoto"][0].filename,
    });

    res.status(201).json({learningGroup})
  } catch (error) {
    console.log(error);
  }
};

module.exports = createLearningGroup
