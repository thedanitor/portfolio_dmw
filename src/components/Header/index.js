import React, { useState, useEffect } from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderPhoto from "../HeaderPhoto";
import HeaderTextStack from "../HeaderTextStack";
import DownArrow from "../DownArrow";

export default function Header() {
  const [photoConClass, setPhotoConClass] = useState("");

  const handleScroll = () => {
    // number of pixels currently scrolled along vertical axis
    let scrollHeight = window.pageYOffset;
    // if more than 10% of window height is scrolled
    if (scrollHeight > window.innerHeight * 0.1) {
      // apply "hidden" state (class)
      setPhotoConClass("hidden");
      // otherwise no class applied
    } else {
      setPhotoConClass("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div id="backgroundImg">
        <Container className="headerCon">
          <Row>
            <Col id="placeHolder"></Col>
            <Col id="photoCon" className={photoConClass} xs={6} sm={6}>
              <HeaderPhoto />
            </Col>
            <HeaderTextStack />
          </Row>
          <DownArrow />
        </Container>
    </div>
  );
}
