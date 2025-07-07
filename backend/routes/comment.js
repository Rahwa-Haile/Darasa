const express = require("express");
const router = express.Router();
const {
  createComment,
  getComment,
  getAllComments,
  deleteComment,
  updateComment,
} = require("../Backend/controllers/comment");
const authenticationMiddleware = require("../Backend/middlewares/authenticationMiddleware");

router.post(
  "/comment/:courseId",
  authenticationMiddleware("Student"),
  createComment
);
router.get("/comment/:courseId/:id", authenticationMiddleware(), getComment);
router.get("/comment/:courseId", authenticationMiddleware(), getAllComments);
router.delete(
  "/comment/:courseId/:id",
  authenticationMiddleware("Student"),
  deleteComment
);
router.patch(
  "/comment/:courseId/:id",
  authenticationMiddleware("Student"),
  updateComment
);

module.exports = router;
