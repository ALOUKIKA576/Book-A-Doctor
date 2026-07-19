import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaHome, FaUserMd, FaCalendarCheck, FaBell } from "react-icons/fa";

const CustomNavbar = ({ user }) => {

  const navigate = useNavigate();

  console.log("NAVBAR USER =", JSON.stringify(user, null, 2));


  const logoutHandler = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };


  return (
    
    <Navbar
  expand="lg"
  className="shadow-sm"
  style={{
    backgroundColor: "#ffffff"
  }}
>
      <Container>

        {/* LOGO */}
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{
            cursor: "pointer",
            fontWeight: "700",
            fontSize: "22px",
            color:"#2563eb"
          }}
        >
          🩺 Book A Doctor
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />


        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto align-items-center">


            {/* ADMIN NAVBAR */}
            {user?.type === "admin" && (
              <>
                <Nav.Link
                  onClick={() => navigate("/adminHome")}
                >
                  Dashboard
                </Nav.Link>
              </>
            )}



            {/* DOCTOR NAVBAR */}
            {user?.type === "doctor" && (
              <>

                <Nav.Link
                  onClick={() => navigate("/doctor-dashboard")}
                >
                  <FaHome className="me-1"/>
                  Dashboard
                </Nav.Link>


                <Nav.Link
                  onClick={() => navigate("/edit-doctor-profile")}
                >
                  <FaUserMd className="me-1"/>
                  Profile
                </Nav.Link>


              </>
            )}




            {/* USER / PATIENT NAVBAR */}
            {user?.type === "user" && (
              <>

                <Nav.Link
                  onClick={() => navigate("/userHome")}
                >
                  <FaHome className="me-1"/>
                  Home
                </Nav.Link>


                <Nav.Link
                  onClick={() => navigate("/appointments")}
                >
                  <FaCalendarCheck className="me-1"/>
                  Appointments
                </Nav.Link>


                <Nav.Link
                  onClick={() => navigate("/notifications")}
                >
                  <FaBell className="me-1"/>
                  Notifications
                </Nav.Link>


                <Nav.Link
                  onClick={() => navigate("/applyDoctor")}
                >
                  <FaUserMd className="me-1"/>
                  Apply Doctor
                </Nav.Link>


              </>
            )}



            {/* USER NAME */}
            {user && (
              <span 
                className="mx-3"
                style={{
                  fontWeight:"600",
                  color:"#333"
                }}
              >
                Welcome, {user.fullName}
              </span>
            )}



            {/* LOGOUT */}
            <Button
              variant="outline-primary"
              onClick={logoutHandler}
            >
              Logout
            </Button>


          </Nav>


        </Navbar.Collapse>


      </Container>


    </Navbar>
  );
};


export default CustomNavbar;