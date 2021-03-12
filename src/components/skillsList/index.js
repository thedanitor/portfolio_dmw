import React from "react";
import "./style.css";
import ListGroup from "react-bootstrap/ListGroup";

export default function SkillsList({ skill }) {

  return (
        <ListGroup.Item className="skillsListItem">
          {skill}
        </ListGroup.Item>
  );
}