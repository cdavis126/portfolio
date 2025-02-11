import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import sunsetImage from '../assets/beautysunset.jpg'; // Import your custom image

const Contact = () => {
  return (
    <MDBContainer fluid className="d-flex justify-content-center align-items-center vh-100 bg-black">
      <MDBRow className="w-100 justify-content-center">
        <MDBCol md="8" lg="6">
          <MDBCard className="text-center shadow-lg border-0">
            <MDBCardImage position="top" src={sunsetImage} alt="Connect" />
            <MDBCardBody className="bg-dark text-white">
              <MDBCardTitle className="fw-bold">
                <a href="mailto:cheriedavis126@gmail.com" className="text-gradient text-decoration-none">
                  Connect with Me
                </a>
              </MDBCardTitle>
              <MDBCardText>
                "The only way to do great work is to love what you do." - Steve Jobs
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Contact;

