const express = require("express");
const router = express.Router();
const {
  createLearningGroup,
  getAllLearningGroups,
  getLearningGroup,
  updateLearningGroup,
  deleteLearningGroup,
} = require("../controllers/learningGroup");
const upload = require("../middlewares/upload-middleware");

router.post(
  "/learningGroup",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverPhoto", maxCount: 1 },
  ]),
  createLearningGroup
);
router.get("/learningGroup", getAllLearningGroups);
router.get("/learningGroup/:id", getLearningGroup);
router.patch(
  "/learningGroup/:id",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverPhoto", maxCount: 1 },
  ]),
  updateLearningGroup
);
router.delete("/learningGroup/:id", deleteLearningGroup);

module.exports = router;
