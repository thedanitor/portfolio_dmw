import React, { useState } from "react";
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
  // const [contactFull, setContactFull] = useState(true);

  // const toggleContactFull = () => {
  //   contactFull ? contactFull = false : contactFull = true;
  // };

  // const fullContact = () => {
  //   contactFull = true;
  //   console.log(contactFull);
  // }

  // const footerContact = () => {
  //   contactFull = false;
  //   console.log(contactFull);
  // }

  const toggleContactFull = () => {
    contactFull ? setContactFull(false) : setContactFull(true);
};


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
