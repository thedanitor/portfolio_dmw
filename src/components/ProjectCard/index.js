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
}) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    clicked ? setClicked(false) : setClicked(true);
  };

  return (
    <>
      {clicked === false ? (
        <Card className="smCard">
          <Card.Img variant="top" src={image} 
          onClick={handleClick} 
          />
        </Card>
      ) : (
        <Card className="lgCard">
          <Card.Img variant="top" src={image} onClick={handleClick}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{tech}</Card.Text>
            <Button variant="primary" href={githubUrl}>
              View Repository
            </Button>
            <Button variant="primary" href={webUrl}>
              View Website
            </Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
}
