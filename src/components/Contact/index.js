import React, { useEffect } from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  // faTimesCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import ContactMenu from "../ContactMenu";
import ContactMenuFull from "../ContactMenuFull";

export default function Contact({ contactFull, setContactFull }) {
  const toggleContactFull = () => {
    contactFull ? setContactFull(false) : setContactFull(true);
  };

  const handleScrollHeightFromBottom = () => {
    // number of pixels currently scrolled along vertical axis
    let scrollHeight = window.pageYOffset;


    let contactElHeight = document.getElementById("Contact").offsetHeight;
    let heightFromBottom = document.body.offsetHeight - scrollHeight;


    if (heightFromBottom > contactElHeight && heightFromBottom > 2.2 * window.innerHeight) {
      setContactFull(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleScrollHeightFromBottom);
  });

  return (
    <>
      {contactFull ? (
        <Navbar
          id="Contact"
          className="full justify-content-center flex-column"
        >
          <FontAwesomeIcon
            className="iconClose"
            icon={faMinusCircle}
            onClick={toggleContactFull}
          />
          <ContactMenuFull />
        </Navbar>
      ) : (
        <Navbar
          id="Contact"
          className="footer justify-content-center flex-column"
        >
          <Link
            href="#Contact"
            to="Contact"
            activeClass="active"
            className="nav-link linkDown"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <FontAwesomeIcon
              className="icon contact"
              icon={faChevronCircleDown}
              onClick={toggleContactFull}
            />
          </Link>

          <ContactMenu />
        </Navbar>
      )}
    </>
  );
}
