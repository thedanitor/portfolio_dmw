import React, { useState, useEffect } from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function HeaderTextStack() {
  const [loaded, setLoaded] = useState();
  useEffect(() => {
    setLoaded("loaded");
  }, []);

  return (
    <Col id="textStack">
      <Row>
        <h2 className={loaded} style={{transitionDelay: "0.2s"}}>Full</h2>
      </Row>
      <Row>
        <h2 className={loaded} style={{transitionDelay: "0.4s"}}>Stack</h2>
      </Row>
      <Row>
        <h2 className={loaded} style={{transitionDelay: "0.6s"}}>Web</h2>
      </Row>
      <Row>
        <h2 className={loaded} style={{transitionDelay: "0.8s"}}>Developer</h2>
      </Row>
    </Col>
  );
}
