import React from "react";
import "./style.css";

import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactInfo from "../../utils/contactInfo";

export default function ContactMenuFull() {




  return (
        <Nav className="contactFull flex-column">
          {contactInfo.map((info, index) => (
            <Nav.Link
              className="linkItems"
              href={info.href}
              key={index}
              target={info.target}
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="contactIcon"
                icon={info.icon}
                aria-label={info.ariaLabel}
                style={{ color: info.color }}
              />
              <h5 className="labelText">{info.pLabel}</h5>
            </Nav.Link>
          ))}
        </Nav>
  );
}
