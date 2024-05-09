const Cart = require("../model/cart");

const addToCart = async (req, res) => {
  try {
    const studentId = req.body.addedToCartBy;
    const courseId = req.params.id;
    let cart = await Cart.findOne({ addedToCartBy: studentId });
    if (!cart) {
      cart = await Cart.create({ addedToCartBy: studentId, courseIdList: [] });
    }
    cart.courseIdList.includes(courseId)
      ? res.status(401).json({ msg: "course already in cart" })
      : cart.courseIdList.push(courseId);
    cart = await Cart.findOneAndUpdate(
      { addedToCartBy: studentId },
      { courseIdList: cart.courseIdList },
      { new: true, runValidators: true }
    );
    res.status(201).json({ cart });
  } catch (error) {
    console.log(error);
  }
};
const viewCart = async (req, res) => {
  try {
    const cart = await Cart.find({}).populate("courseIdList");
    res.status(200).json({ cart });
  } catch (error) {
    console.log(error);
  }
};

const removeFromCart = async (req, res) => {
  try {
    const courseId = req.params.id;
    const studentId  = req.body.addedToCartBy
    let cart = await Cart.findOne({ addedToCartBy: studentId });
    if (!cart) {
      res.status(404).json({ msg: "no cart" });
    }

    if (cart.courseIdList.includes(courseId)) {
      cart.courseIdList.pull(courseId);
    }

    cart = await Cart.findOneAndUpdate({addedToCartBy: studentId}, {courseIdList: cart.courseIdList}, {new: true, runValidators: true})
    res.status(200).json({ cart });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addToCart, viewCart, removeFromCart };
