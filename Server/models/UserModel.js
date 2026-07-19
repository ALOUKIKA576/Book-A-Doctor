const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      set: (value) =>
        value.charAt(0).toUpperCase() + value.slice(1),
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      default: "",
    },

    dob: {
      type: String,
      default: "",
    },

    gender: {
      type: String,
      default: "",
    },

    bloodGroup: {
      type: String,
      default: "",
    },

    allergies: {
      type: String,
      default: "",
    },

    specialty: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    experience: {
      type: Number,
      default: 0,
    },

    consultationFee: {
      type: Number,
      default: 0,
    },

    bio: {
      type: String,
      default: "",
    },

    notification: {
      type: Array,
      default: [],
    },

    seennotification: {
      type: Array,
      default: [],
    },

    isdoctor: {
      type: Boolean,
      default: false,
    },

    type: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);