import React from "react";
import { Nav } from "react-bootstrap";
import {
  FaHome,
  FaUserMd,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const logoutHandler = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menuStyle = (path) => ({
    color: "#fff",
    fontSize: "18px",
    borderRadius: "10px",
    padding: "12px 18px",
    marginBottom: "12px",
    cursor: "pointer",
    transition: "0.3s",
    backgroundColor:
  location.pathname === path
    ? "var(--primary-dark)"
    : "transparent",
    fontWeight:
      location.pathname === path
        ? "600"
        : "400",
  });

  return (
    <div
      style={{
        width: "280px",
        minHeight: "100vh",
        background: "var(--primary)",
        padding: "25px",
        boxShadow: "2px 0 10px rgba(0,0,0,0.15)",
      }}
    >
      {/* Logo */}

      <div
        className="d-flex align-items-center justify-content-center mb-5"
        style={{
          color: "white",
          fontSize: "28px",
          fontWeight: "700",
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            fontSize: "34px",
            marginRight: "10px",
          }}
        >
          🩺
        </span>

        Book A Doctor
      </div>

      <Nav className="flex-column">

        <Nav.Link
          style={menuStyle("/adminHome")}
          onClick={() => navigate("/adminHome")}
        >
          <FaHome className="me-3" />
          Dashboard
        </Nav.Link>

        <Nav.Link
          style={menuStyle("/admin-doctors")}
          onClick={() => navigate("/admin-doctors")}
        >
          <FaUserMd className="me-3" />
          Doctors
        </Nav.Link>

        <Nav.Link
          style={menuStyle("/admin-users")}
          onClick={() => navigate("/admin-users")}
        >
          <FaUsers className="me-3" />
          Users
        </Nav.Link>

        <hr
          style={{
            borderColor: "rgba(255,255,255,.4)",
          }}
        />

        <Nav.Link
          style={{
            color: "white",
            fontSize: "18px",
            padding: "12px 18px",
            borderRadius: "10px",
          }}
          onClick={logoutHandler}
        >
          <FaSignOutAlt className="me-3" />
          Logout
        </Nav.Link>

      </Nav>
    </div>
  );
};

export default AdminSidebar;