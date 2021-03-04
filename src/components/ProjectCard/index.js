import React, { useState } from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProjectModal from "../ProjectModal";

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
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      setHover(false);
    }, 100);
  }
  const handleShow = () => {
    setShow(true);
  }
  const handleHover = () => {
    hover ? setHover(false) : setHover(true);
  };

  return (
    <>
      {hover === false ? (
        <Card className="projImg">
          <Card.Img variant="top" src={image} onMouseEnter={handleHover} />
        </Card>
      ) : (
        <Card className="projCard" onMouseLeave={handleHover}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            {/* <Card.Text>{description}</Card.Text> */}
            {/* <Card.Text>{tech}</Card.Text> */}
            <Button
              variant="primary"
              onClick={handleShow}
            >
              View Details
            </Button>
          </Card.Body>
          <ProjectModal
          // setHover={setHover}
            handleClose={handleClose}
            handleShow={handleShow}
            show={show}
            name={name}
            imageLarge={imageLarge}
            tech={tech}
            description={description}
            webUrl={webUrl}
            githubUrl={githubUrl}
            id={id}
          />
        </Card>
      )}
    </>
  );
}
