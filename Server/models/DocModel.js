const mongoose = require("mongoose");

const docSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
      set: (value) =>
        value.charAt(0).toUpperCase() + value.slice(1),
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    specialization: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    fees: {
      type: Number,
      required: true,
    },

    timings: {
      type: Array,
      required: true,
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

const docModel = mongoose.model("doctor", docSchema);

module.exports = docModel;