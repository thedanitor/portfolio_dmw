import React from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

export default function DownArrow() {
  return (
    <Row className="arrowRow">
      <Link
            href="#About"
            to="About"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
        <FontAwesomeIcon className="icon" icon={faChevronCircleDown} />
        </Link>
    </Row>
  );
}
