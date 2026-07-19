const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDB = require("./connectToDB");

const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const doctorRoutes = require("./routes/doctorRoutes");

const notificationRoutes = require("./routes/notificationRoutes");

const app = express();

dotenv.config();

connectToDB();

const PORT = process.env.PORT || 8001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Book A Doctor API is Running...");
});

app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/notification", notificationRoutes);

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});