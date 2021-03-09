import React from "react";
import "./style.css";

import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactInfo from "../../utils/contactInfo";

export default function ContactMenu() {




  return (
        <Nav>
          {contactInfo.map((info, index) => (
            <Nav.Link
              href={info.href}
              key={index}
              target={info.target}
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={info.icon}
                aria-label={info.ariaLabel}
                size="2x"
                style={{ color: info.color }}
              />
            </Nav.Link>
          ))}
        </Nav>
  );
}
