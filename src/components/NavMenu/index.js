import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import DanPhoto from "../../assets/images/DanWeikart.jpg";
import "./style.css";

import { Link } from "react-scroll";

export default function NavMenu() {
  const [brandClass, setBrandClass] = useState("");
  const [navClass, setNavClass] = useState("trans");

  const handleScroll = () => {
    // number of pixels currently scrolled along vertical axis
    let scrollHeight = window.pageYOffset;
    // if more than 10% of window height is scrolled
    if (scrollHeight > window.innerHeight * 0.1) {
      // apply specified states (classes)
      setBrandClass("show");
      setNavClass("opaque");
      //otherwise apply default classes
    } else {
      setBrandClass("");
      setNavClass("trans");
    }
  };

  // when DOM loads listen for scroll events to call handleScroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div>
      <Navbar fixed="top" className={navClass}>
        <Nav className="mr-auto">
          <Link
            href="#Contact"
            to="Contact"
            activeClass="active"
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact
          </Link>
          <Link
            href="#About"
            to="About"
            activeClass="active"
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
          <Link
            href="#Projects"
            to="Projects"
            activeClass="active"
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
          <Link
            href="#Skills"
            to="Skills"
            activeClass="active"
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Skills
          </Link>
        </Nav>
        <Nav className="ml-auto"></Nav>
        <Nav.Link href="#Home" id="#danText" className={brandClass}>
          Dan Weikart
        </Nav.Link>
        <Navbar.Brand href="#Home">
          <img
            id="danPhoto"
            src={DanPhoto}
            alt="Dan Weikart"
            className={brandClass}
          />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
