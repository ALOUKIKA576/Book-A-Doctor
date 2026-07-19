const appointmentModel = require("../models/AppointmentModel");

const cancelAppointmentController = async (req, res) => {
  try {

    const { appointmentId } = req.body;

    const appointment = await appointmentModel.findByIdAndUpdate(
      appointmentId,
      {
        status: "cancelled",
      },
      {
        new: true,
      }
    );

    if (!appointment) {
      return res.status(404).send({
        success: false,
        message: "Appointment not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Appointment cancelled successfully",
      data: appointment,
    });

  } catch (error) {

    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while cancelling appointment",
      error,
    });

  }
};


module.exports = cancelAppointmentController;