import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "react-bootstrap/Image";

export default function SkillsIcon({ skill, skillIcon, iconColor, fa }) {
    console.log(fa);
    return (
      <>
        {fa ? (
          <FontAwesomeIcon className="skillsIcon" icon={skillIcon} style={{ color: iconColor }} />
        ) : (
          <div className="skillsIcon">
          <Image className="skillIconImg" src={skillIcon} alt={skill} fluid/>
          </div>
        )}
      </>
    );
  }