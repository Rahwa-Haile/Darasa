const express = require("express");
const router = express.Router();
const {
  addToBookmark,
  viewBookmark,
  removeFromBookmark,
} = require("../Backend/controllers/bookmark");
const authenticationMiddleware = require("../Backend/middlewares/authenticationMiddleware");

router.post(
  "/bookmark/:id",
  authenticationMiddleware("Student"),
  addToBookmark
);
router.get("/bookmark", authenticationMiddleware("Student"), viewBookmark);
router.delete(
  "/bookmark/:id",
  authenticationMiddleware("Student"),
  removeFromBookmark
);

module.exports = router;
