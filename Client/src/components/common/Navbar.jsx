import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

import {
  FaHome,
  FaUserMd,
  FaCalendarCheck,
  FaBell,
  FaUserCircle
} from "react-icons/fa";


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
      className="custom-navbar"
    >

      <Container fluid className="navbar-container">


        {/* LOGO */}
        <Navbar.Brand
          onClick={() => navigate("/")}
          className="navbar-logo"
        >
          🩺 Book A Doctor
        </Navbar.Brand>



        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
        />



        <Navbar.Collapse
          id="basic-navbar-nav"
        >


          {/* CENTER NAV OPTIONS */}
          <Nav className="navbar-options">


            {/* ADMIN */}
            {user?.type === "admin" && (

              <Nav.Link
                onClick={() => navigate("/adminHome")}
              >
                <FaHome />
                Dashboard
              </Nav.Link>

            )}




            {/* DOCTOR */}
            {user?.type === "doctor" && (
              <>

                <Nav.Link
                  onClick={() => navigate("/doctor-dashboard")}
                >
                  <FaHome />
                  Dashboard
                </Nav.Link>


                <Nav.Link
                  onClick={() => navigate("/edit-doctor-profile")}
                >
                  <FaUserMd />
                  Profile
                </Nav.Link>

              </>
            )}




            {/* PATIENT */}
            {user?.type === "user" && (
              <>

                <Nav.Link
                  onClick={() => navigate("/userHome")}
                >
                  <FaHome />
                  Dashboard
                </Nav.Link>



                <Nav.Link
                  onClick={() => navigate("/appointments")}
                >
                  <FaCalendarCheck />
                  Appointments
                </Nav.Link>



                <Nav.Link
                  onClick={() => navigate("/notifications")}
                >
                  <FaBell />
                  Notifications
                </Nav.Link>



                <Nav.Link
                  onClick={() => navigate("/applyDoctor")}
                >
                  <FaUserMd />
                  Apply Doctor
                </Nav.Link>

              </>
            )}


          </Nav>




          {/* RIGHT SIDE USER SECTION */}

          <div className="user-section">


            {user && (

              <span className="welcome-text">

                <FaUserCircle size={20}/>

                Welcome, {user.fullName}

              </span>

            )}



            <Button
              onClick={logoutHandler}
              className="logout-btn"
            >
              Logout
            </Button>


          </div>



        </Navbar.Collapse>


      </Container>


    </Navbar>

  );

};


export default CustomNavbar;