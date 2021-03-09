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
                icon={info.icon}
                aria-label={info.ariaLabel}
                size="3x"
                style={{ color: info.color }}
              />
              <h6 className="labelText">{info.pLabel}</h6>
            </Nav.Link>
          ))}
        </Nav>
  );
}
