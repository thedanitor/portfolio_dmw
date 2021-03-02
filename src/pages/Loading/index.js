import React from "react";
// import loadGif from "../../assets/images/dmwLoading.gif";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";


export default function Loading() {
  return (
    // <div id="loadBackground">
    //     <HeaderPhoto />
    //   {/* <img src={loadGif} alt="DMW loading" /> */}
    //   <Row>
    //     <Col className="spinCol">
    //       <Spinner animation="grow" variant="primary" />
    //       <Spinner animation="grow" variant="secondary" />
    //       <Spinner animation="grow" variant="success" />
    //       <Spinner animation="grow" variant="danger" />
    //       <Spinner animation="grow" variant="warning" />
    //       <Spinner animation="grow" variant="info" />
    //       <Spinner animation="grow" variant="light" />
    //       <Spinner animation="grow" variant="dark" />
    //     </Col>
    //   </Row>
    // </div>

    <div id="bgOverlay">
      <Container>
        <Row>
          {/* <Col></Col> */}
          <Col id="spinners" className="h-100 d-inline-block">
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <h1>Loading Portfolio...</h1>
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
          </Col>
          {/* <HeaderTextStack /> */}
        </Row>
      </Container>
    </div>
  );
}
