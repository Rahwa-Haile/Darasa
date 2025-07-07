const express = require("express");
const router = express.Router();
const {
  addToFollow,
  viewFollow,
  removeFromFollow,
} = require("../Backend/controllers/follow");
const authenticationMiddleware = require("../Backend/middlewares/authenticationMiddleware");

router.post("/follow/:id", authenticationMiddleware("Student"), addToFollow);
router.get("/follow", authenticationMiddleware(), viewFollow);
router.delete(
  "/follow/:id",
  authenticationMiddleware("Student"),
  removeFromFollow
);

module.exports = router;
