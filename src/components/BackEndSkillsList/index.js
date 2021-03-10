import React, { useState } from "react";
import "./style.css";
import ListGroup from "react-bootstrap/ListGroup";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SkillsIcon from "../SkillsIcon";

export default function BackEndSkillsList({ skill, skillIcon, iconColor, fa }) {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    hover ? setHover(false) : setHover(true);
  };

  return (
    <>
      {/* {hover === false ? ( */}
        <ListGroup.Item className="skillsListItem" onMouseEnter={handleHover}>
          {skill}
        </ListGroup.Item>
      {/* ) : (
        <ListGroup.Item className="skillsListItem" onMouseLeave={handleHover}>
          <SkillsIcon 
          skill={skill}
          skillIcon={skillIcon}
          iconColor={iconColor}
          fa={fa}
          />

        </ListGroup.Item>
      )} */}
    </>
  );
}
