const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    doctorInfo: {
      type: Object,
      required: true,
    },

    userInfo: {
      type: Object,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    document: {
      type: Object,
      default: null,
    },

    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const appointmentModel = mongoose.model("appointment", appointmentSchema);

module.exports = appointmentModel;