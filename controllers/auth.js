const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} = require("../errors");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = await jwt.sign(
      { name: user.name, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    res.status(201).json({ user, token });
  } catch (error) {
    console.log(error);
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!password && !email) {
      throw new BadRequestError("Please provide email and password");
    }
    const user = await User.findOne({ email });
    let isMatch = false;
    if (!user) {
      res.status(404).json({ msg: "user doesn't exist" });
    }

    isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      res.status(404).json({ msg: "Incorrect password" });
    }

    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
  }
};

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

module.exports = {
  register,
  login,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
