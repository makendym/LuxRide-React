import "../CSS/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Login from "./login";
import MultiStepForm from "./multiStepSignUp";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "../images/NavBarLogo.png";


function MainNavbar() {
  const [openModal, setOpenModal] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            
              <img
                alt=""
                src={Image}
                width="110"
                height="70"
                className="d-inline-block align-top"
              />{" "}
            
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/safety">Safety</Nav.Link>
            <Nav.Link  href="/about">About Us</Nav.Link>
            <Nav.Link href="/ridersSignUp"> ridersSignUp</Nav.Link>
            <Nav.Link href="/emailSignUp">Sign up 2.0</Nav.Link>
          </Nav>
          <Nav className="right">
            <Nav.Link
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Login
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setOpenSignUp(true);
              }}
            >
              Sign Up
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {openModal && <Login handleClose={setOpenModal} />}
      {openSignUp && <MultiStepForm handleClose={setOpenSignUp} />}
    </>
  );
}
export default MainNavbar;
