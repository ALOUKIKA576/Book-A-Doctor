import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import {
  FaHeartbeat,
  FaUserMd,
  FaCalendarCheck,
  FaShieldAlt,
  FaHeadset,
  FaStar,
} from "react-icons/fa";

import p2 from "../../images/p2.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm py-3">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-logo">
            <div className="logo-box">
              <FaHeartbeat className="logo-icon" />
            </div>
            <span>Book A Doctor</span>
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="ms-auto align-items-center">

              <Nav.Link href="#">
                Home
              </Nav.Link>

              <Nav.Link href="#features">
                Features
              </Nav.Link>

              <Nav.Link href="#specialities">
                Specialities
              </Nav.Link>

              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>

              <Button
                as={Link}
                to="/register"
                className="ms-3 px-4"
              >
                Register
              </Button>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero */}

      <section className="hero-section">

        <Container>

          <Row className="align-items-center">

            <Col lg={6}>

              <h1 className="hero-title">
                Your Health,
                <br />
                Our Priority
              </h1>

              <p className="hero-text">
                Book appointments with experienced doctors,
                receive timely healthcare, and manage your
                medical visits effortlessly through one secure
                platform.
              </p>

              <div className="hero-buttons">

                <Button
                  as={Link}
                  to="/login"
                  size="lg"
                  className="me-3"
                >
                  Book Appointment
                </Button>

                <Button
                  as={Link}
                  to="/register"
                  variant="outline-primary"
                  size="lg"
                >
                  Register Now
                </Button>

              </div>

            </Col>

            <Col lg={6} className="text-center">

              <img
                src={p2}
                alt="Doctor"
                className="hero-image"
              />

            </Col>

          </Row>

        </Container>

      </section>

      {/* Features */}

      <section className="py-5 bg-light" id="features">

        <Container>

          <h2 className="section-title">
            Why Choose Us
          </h2>

          <Row className="g-4 mt-4">

            <Col md={3}>
              <Card className="feature-card">
                <Card.Body>
                  <FaUserMd className="feature-icon" />
                  <h5>Expert Doctors</h5>
                  <p>
                    Verified doctors from multiple
                    specializations.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="feature-card">
                <Card.Body>
                  <FaCalendarCheck className="feature-icon" />
                  <h5>Easy Booking</h5>
                  <p>
                    Schedule appointments within
                    seconds.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="feature-card">
                <Card.Body>
                  <FaShieldAlt className="feature-icon" />
                  <h5>Secure Records</h5>
                  <p>
                    Your medical information stays
                    completely protected.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="feature-card">
                <Card.Body>
                  <FaHeadset className="feature-icon" />
                  <h5>24/7 Support</h5>
                  <p>
                    Dedicated support whenever you
                    need assistance.
                  </p>
                </Card.Body>
              </Card>
            </Col>

          </Row>

        </Container>

      </section>

      {/* Statistics */}

      <section className="stats-section">

        <Container>

          <Row>

            <Col md={3}>
              <h2>50+</h2>
              <p>Doctors</p>
            </Col>

            <Col md={3}>
              <h2>500+</h2>
              <p>Patients</p>
            </Col>

            <Col md={3}>
              <h2>1000+</h2>
              <p>Appointments</p>
            </Col>

            <Col md={3}>
              <h2>98%</h2>
              <p>Success Rate</p>
            </Col>

          </Row>

        </Container>

      </section>

      {/* Specialities */}

<section className="py-5 bg-light" id="specialities">

  <Container>

    <h2 className="section-title">
      Our Specialities
    </h2>

    <Row className="g-4 mt-4">

      <Col md={3}>
        <Card className="feature-card">
          <Card.Body>
            <h5>Cardiology</h5>
            <p>Heart and cardiovascular care.</p>
          </Card.Body>
        </Card>
      </Col>

      <Col md={3}>
        <Card className="feature-card">
          <Card.Body>
            <h5>Neurology</h5>
            <p>Brain and nervous system treatment.</p>
          </Card.Body>
        </Card>
      </Col>

      <Col md={3}>
        <Card className="feature-card">
          <Card.Body>
            <h5>Orthopedics</h5>
            <p>Bone and joint specialists.</p>
          </Card.Body>
        </Card>
      </Col>

      <Col md={3}>
        <Card className="feature-card">
          <Card.Body>
            <h5>Dermatology</h5>
            <p>Skin and hair care experts.</p>
          </Card.Body>
        </Card>
      </Col>

    </Row>

  </Container>

</section>

      {/* Testimonials */}

      <section className="py-5">

        <Container>

          <h2 className="section-title">
            Patient Reviews
          </h2>

          <Row className="mt-4">

            <Col md={4}>
              <Card className="testimonial-card">
                <Card.Body>
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />

                  <p className="mt-3">
                    Very smooth appointment booking
                    process. Highly recommended.
                  </p>

                  <strong>Priya</strong>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="testimonial-card">
                <Card.Body>
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />

                  <p className="mt-3">
                    Doctors are professional and the
                    interface is easy to use.
                  </p>

                  <strong>Rahul</strong>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="testimonial-card">
                <Card.Body>
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />

                  <p className="mt-3">
                    Excellent healthcare experience
                    from booking to consultation.
                  </p>

                  <strong>Anjali</strong>
                </Card.Body>
              </Card>
            </Col>

          </Row>

        </Container>

      </section>

      {/* Footer */}

      <footer className="footer">

        <Container>

          <h3>Book A Doctor</h3>

          <p>
            Smart Healthcare Appointment Management System
          </p>

          <p>
            © 2026 Book A Doctor. All Rights Reserved.
          </p>

        </Container>

      </footer>
    </>
  );
};

export default Home;