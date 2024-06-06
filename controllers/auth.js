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
    const { email, password, userMode } = req.body;

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
    const token = await jwt.sign(
      { name: user.name, id: user._id, userMode },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    res.status(201).json({ user, token });
  } catch (error) {
    console.log(error);
  }
};



module.exports = {
  register,
  login
};
