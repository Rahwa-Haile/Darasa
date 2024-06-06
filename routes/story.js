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
router.get("/story", getAllStories);
router.get("/story/:id", getStory);
router.patch("/story/:id", upload.array("story", 4), updateStory);
router.delete("/story/:id", deleteStory);

module.exports = router;
