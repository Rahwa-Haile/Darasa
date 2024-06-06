const express = require('express')
const router = express.Router()
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");


router.get("/", getAllUsers);
router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router