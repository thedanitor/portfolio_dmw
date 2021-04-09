import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import portfolioList from "../../utils/portfolioList";
import ProjectCard from "../ProjectCard";

export default function Project() {
  return (
    <Container className="projContainer">
      <h1>
        <span className="sectionHeader">Here </span>
        <span className="sectionHeader">are </span>
        <span className="sectionHeader">some </span>
        <span className="sectionHeader">of </span>
        <span className="sectionHeader">my </span>
        <span className="sectionHeader">projects </span>
      </h1>
      <small>Heroku apps may take some time to load. Refresh page if there is a timeout.</small>
      <Row>
        {portfolioList.map((proj, index) => (
          <Col className="cardCol" xs={12} md={6} key={index}>
            <Card className="cardBg">
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
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
