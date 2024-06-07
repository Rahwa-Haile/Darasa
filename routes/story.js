const express = require("express");
const router = express.Router();
const {
  createStory,
  getAllStories,
  getStory,
  updateStory,
  deleteStory,
} = require("../controllers/story");
const upload = require("../middlewares/upload-middleware");
const authenticationMiddleware = require("../middlewares/authenticationMiddleware");

router.post("/story", authenticationMiddleware("Instructor"), upload.array("story", 4), createStory);
router.get("/story", authenticationMiddleware(), getAllStories);
router.get("/story/:id", authenticationMiddleware(), getStory);
router.patch("/story/:id", authenticationMiddleware('Instructor'), upload.array("story", 4), updateStory);
router.delete("/story/:id", authenticationMiddleware('Instructor'), deleteStory);

module.exports = router;
