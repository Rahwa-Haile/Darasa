const LearningGroup = require("../model/LearningGroup");

const createLearningGroup = async (req, res) => {
  try {
    const data = req.body;

    if (req.files.avatar && req.files.avatar[0].mimetype.startsWith("image/")) {
      data.avatar = req.files.avatar[0].filename;
    }
    if (
      req.files.coverPhoto &&
      req.files.coverPhoto[0].mimetype.startsWith("image/")
    ) {
      data.coverPhoto = req.files.coverPhoto[0].filename;
    }

    const learningGroup = await LearningGroup.create(data);

    res.status(201).json({ learningGroup });
  } catch (error) {
    console.log(error);
  }
};

const getAllLearningGroups = async (req, res) => {
  try {
    const learningGroups = await LearningGroup.find({});
    res.status(200).json({ learningGroups });
  } catch (error) {
    console.log(error);
  }
};

const getLearningGroup = async (req, res) => {
  try {
    const learningGroupId = req.params.id;
    const learningGroup = await LearningGroup.findOne({ _id: learningGroupId });
    if (!learningGroup) {
      res.status(404).json({ msg: "learning group not found" });
    }
    res.status(200).json({ learningGroup });
  } catch (error) {
    console.log(error);
  }
};

const updateLearningGroup = async (req, res) => {
  try {
    const learningGroupId = req.params.id;
    const data = req.body;

    if (
      req.files.avatar &&
      req.files.avatar[0].mimetype.startsWith("image/")
    ) {
      data.avatar = req.files.avatar[0].filename;
    }
    if (
      req.files.coverPhoto &&
      req.files.coverPhoto[0].mimetype.startsWith("image/")
    ) {
      data.coverPhoto = req.files.coverPhoto[0].filename;
    }
    console.log(data);

    const learningGroup = await LearningGroup.findOneAndUpdate(
      { _id: learningGroupId },
      data,
      { new: true, runValidators: true }
    );
    if (!learningGroup) {
      res.status(404).json({ msg: "no such learning group" });
    }
    res.status(201).json({ learningGroup });
  } catch (error) {
    console.log(error);
  }
};

const deleteLearningGroup = async (req, res) => {
  try {
    const learningGroupId = req.params.id;
    const learningGroup = await LearningGroup.findOneAndDelete({
      _id: learningGroupId,
    });
    if (!learningGroup) {
      res.status(404).json({ msg: "learning group is not found" });
    }
    res.status(200).json({ msg: "learning group deletion is successful" });
  } catch (error) {
    console.log(error);
  }
};

//recommended learning groups ... take the courses they are interested in and based on the students enrolled there and their learning groups get them something
//you could take the course titles as search keywords and recommed sth
//based on user survey input

module.exports = {
  createLearningGroup,
  getAllLearningGroups,
  getLearningGroup,
  updateLearningGroup,
  deleteLearningGroup,
};
