import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import DanPhoto from "../../assets/images/DanWeikart.jpg";
import "./style.css";

import { Link } from "react-scroll";

export default function NavMenu({ contactFull, setContactFull }) {
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

  const fullContact = () => {
    setContactFull(true);
  }

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
            offset={0}
            duration={500}
            onClick={fullContact}
          >
            <span className="linkHolder">
              <span data-hover="Contact">Contact</span>
            </span>
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
            <span className="linkHolder">
              <span data-hover="About">About</span>
            </span>
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
            <span className="linkHolder">
              <span data-hover="Projects">Projects</span>
            </span>
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
            <span className="linkHolder">
              <span data-hover="Skills">Skills</span>
            </span>
          </Link>
        </Nav>
        <Nav className="ml-auto"></Nav>

        <Link
            href="#Home"
            to="Home"
            activeClass="none"
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <span className="linkHolder">
              <span data-hover="Dan Weikart">Dan Weikart</span>
            </span>
          </Link>

        {/* <Nav.Link href="#Home" id="#danText" className={brandClass}>
          Dan Weikart
        </Nav.Link> */}
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
