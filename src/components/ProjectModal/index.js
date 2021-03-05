import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

export default function ProjectModal({
    name,
    image,
    imageLarge,
    tech,
    description,
    webUrl,
    githubUrl,
    id,
    handleClose,
    // handleShow,
    show,
}) {
    return (
        <Modal className="projModal" onHide={handleClose} show={show}>
        <Modal.Header closeButton onClick={handleClose}>
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
    )
}
