const docModel = require("../models/DocModel");
const userModel = require("../models/UserModel");
const appointmentModel = require("../models/AppointmentModel");
const notificationModel = require("../models/NotificationModel");

const applyDoctorController = async (req, res) => {
  try {
  const doctor = new docModel({
    ...req.body,
    status: "pending",
  });

  await doctor.save();

  const admin = await userModel.findOne({
    type: "admin",
  });

  admin.notification.push({
    type: "apply-doctor-request",
    message: `${doctor.fullName} has applied for a doctor account.`,
    data: {
      doctorId: doctor._id,
      userId: doctor.userId,
    },
  });

  await admin.save();

  res.status(200).send({
    success: true,
    message: "Doctor application submitted successfully",
  });

  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while applying for doctor account",
      error,
    });
  }
};

const getDoctorInfoController = async (req, res) => {
  try {
    const doctor = await docModel.findOne({
      userId: req.body.userId,
    });

    res.status(200).send({
      success: true,
      data: doctor,
    });

  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while fetching doctor information",
      error,
    });
  }
};

const updateDoctorProfileController = async (req, res) => {
  try {
    const doctor = await docModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body,
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "Doctor profile updated successfully",
      data: doctor,
    });

  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while updating doctor profile",
      error,
    });
  }
};

const bookAppointmentController = async (req, res) => {
  try {
    const appointment = new appointmentModel({
         ...req.body,
    });

    await appointment.save();

    const doctor = await userModel.findOne({
        _id: req.body.doctorInfo.userId,
    });

    doctor.notification.push({
        type: "New-appointment-request",
        message: `A new appointment request has been received from ${req.body.userInfo.fullName}.`,
        data: {
            appointmentId: appointment._id,
            userId: req.body.userId,
        },
    });

    await doctor.save();

    res.status(200).send({
        success: true,
        message: "Appointment booked successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while booking appointment",
      error,
    });
  }
};

const getUserAppointmentsController = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({
      "userInfo.userId": req.body.userId,
    });

    res.status(200).send({
      success: true,
      message: "User appointments fetched successfully",
      data: appointments,
    });

  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while fetching user appointments",
      error,
    });
  }
};

const getDoctorAppointmentsController = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({
      "doctorInfo.userId": req.body.userId,
    });

    res.status(200).send({
      success: true,
      message: "Doctor appointments fetched successfully",
      data: appointments,
    });

  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while fetching doctor appointments",
      error,
    });
  }
};

const updateAppointmentStatusController = async (req, res) => {
  try {
    const { appointmentId, status } = req.body;

    const appointment = await appointmentModel.findByIdAndUpdate(
      appointmentId,
      { status },
      { new: true }
    );

    const user = await userModel.findById(
  appointment.userInfo.userId || appointment.userInfo._id
);

if (user) {
  user.notification.push({
    type: "appointment-status-updated",
    message: `Your appointment has been ${status}.`,
  });

  await user.save();
}

    res.status(200).send({
      success: true,
      message: "Appointment status updated successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while updating appointment status",
      error,
    });
  }
};

module.exports = {
  applyDoctorController,
  getDoctorInfoController,
  updateDoctorProfileController,
  bookAppointmentController,
  getUserAppointmentsController,
  getDoctorAppointmentsController,
  updateAppointmentStatusController,
};