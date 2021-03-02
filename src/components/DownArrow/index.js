import React from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

export default function DownArrow() {
  return (
    <Row className="arrowRow">
      <a href="#About">
        <FontAwesomeIcon className="icon" icon={faChevronCircleDown} />
      </a>
    </Row>
  );
}
