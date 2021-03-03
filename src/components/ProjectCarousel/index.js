import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import portfolioList from "../../utils/portfolioList";

export default function ProjectCarousel() {
  return (
    <Container>
    <Carousel>
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
      
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
    </Container>
  );
}
