const express = require("express");
const router = express.Router();
const {
  createNotification,
  getAllNotifications,
  getNotification,
  updateNotification,
  deleteNotification,
} = require("../Backend/controllers/notification");
const upload = require("../Backend/middlewares/upload-middleware");

router.post("/notification", upload.single("notifImage"), createNotification);
router.get("/notification", getAllNotifications);
router.get("/notification/:id", getNotification);
router.patch("/notification/:id", updateNotification);
router.delete("/notification/:id", deleteNotification);

module.exports = router;
