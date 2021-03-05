import React, { useState } from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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
        <Card className="projCard" onMouseLeave={handleHover} onClick={handleModal}>
          <Card.Body className="cardBody">
          <Card.Img className="cardImg" src={image} />
            <Card.Title className="cardTitle">{name}</Card.Title>
            <Card.Text className="cardText">Click to view details</Card.Text>
          </Card.Body>

          {/* <ProjectModal
          setHover={setHover}
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
          /> */}

<Modal className="projModal" onHide={handleModal} show={show} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Card >
          <Card.Img variant="top" src={imageLarge} />
          <Card.Body>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{tech}</Card.Text>
            <Button
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
            </Button>
          </Card.Body>
        </Card>
      </Modal>

        </Card>
      )}
    </>
  );
}
