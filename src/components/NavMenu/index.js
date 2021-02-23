import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import DanPhoto from "../../assets/images/DanWeikart.jpg";
import "./style.css";

export default function NavMenu() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#Home">
          <img 
          id="danPhoto"
          src={DanPhoto}
           alt="Dan Weikart"
           />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Projects">Projects</Nav.Link>
          <Nav.Link href="#Skills">Skills</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
