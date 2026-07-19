const express = require("express");
const router = express.Router();

const {
  getUserNotificationsController,
} = require("../controllers/notificationController");


router.post(
  "/getUserNotifications",
  getUserNotificationsController
);


module.exports = router;