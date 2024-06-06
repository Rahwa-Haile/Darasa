const User = require("../model/user");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users, length: users.length });
  } catch (error) {
    console.log(error);
  }
};
const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOne({ _id: userId });
    if (!user) {
      res.status(404).json({ msg: "user not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
};
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOneAndUpdate({ _id: userId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      res.status(404).json({ msg: "user not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOneAndDelete({ _id: userId });
    if (!user) {
      res.status(404).json({ msg: "user not found" });
    }
    res.status(200).json({ msg: `user ${user._id} has been deleted` });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUsers, getUser, updateUser, deleteUser };