const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectToDB;