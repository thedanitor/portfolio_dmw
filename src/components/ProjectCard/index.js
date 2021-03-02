import React from "react";
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
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          {tech}
        </Card.Text>
        <Button variant="primary" href={githubUrl}>View Repository</Button>
        <Button variant="primary" href={webUrl}>View Website</Button>
      </Card.Body>
    </Card>
  );
}
