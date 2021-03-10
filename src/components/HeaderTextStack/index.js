import React, { useState, useEffect } from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function HeaderTextStack() {
  const [loaded, setLoaded] = useState();

  // when DOM loads, apply "loaded" state --> gives h2's className="loaded"
  useEffect(() => {
    setLoaded("loaded");
  }, []);

  return (
    <Col id="textStack">
      <Row>
        <h1 className={loaded} style={{transitionDelay: "0.2s"}}>Full</h1>
      </Row>
      <Row>
        <h1 className={loaded} style={{transitionDelay: "0.4s"}}>Stack</h1>
      </Row>
      <Row>
        <h1 className={loaded} style={{transitionDelay: "0.6s"}}>Web</h1>
      </Row>
      <Row>
        <h1 className={loaded} style={{transitionDelay: "0.8s"}}>Developer</h1>
      </Row>
    </Col>
  );
}
