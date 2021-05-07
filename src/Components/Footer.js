import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Developers from "./DevelopersLink";
import Disclaimer from "./Disclaimer";
function Footer() {
  return (
    <>
      <Container className="container-fluid">
        <Row className="g-0 justify-content-center">
          <Col className="col-12  text-center">
            <Disclaimer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
