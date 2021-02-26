import React, { useState, useEffect } from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderPhoto from "../HeaderPhoto";
import HeaderTextStack from "../HeaderTextStack";

export default function Header() {
  const [photoConClass, setPhotoConClass] = useState("");

  const handleScroll = () => {
    let scrollHeight = window.pageYOffset;
    if (scrollHeight > window.innerHeight * 0.1) {
      setPhotoConClass("hidden");
    } else {
      setPhotoConClass("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div id="backgroundImg">
      <Container>
        <Row>
          <Col></Col>
          <Col id="photoCon" className={photoConClass} xs={6}>
            <HeaderPhoto />
          </Col>
          <HeaderTextStack />
        </Row>
      </Container>
    </div>
  );
}
