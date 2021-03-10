import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProjectCard({
  name,
  image,
  tech,
  description,
  webUrl,
  githubUrl,
}) {
  return (
    <Card className="projCard">
      <Card.Body className="cardBody">
        <Card.Img className="cardImg" src={image} />
      </Card.Body>
      <Card.Body className="cardInfo">
        <Card.Title className="cardTitle">{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{tech}</Card.Text>
        <Button
          className="projBtn"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Repository
        </Button>
        <Button
          className="projBtn"
          href={webUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Website
        </Button>
      </Card.Body>
    </Card>
  );
}
