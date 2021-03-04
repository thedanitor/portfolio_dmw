import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import portfolioList from "../../utils/portfolioList";

export default function ProjectCarousel() {
  return (
    <Container>
      <Carousel interval={null}>
        {portfolioList.map((proj, index) => (
          <Carousel.Item id={proj.id} key={index}>
            <img
              className="d-block w-100"
              
              src={proj.imageLarge}
              alt={proj.name}
            />
            <Carousel.Caption>
              <h3>{proj.name}</h3>
              <p>{proj.description}</p>
              <p>{proj.tech}</p>
              <Button
                variant="primary"
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository
              </Button>
              <Button
                variant="primary"
                href={proj.webUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Website
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
