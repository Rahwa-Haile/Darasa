const express = require("express");
const router = express.Router();
const {
  addToCart,
  viewCart,
  removeFromCart,
} = require("../Backend/controllers/cart");
const authenticationMiddleware = require("../Backend/middlewares/authenticationMiddleware");

router.post("/cart/:id", authenticationMiddleware("Student"), addToCart);
router.get("/cart", authenticationMiddleware("Student"), viewCart);
router.delete("/cart/:id", authenticationMiddleware("Student"), removeFromCart);

module.exports = router;
