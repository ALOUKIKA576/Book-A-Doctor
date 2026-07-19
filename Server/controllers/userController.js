const userModel = require("../models/UserModel");
const appointmentModel = require("../models/AppointmentModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {

    const {
      fullName,
      email,
      password,
      phone,
      dob,
      gender,
      bloodGroup,
      allergies,
      specialty,
      location,
      experience,
      consultationFee,
      bio,
      type,
    } = req.body;

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new userModel({
      fullName,
      email,
      password: hashedPassword,
      phone,
      dob,
      gender,
      bloodGroup,
      allergies,
      specialty,
      location,
      experience,
      consultationFee,
      bio,
      type,
      isdoctor: type === "doctor",
    });

    await user.save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while registering user",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(200).send({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(200).send({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const token = jwt.sign(
      { id: user._id, isdoctor:user.isdoctor },
      process.env.JWT_SECRET,
      { expiresIn:"1d" }
    );

    // Remove password before sending user data
    const userData = user.toObject();
    delete userData.password;

    res.status(200).send({
      success: true,
      message: "Login Successful",
      token,
      userData,
    });

  } catch (error) {

    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while logging in",
      error,
    });

  }
};

const getUserDataController = async (req, res) => {
  try {

    const user = await userModel.findById(req.body.userId);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "User data fetched successfully",
      data: user,
    });

  } catch (error) {

    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while fetching user data",
      error,
    });

  }
};

const getAllNotificationController = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);

    user.seennotification.push(...(user.notification || []));
    user.notification = [];

    await user.save();

    res.status(200).send({
      success: true,
      message: "All notifications marked as read",
      data: user,
    });

  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while getting notifications",
      error,
    });
  }
};

const deleteAllNotificationController = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);
    
    user.notification = [];
    user.seennotification = [];

    await user.save();

    res.status(200).send({
      success: true,
      message: "All notifications deleted successfully",
      data: user,
    });

  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while deleting notifications",
      error,
    });
  }
};

const bookAppointmentController = async (req, res) => {
  try {

    const { doctorInfo, userInfo, date } = req.body;

    const newAppointment = new appointmentModel({
      doctorInfo,
      userInfo,
      date,
    });

    await newAppointment.save();

    res.status(200).send({
      success: true,
      message: "Appointment booked successfully",
      data: newAppointment,
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

    const { userId } = req.body;

    const appointments = await appointmentModel.find({
      "userInfo._id": userId,
    });

    res.status(200).send({
      success: true,
      message: "Appointments fetched successfully",
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

const getUserNotificationsController = async (req, res) => {
  try {

    const user = await userModel.findById(req.body.userId);

    console.log(user.notification);

    res.status(200).send({
      success: true,
      data: user.notification,
    });

  } catch (error) {

    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while fetching notifications",
      error,
    });

  }
};


module.exports = {
  registerController,
  loginController,
  getUserDataController,
  getAllNotificationController,
  deleteAllNotificationController,
  bookAppointmentController,
  getUserAppointmentsController,
  getUserNotificationsController,
};