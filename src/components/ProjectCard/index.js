import React, { useState } from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import ProjectModal from "../ProjectModal";

export default function ProjectCard({
  name,
  image,
  imageLarge,
  tech,
  description,
  webUrl,
  githubUrl,
}) {
  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      setHover(false);
    }, 100);
  };
  const handleShow = () => {
    setShow(true);
  };

  const handleHover = () => {
    hover ? setHover(false) : setHover(true);
  };

  const handleModal = () => {
    show ? handleClose() : handleShow();
  };

  return (
    <>
      {hover === false ? (
        <Card className="projImg">
          <Card.Img variant="top" src={image} onMouseEnter={handleHover} />
        </Card>
      ) : (
        <Card
          className="projCard"
          onMouseLeave={handleHover}
          onClick={handleModal}
        >
          <Card.Body className="cardBody">
            <Card.Img className="cardImg" src={image} />
            <Card.Title className="cardTitle">{name}</Card.Title>
            <Card.Text className="cardText">Click to view details</Card.Text>
          </Card.Body>
          <ProjectModal
            className="projModalEl"
            handleModal={handleModal}
            show={show}
            name={name}
            imageLarge={imageLarge}
            tech={tech}
            description={description}
            webUrl={webUrl}
            githubUrl={githubUrl}
          />
        </Card>
      )}
    </>
  );
}
