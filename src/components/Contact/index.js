import React, { useState } from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import ContactMenu from "../ContactMenu";
import ContactMenuFull from "../ContactMenuFull";

export default function Contact() {
  const [contactFull, setContactFull] = useState(false);
  // const contact = document.getElementById("Contact");

  const toggleContactFull = () => {
    contactFull ? setContactFull(false) : setContactFull(true);
    // FontAwesomeIcon.focus();
  }

  return (
    <>
    {contactFull ? (
      <Navbar id="Contact" className="footer justify-content-center flex-column">

 
  
          <FontAwesomeIcon className="icon" icon={faChevronCircleUp} onClick={toggleContactFull} />

        <ContactMenu />

  </Navbar>
    ) : (
      <Navbar id="Contact" className="full justify-content-center flex-column" fixed="bottom" onClick={toggleContactFull}>
        <FontAwesomeIcon className="icon" icon={faTimesCircle} onClick={toggleContactFull} />
      <ContactMenuFull />
  </Navbar>
    )}
   </>
  );
}