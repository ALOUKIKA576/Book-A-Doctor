const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./models/UserModel");

mongoose
  .connect(process.env.MONGO_DB)
  .then(async () => {
    const hashedPassword = await bcrypt.hash("somya123", 10);

    await User.findOneAndUpdate(
      { email: "somya@gmail.com" },
      { password: hashedPassword }
    );

    console.log("✅ Password updated successfully!");
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });