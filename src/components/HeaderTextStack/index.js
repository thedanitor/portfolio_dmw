import React, { useState, useEffect } from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function HeaderTextStack() {
  
  // const [loaded, setLoaded] = useState();

  // componentDidMount() {
  //   setLoaded("loaded");
  // };

  // const handleScroll = () => {
  //   let scrollHeight = window.pageYOffset;
  //   if (scrollHeight > window.innerHeight * 0.1) {
  //     setPhotoConClass("hidden");
  //   } else {
  //     setPhotoConClass("");
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // });


  return (
    <Col id="textStack">
      <Row>
        <h2 className="stacking">Full</h2>
      </Row>
      <Row>
        <h2 className="stacking">Stack</h2>
      </Row>
      <Row>
        <h2 className="stacking">Web</h2>
      </Row>
      <Row>
        <h2 className="stacking">Developer</h2>
      </Row>
    </Col>
  );
}
