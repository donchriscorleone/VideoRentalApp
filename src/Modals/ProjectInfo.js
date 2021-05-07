import React from "react";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";

function ProjectInfo(props) {
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
            Project Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Programming Language</h4>
          <p>
            The programming language that is used from front-end to back-end is
            JavaScript.
          </p>
          <h1 className="display-5 text-center text-uppercase my-4">
            Frameworks
          </h1>
          <Row className="g-0 container-fluid justify-content-md-center my-3">
            <Col className="col-sm-6 col-12">
              <img
                alt="profilepicture"
                src="https://thumbs.gfycat.com/BestMeagerHoki-small.gif"
                className="img-fluid shadow-2-strong rounded-circle"
              />
            </Col>
            <Col className="text-center">
              <h1>ReactJS</h1>
              <Container className="container-fluid my-3">
                <a
                  className="btn-lg btn-success py-3 mx-2"
                  href="https://github.com/facebook/react"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  className="btn-lg btn-warning py-3"
                  href="https://www.npmjs.com/package/react"
                  target="_blank"
                  rel="noreferrer"
                >
                  NPM
                </a>
                <p className="fst-italic mt-5 fs-4">
                  ReactJS is a very popular framework for building user
                  interfaces.
                </p>
              </Container>
            </Col>
          </Row>
          <Row className="g-0 container-fluid justify-content-md-center my-5">
            <Col className="text-center">
              <h1>NodeJs & ExpressJS</h1>
              <Container className="container-fluid my-3">
                <a
                  className="btn-lg btn-success py-3 mx-2"
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  NodeJS
                </a>
                <a
                  className="btn-lg btn-warning py-3"
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ExpressJS
                </a>
                <p className="fst-italic mt-5 fs-4">
                  NodeJS allows us to run javascript code outside of our
                  browsers. Express is a lightweight framework that is used for
                  robust tooling for HTTP servers.
                </p>
              </Container>
            </Col>
            <Col className="col-sm-6 col-12">
              <img
                alt="profilepicture"
                src="https://hackernoon.com/hn-images/1*26BcOdrwfRkbGk9OsREyLA.png"
                className="img-fluid shadow-2-strong rounded-circle"
              />
            </Col>
          </Row>
          <h1 className="display-5 text-center text-uppercase my-4">
            Database Management System
          </h1>
          <Row className="g-0 container-fluid justify-content-md-center my-3">
            <Col className="col-sm-6 col-12">
              <img
                alt="profilepicture"
                src="https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW.png"
                className="img-fluid shadow-2-strong rounded-circle"
              />
            </Col>
            <Col className="text-center">
              <h1>MySQL</h1>
              <Container className="container-fluid my-3">
                <a
                  className="btn-lg btn-success py-3 mx-2"
                  href="https://www.npmjs.com/package/mysql"
                  target="_blank"
                  rel="noreferrer"
                >
                  NPM
                </a>
                <a
                  className="btn-lg btn-info py-3"
                  href="hhttps://www.mysql.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  MySQL
                </a>
                <p className="fst-italic mt-5 fs-4">
                  MySQL is an open-source relational database management system.
                </p>
              </Container>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-dark" onClick={props.onHide}>
            <i className="fas fa-window-close me-2"></i> Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectInfo;
