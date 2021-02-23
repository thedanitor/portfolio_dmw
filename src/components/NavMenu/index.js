import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Projects from "../../pages/Projects";
import Skills from "../../pages/Skills";

export default function NavMenu() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#Home">DMW</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Projects">Projects</Nav.Link>
          <Nav.Link href="#Skills">Skills</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
