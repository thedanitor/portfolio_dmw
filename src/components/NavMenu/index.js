import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import DanPhoto from "../../assets/images/DanWeikart.jpg";
import "./style.css";

export default function NavMenu() {
  const [brandClass, setBrandClass] = useState("");
  const [navClass, setNavClass] = useState("");

  const handleScroll = () => {
    let scrollHeight = window.pageYOffset;
    if (scrollHeight > window.innerHeight * 0.1) {
      setBrandClass("show");
      setNavClass("opaque");
    } else {
      setBrandClass("");
      setNavClass("trans");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div>
      <Navbar
        fixed="top"
        // bg={navBg} variant={navText}
        className={navClass}
      >
        <Navbar.Brand href="#Home">
          <img
            id="danPhoto"
            src={DanPhoto}
            alt="Dan Weikart"
            class={brandClass}
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Projects">Projects</Nav.Link>
          <Nav.Link href="#Skills">Skills</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="">Dan Weikart</Nav.Link>
          <Nav.Link href="">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
