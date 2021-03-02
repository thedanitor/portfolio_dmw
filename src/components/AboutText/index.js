import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutHeader from "../AboutHeader";
// import DownArrow from "../DownArrow";

export default function AboutText() {
  return (
    <Container className="aboutCon">
      <AboutHeader />
      <Row>
        <Col></Col>
        <Col xs={8} className="aboutText top">
          <p>
            Chemist turned web developer has the formula to synthesize
            analytical experience and problem-solving abilities with creative
            technical solutions. Analytical chemistry requires me to employ my
            critical thinking, troubleshooting, and problem-solving abilities
            constantly. I have turned my attention to web development because it
            not only requires these skills, but encourages creativity as well.
          </p>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8} className="aboutText">
          <p>
            As a recent graduate of University of Washington's coding bootcamp
            for full-stack web development I have learned so much in the past
            year. I am continually building on this solid foundation by
            independently studying and applying new techniques, practices,
            libraries, and languages.
          </p>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={8} className="aboutText">
          <p>
            When I am not coding I am hopefully biking, hiking, camping,
            reading, or playing music. Feel free browse my work below and don't
            hesitate to contact me.
          </p>
        </Col>
        <Col></Col>
      </Row>
      {/* <DownArrow /> */}
    </Container>
  );
}
