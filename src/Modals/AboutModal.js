import React from "react";
import pen from "../Assets/pen.jpg";
import kim from "../Assets/kim.jpg";

import { Modal, Button, Row, Col, Container } from "react-bootstrap";

function AboutModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="bg-dark"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            About Video Rental
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Purpose</h4>
          <p>
            This project is developed for the final requirement of Advance
            Database Management System 2nd Semester SY 2020-2021. It is
            developed by Christopher Lajom II and Kim Villafuerte. This is all
            for educational purposes only.
          </p>
          <h1 className="display-5 text-center text-uppercase my-4">
            Developers
          </h1>
          <Row className="g-0 container-fluid justify-content-md-center my-3">
            <Col className="col-sm-6 col-12">
              <img
                alt="profilepicture"
                src={pen}
                className="img-fluid shadow-2-strong rounded-circle"
              />
            </Col>
            <Col className="text-center">
              <h1>Lajom, Christopher II</h1>
              <Container className="container-fluid my-3">
                <a
                  className="btn-lg btn-success py-3 mx-2"
                  href="https://github.com/donchriscorleone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-github pe-2"></i>Github
                </a>
                <a
                  className="btn-lg btn-info py-3"
                  href="https://facebook.com/penpenlajom"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-facebook-f me-1"></i> Facebook
                </a>
                <p className="fst-italic mt-5 fs-4">
                  Another day, another peso.
                </p>
              </Container>
            </Col>
          </Row>
          <Row className="g-0 container-fluid justify-content-md-center my-5">
            <Col className="text-center">
              <h1>Villafuerte, Kim</h1>
              <Container className="container-fluid my-3">
                <a
                  className="btn-lg btn-success py-3 mx-2"
                  href="https://github.com/suppduck03"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-github pe-2"></i>Github
                </a>
                <a
                  className="btn-lg btn-info py-3"
                  href="https://www.facebook.com/kimvillafuerte"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-facebook-f me-1"></i> Facebook
                </a>
                <p className="fst-italic mt-5 fs-4">Sasageyo!</p>
              </Container>
            </Col>
            <Col className="col-sm-6 col-12">
              <img
                alt="profilepicture"
                src={kim}
                className="img-fluid shadow-2-strong rounded-circle"
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-dark" onClick={props.onHide}>
            <i className="fas fa-window-close me-2"></i>Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AboutModal;
