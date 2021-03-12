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
            <h1>
              <span className="sectionHeader">Technical </span>
              <span className="sectionHeader">Skills</span>
            </h1>
          </Col>
        </Row>
        <Row id="#skillsRow">
          <SkillsLists/>
        </Row>
      </Container>
    </div>
  );
}
