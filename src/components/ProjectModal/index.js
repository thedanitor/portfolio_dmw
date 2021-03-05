import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

export default function ProjectModal({
  name,
  imageLarge,
  tech,
  description,
  webUrl,
  githubUrl,
  handleModal,
  show,
}) {
  return (
    <Modal
      className="projModal"
      onHide={handleModal}
      show={show}
      size="lg"
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Card className="modalCard">
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
  );
}
