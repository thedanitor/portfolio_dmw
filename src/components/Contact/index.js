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

// bring in props from App.js
export default function Contact({ contactFull, setContactFull }) {
  // toggle full contact page or footer
  const toggleContactFull = () => {
    // if its full page, set it to footer, otherwise set it to full page
    contactFull ? setContactFull(false) : setContactFull(true);
  };

  // function to collapse Contact to footer if offscreen.
  // Makes it so if you scroll down page the Contact will be footer, but will expand with either Contact button in Navbar or Arrow button in footer
  const handleScrollHeightFromBottom = () => {
    // number of pixels currently scrolled along vertical axis from top
    let scrollHeight = window.pageYOffset;
    // height of Contact navbar
    let contactElHeight = document.getElementById("Contact").offsetHeight;
    // height of top of page from bottom of page (document height minus the scrollHeight)
    let heightFromBottom = document.body.offsetHeight - scrollHeight;
    // if the height fom the page bottom is greater than the Contact height and at least 2.2 times the height of the window
    if (heightFromBottom > contactElHeight && heightFromBottom > 2.2 * window.innerHeight) {
      // collapse the full contact page
      setContactFull(false);
    }
  };

  // as soon as the mouse is moved anywhere on the window it is listening for the function
  useEffect(() => {
    window.addEventListener("mousemove", handleScrollHeightFromBottom);
  });

  return (
    <>
    {/* if contactFull prop is true load full Contact page, otherwise load Contact footer */}
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
