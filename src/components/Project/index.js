import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import portfolioList from "../../utils/portfolioList";
import ProjectCard from "../ProjectCard";

export default function Project() {
  return (
    <Container>
      <Row>
        {portfolioList.map((proj, index) => (
          <Col className="cardCol" xs={12} md={6} xl={4} key={index}>
            <ProjectCard
              className="projectCard"
              name={proj.name}
              image={proj.image}
              imageLarge={proj.imageLarge}
              tech={proj.tech}
              description={proj.description}
              webUrl={proj.webUrl}
              githubUrl={proj.githubUrl}
              transition={proj.transition}
              key={index}
              id={proj.id}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
