import React from "react";
import "./style.css";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import frontEndSkills from "../../utils/frontEndSkills";
import backEndSkills from "../../utils/backEndSkills";
import relatedSkills from "../../utils/relatedSkills";
import SkillsList from "../../components/skillsList";

export default function SkillsLists() {
  return (
    <>
      <Col className="top" xs={9} sm={6} md={4}>
        <ListGroup className="skillsLists">
          <ListGroup.Item className="skillsListHeading">
            <span className="listHeaderText">Client Side</span>
          </ListGroup.Item>
          {frontEndSkills.map((skill, index) => (
            <SkillsList key={index} skill={skill.skill} />
          ))}
        </ListGroup>
      </Col>
      <Col className="top" xs={9} sm={6} md={4}>
        <ListGroup className="skillsLists">
          <ListGroup.Item className="skillsListHeading">
            <span className="listHeaderText">Server Side</span>
          </ListGroup.Item>
          {backEndSkills.map((skill, index) => (
            <SkillsList key={index} skill={skill.skill} />
          ))}
        </ListGroup>
      </Col>
      <Col className="top" xs={9} sm={6} md={4}>
        <ListGroup className="skillsLists">
          <ListGroup.Item className="skillsListHeading">
            <span className="listHeaderText">Related</span>
          </ListGroup.Item>
          {relatedSkills.map((skill, index) => (
            <SkillsList key={index} skill={skill.skill} />
          ))}
        </ListGroup>
      </Col>
    </>
  );
}
