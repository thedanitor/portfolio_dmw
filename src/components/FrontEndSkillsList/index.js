import React, { useState } from "react";
import "./style.css";
import ListGroup from "react-bootstrap/ListGroup";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FrontEndSkillsList({ skill, skillIcon, iconColor }) {
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
          <FontAwesomeIcon icon={skillIcon} style={{ color: iconColor }} />
        </ListGroup.Item>
      )} */}
    </>
  );
}
