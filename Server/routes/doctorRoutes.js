const express = require("express");

const {
  applyDoctorController,
  getDoctorInfoController,
  updateDoctorProfileController,
  bookAppointmentController,
  getUserAppointmentsController,
  getDoctorAppointmentsController,
  updateAppointmentStatusController,
} = require("../controllers/doctorController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/applyDoctor",
  authMiddleware,
  applyDoctorController
);

router.post(
  "/getDoctorInfo",
  authMiddleware,
  getDoctorInfoController
);

router.post(
  "/updateDoctorProfile",
  authMiddleware,
  updateDoctorProfileController
);

router.post(
  "/bookAppointment",
  authMiddleware,
  bookAppointmentController
);

router.post(
  "/getUserAppointments",
  authMiddleware,
  getUserAppointmentsController
);

router.post(
  "/getDoctorAppointments",
  authMiddleware,
  getDoctorAppointmentsController
);

router.post(
  "/updateAppointmentStatus",
  authMiddleware,
  updateAppointmentStatusController
);

module.exports = router;