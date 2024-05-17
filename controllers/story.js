const Story = require("../model/story");

const createStory = async (req, res) => {
  try {
    
    let storyList = [];
    if (req.files) {
      storyList = req.files.map((story) => {
        return story.filename;
      });
    }

    
    const story = await Story.create({ ...req.body, story: storyList });
    res.status(201).json({ story });
  } catch (error) {
    console.log(error);
  }
};
const getAllStories = async (req, res) => {
  try {
    const story = await Story.find({});
    res.status(201).json({ story });
  } catch (error) {
    console.log(error);
  }
};
const getStory = async (req, res) => {
  try {
    const storyId = req.params.id;
    const story = await Story.findOne({ _id: storyId });
    if (!story) {
      res.status(404).json({ msg: "story not found" });
    }
    res.status(201).json({ story });
  } catch (error) {
    console.log(error);
  }
};
const updateStory = async (req, res) => {
  try {
    const storyId = req.params.id;
    let storyList = []
    if(req.files){
      storyList = req.files.map((story) => {
        return story.filename
      })
    }
    const story = await Story.findOneAndUpdate({ _id: storyId }, {...req.body, story:storyList}, {
      new: true,
      runValidators: true,
      overwrite: true,
    });
    if (!story) {
      res.status(404).json({ msg: "story not found" });
    }
    res.status(201).json({ story });
  } catch (error) {
    console.log(error);
  }
};
const deleteStory = async (req, res) => {
  try {
    const storyId = req.params.id;
    const story = await Story.findOneAndDelete({ _id: storyId });
    if (!story) {
      res.status(404).json({ msg: "story not found" });
    }
    res.status(201).json({ msg: "story deletion successful" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createStory,
  getAllStories,
  getStory,
  updateStory,
  deleteStory,
};
