import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const DoctorProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const doctor = location.state?.doctor;

  if (!doctor) {
    return (
      <Container className="mt-5 text-center">
        <h4>Doctor details not found</h4>

        <Button onClick={() => navigate("/user-home")}>
          Go Back
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-5">

      <Card className="shadow p-4">

        <div className="text-center">

          <h2>
            👨‍⚕️ Dr. {doctor.fullName}
          </h2>

          <p className="text-muted">
            {doctor.specialization}
          </p>

        </div>


        <hr />


        <h5>
          Doctor Information
        </h5>


        <p>
          <strong>Specialization:</strong>{" "}
          {doctor.specialization}
        </p>


        <p>
          <strong>Experience:</strong>{" "}
          {doctor.experience}
        </p>


        <p>
          <strong>Consultation Fees:</strong>{" "}
          ₹{doctor.fees}
        </p>


        <p>
          <strong>Address:</strong>{" "}
          {doctor.address}
        </p>



        <div className="text-center mt-4">

          <Button
            variant="primary"
            onClick={() =>
              navigate("/book-appointment", {
                state: { doctor },
              })
            }
          >
            Book Appointment
          </Button>


        </div>


      </Card>

    </Container>
  );
};

export default DoctorProfile;