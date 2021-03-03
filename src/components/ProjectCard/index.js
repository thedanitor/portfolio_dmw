import React, { useState } from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProjectCard({
  name,
  image,
  imageLarge,
  tech,
  description,
  webUrl,
  githubUrl,
  id,
}) {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    hover ? setHover(false) : setHover(true);
  };

  return (
    <>
      {hover === false ? (
        <Card className="smCard">
          <Card.Img variant="top" src={image} onMouseEnter={handleHover} />
        </Card>
      ) : (
        <Card className="lgCard" onMouseLeave={handleHover}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            {/* <Card.Text>{description}</Card.Text> */}
            <Card.Text>{tech}</Card.Text>
            <Button
              variant="primary"
              
              // target="_blank"
              // rel="noopener noreferrer"
            >
              <a href={id}>View Details</a>
            </Button>
            {/* <Button
              variant="primary"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </Button>
            <Button
              variant="primary"
              href={webUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Website
            </Button> */}
          </Card.Body>
        </Card>
      )}
    </>
  );
}
