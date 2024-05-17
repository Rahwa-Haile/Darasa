const UserData = require("../model/userData");

const createUserData = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.files["avatar"]) {
      data.avatar = req.files["avatar"][0].filename;
    }
    if (req.files["coverPhoto"]) {
      data.coverPhoto = req.files["coverPhoto"][0].filename;
    }
    const userData = await UserData.create(data);
    res.status(201).json({ userData });
  } catch (error) {
    console.log(error);
  }
};
const getAllUserDatas = async (req, res) => {
  try {
    const userDatas = await UserData.find({});
    res.status(200).json({ userDatas, length: userDatas.length });
  } catch (error) {
    console.log(error);
  }
};
const getUserData = async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = await UserData.findOne({ _id: userId });
    if (!userData) {
      res.status(404).json({ msg: "userData not found" });
    }
    res.status(201).json({ userData });
  } catch (error) {
    console.log(error);
  }
};
const updateUserData = async (req, res) => {
  try {
    const userDataId = req.params.id;
    const data = { ...req.body };

    if (req.files["avatar"]) {
      data.avatar = req.files["avatar"][0].filename;
    }
    if (req.files["coverPhoto"]) {
      data.coverPhoto = req.files["coverPhoto"][0].filename;
    }
    const userData = await UserData.findOneAndUpdate(
      { _id: userDataId },
      data,
      { new: true, runValidators: true }
    );
    if (!userData) {
      res.status(404).json({ msg: "user data not found" });
    }
    res.status(200).json({ userData });
  } catch (error) {
    console.log(error);
  }
};
const deleteUserData = async (req, res) => {
  try {
    const userDataId = req.params.id;
    const userData = await UserData.findOneAndDelete({ _id: userDataId });
    if (!userData) {
      res.status(404).json({ msg: "user data not found" });
    }
    res
      .status(201)
      .json({ msg: `the data of user ${userData._id} has been deleted` });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUserData,
  getAllUserDatas,
  getUserData,
  updateUserData,
  deleteUserData,
};
