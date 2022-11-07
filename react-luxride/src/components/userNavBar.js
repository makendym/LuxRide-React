import "../CSS/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Login from "./login";
import MultiStepForm from "./multiStepSignUp";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "../images/NavBarLogo.png";
import { AiFillSetting, AiOutlineUser } from "react-icons/ai";
import profile from "../images/profile.jpeg";

function UserNavBar() {
  const [openModal, setOpenModal] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Nav.Link href="#home">
              <img
                alt=""
                src={Image}
                width="110"
                height="70"
                className="d-inline-block align-top"
              />{" "}
            </Nav.Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/safety">Safety</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/ridersSignUp"> ridersSignUp</Nav.Link>
          </Nav>
          <Nav className="right">
            <Nav.Link
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Settings
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setOpenSignUp(true);
              }}
            >
              Account
            </Nav.Link>
          </Nav>{" "}
          <img
            src={profile}
            alt="Logo"
            style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
          />
        </Container>
      </Navbar>
      {openModal && <Login handleClose={setOpenModal} />}
      {openSignUp && <MultiStepForm handleClose={setOpenSignUp} />}
    </>
  );
}
export default UserNavBar;
