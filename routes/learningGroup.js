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
const authenticationMiddleware = require('../middlewares/authenticationMiddleware')

router.post(
  "/learningGroup",
  authenticationMiddleware('Student'),
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverPhoto", maxCount: 1 },
  ]),
  createLearningGroup
);
router.get("/learningGroup", authenticationMiddleware('Student'), getAllLearningGroups);
router.get("/learningGroup/:id", authenticationMiddleware('Student'), getLearningGroup);
router.patch(
  "/learningGroup/:id",
  authenticationMiddleware('Student'),
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverPhoto", maxCount: 1 },
  ]),
  updateLearningGroup
);
router.delete("/learningGroup/:id", authenticationMiddleware('Student'), deleteLearningGroup);

module.exports = router;
