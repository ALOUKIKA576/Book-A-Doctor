import { Routes, Route } from "react-router-dom";

import Home from "./components/common/Home";
import Login from "./components/common/Login";
import Register from "./components/common/Register";

import UserHome from "./components/user/UserHome";
import ApplyDoctor from "./components/user/ApplyDoctor";
import UserAppointments from "./components/user/UserAppointments";
import BookAppointment from "./components/user/BookAppointment";

import AdminHome from "./components/admin/AdminHome";
import DoctorDashboard from "./components/doctor/DoctorDashboard";
import DoctorAppointments from "./components/doctor/DoctorAppointments";
import EditDoctorProfile from "./components/doctor/EditDoctorProfile";

import DoctorProfile from "./components/user/DoctorProfile";
import Notification from "./components/common/Notification";
import AdminDoctors from "./components/admin/AdminDoctors";
import AdminUsers from "./components/admin/AdminUsers";

function App() {

  const user = JSON.parse(localStorage.getItem("userData"));

  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/userHome" element={<UserHome />} />

      <Route path="/applyDoctor" element={<ApplyDoctor />} />

      <Route path="/adminHome" element={<AdminHome />} />

      <Route 
        path="/doctor-dashboard" 
        element={<DoctorDashboard />} 
      />

      <Route 
        path="/edit-doctor-profile" 
        element={<EditDoctorProfile />}
      />

      <Route 
        path="/doctor-appointments" 
        element={<DoctorAppointments />}
      />

      <Route
        path="/appointments"
        element={
          <UserAppointments 
            userId={user?._id}
          />
        }
      />

      <Route 
        path="/book-appointment" 
        element={<BookAppointment />} 
      />

      <Route 
        path="/doctor-profile" 
        element={<DoctorProfile />} 
      />

      <Route 
        path="/notifications" 
        element={<Notification />} 
      />

      <Route 
        path="/admin-doctors" 
        element={<AdminDoctors />} 
      />

      <Route 
        path="/admin-users" 
        element={<AdminUsers />} 
      />

    </Routes>
  );
}

export default App;