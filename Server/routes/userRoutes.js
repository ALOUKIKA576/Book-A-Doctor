const express = require("express");

const {
  registerController,
  loginController,
  getUserDataController,
  getAllNotificationController,
  deleteAllNotificationController,
  bookAppointmentController,
  getUserAppointmentsController,
  getUserNotificationsController,
} = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

const cancelAppointmentController = require("../controllers/cancelAppointmentController");

router.post("/register", registerController);

router.post("/login", loginController);

router.post("/book-appointment", bookAppointmentController);

router.post(
  "/getUserData",
  authMiddleware,
  getUserDataController
);

router.post(
  "/getAllNotification",
  authMiddleware,
  getAllNotificationController
);

router.post(
  "/deleteAllNotification",
  authMiddleware,
  deleteAllNotificationController
);

router.post(
  "/getUserAppointments",
  authMiddleware,
  getUserAppointmentsController
);

router.post(
  "/getUserNotifications",
  authMiddleware,
  getUserNotificationsController
);

router.post(
  "/cancelAppointment",
  cancelAppointmentController
);

module.exports = router;