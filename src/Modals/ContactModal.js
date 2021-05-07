import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";

function ContactModal(props) {
  const {
    REACT_APP_SERVICE_ID,
    REACT_APP_TEMPLATE_ID,
    REACT_APP_USER_ID,
  } = process.env;
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        e.target,
        REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    props.onHide();
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="bg-dark"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="text-center" onSubmit={sendEmail}>
          <h4>Email Sender</h4>
          <p className="fst-italic fs-5 font-monospace">
            To contact the developers, please enter your email and concern.
          </p>
          <label htmlFor="email" className="text-uppercase mx-3">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@domain.com"
            className="mb-4"
          />
          <br></br>
          <label htmlFor="message" className="text-uppercase mx-1">
            Message
          </label>
          <textarea name="message" placeholder="Message here..."></textarea>
          <Container className="container-fluid text-center mt-5">
            <Row>
              <Col className="col-12">
                <Button className="btn-dark mx-3 btn-lg" onClick={props.onHide}>
                  <i className="fas fa-window-close me-2"></i> Close
                </Button>
                <Button type="submit" className="btn-success  btn-lg">
                  <i className="fas fa-paper-plane me-2"></i> Submit
                </Button>
              </Col>
            </Row>
          </Container>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default ContactModal;
