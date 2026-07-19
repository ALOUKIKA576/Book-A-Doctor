const userModel = require("../models/UserModel");
const docModel = require("../models/DocModel");
const appointmentModel = require("../models/AppointmentModel");

const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find();

    res.status(200).send({
      success: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while fetching users",
      error,
    });
  }
};

const getAllDoctorsController = async (req, res) => {
  try {
    const doctors = await docModel.find();

    res.status(200).send({
      success: true,
      message: "Doctors fetched successfully",
      data: doctors,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while fetching doctors",
      error,
    });
  }
};

const getApprovedDoctorsController = async (req, res) => {
  try {

    const doctors = await docModel.find({
      status: "approved",
    });

    res.status(200).send({
      success: true,
      data: doctors,
    });

  } catch (error) {

    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while fetching approved doctors",
    });

  }
};

const getStatusApproveController = async (req, res) => {
  try {
    const { doctorId, status, userId } = req.body;

    const doctor = await docModel.findByIdAndUpdate(
       doctorId,
       { status },
       { new: true }
     );

     const user = await userModel.findById(userId);

     user.notification.push({
       type: "doctor-account-request-updated",
       message: `Your doctor account request has been ${status}`,
    });

    if (status === "approved") {

      user.isdoctor = true;

      user.type = "doctor";
    }

    await user.save();

    res.status(200).send({
        success: true,
        message: `Doctor account has been ${status} successfully`,
        data: doctor,
    });

  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while approving doctor",
      error,
    });
  }
};

const getStatusRejectController = async (req, res) => {
  try {
    const { doctorId, status, userId } = req.body;

    const doctor = await docModel.findByIdAndUpdate(
      doctorId,
      { status },
      { new: true }
    );

    const user = await userModel.findById(userId);

    user.notification.push({
      type: "doctor-account-request-updated",
      message: `Your doctor account request has been ${status}`,
    });

    user.isdoctor = false;
    user.type = "user";

    await user.save();

    res.status(200).send({
      success: true,
      message: `Doctor account has been ${status} successfully`,
      data: doctor,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while rejecting doctor",
      error,
    });
  }
};

const displayAllAppointmentController = async (req, res) => {
  try {
    const appointments = await appointmentModel.find();

    res.status(200).send({
      success: true,
      message: "Appointments fetched successfully",
      totalAppointments: appointments.length,
      data: appointments,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while fetching appointments",
      error,
    });
  }
};


const getDashboardStatsController = async (req, res) => {
  try {
    const totalUsers = await userModel.countDocuments({
      type: "user",
    });

    const totalDoctors = await docModel.countDocuments();

    const pendingDoctors = await docModel.countDocuments({
      status: "pending",
    });

    const totalAppointments =
      await appointmentModel.countDocuments();

    res.status(200).send({
      success: true,
      data: {
        totalUsers,
        totalDoctors,
        pendingDoctors,
        totalAppointments,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error fetching dashboard statistics",
      error,
    });
  }
};
module.exports = {
  getAllUsersController,
  getAllDoctorsController,
  getApprovedDoctorsController,
  getStatusApproveController,
  getStatusRejectController,
  displayAllAppointmentController,
  getDashboardStatsController,
};