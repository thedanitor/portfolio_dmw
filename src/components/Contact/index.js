import React, { useState } from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import ContactMenu from "../ContactMenu";
import ContactMenuFull from "../ContactMenuFull";

export default function Contact() {
  const [contactFull, setContactFull] = useState(false);

  const toggleContactFull = () => {
    contactFull ? setContactFull(false) : setContactFull(true);
  };

  return (
    <>
      {contactFull === false ? (
        <Navbar
          id="Contact"
          className="full justify-content-center flex-column"
        >
          <FontAwesomeIcon
            className="iconClose"
            icon={faTimesCircle}
            onClick={toggleContactFull}
          />
          <ContactMenuFull />
        </Navbar>
      ) : (
        <Navbar
          id="Contact"
          className="footer justify-content-center flex-column"
        >
          <FontAwesomeIcon
            className="icon"
            icon={faChevronCircleUp}
            onClick={toggleContactFull}
          />
          <ContactMenu />
        </Navbar>
      )}
    </>
  );
}
