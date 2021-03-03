import React, { useState } from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
import portfolioList from "../../utils/portfolioList";
import ProjectCard from "../ProjectCard";

export default function Project() {
//   const [clicked, setClicked] = useState(false);
//   const [med, setMed] = useState(6);
//   const [large, setLarge] = useState(4);

//   const handleClick = () => {
//       console.log("med" + med + "large" + large);
//     clicked ? setClicked(false) : setClicked(true);
//     med === 6 ? setMed(9) : setMed(6);
//     large === 4 ? setLarge(6) : setLarge(4);
//   };


  return (
    <Container>
      <Row>
        {portfolioList.map((proj, index) => (
          <Col 
        //   xs="auto" 
        //   onClick={handleClick}
          key={index}>
            <ProjectCard
                
              name={proj.name}
              image={proj.image}
              imageLarge={proj.imageLarge}
              tech={proj.tech}
              description={proj.description}
              webUrl={proj.webUrl}
              githubUrl={proj.githubUrl}
              transition={proj.transition}
              key={index}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
