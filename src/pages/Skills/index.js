import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SkillsLists from "../../components/SkillsLists";

export default function Skills() {
  return (
    <div id="Skills">
      <Container>
        <Row>
          <Col>
            <h1>Technical Skills</h1>
          </Col>
        </Row>
        <Row>
          <SkillsLists />
        </Row>
      </Container>
    </div>
  );
}
