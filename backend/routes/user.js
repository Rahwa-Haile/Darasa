const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../Backend/controllers/user");
const authenticationMiddleware = require("../Backend/middlewares/authenticationMiddleware");

router.get("/", authenticationMiddleware(), getAllUsers);
router.get("/:id", authenticationMiddleware(), getUser);
router.patch("/:id", authenticationMiddleware(), updateUser);
router.delete("/:id", authenticationMiddleware(), deleteUser);

module.exports = router;
