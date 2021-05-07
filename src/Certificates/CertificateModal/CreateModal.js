import React, { useState } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { certificateLink } from "../../Links/dbCertificate";

function CreateModal(props) {
  const api = axios.create({
    baseURL: certificateLink,
  });

  const [certificate, setCertificate] = useState("");

  async function handleSubmit() {
    if (certificate === "") {
      return alert("Certificate is blank!");
    }
    let response = await api.post("/", {
      certificateName: certificate,
    });
    setCertificate("");
    props.onHide();
    window.location.reload();
  }
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="bg-dark"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-uppercase"
          >
            Create New Certificate
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="certificateName"
              className="mx-4 font-monospace fs-4"
            >
              Certificate Name:{" "}
            </label>

            <input
              type="text"
              name="certificateName"
              placeholder="Enter ceritifcate name.."
              onChange={(e) => setCertificate(e.target.value)}
            />
            <br />
            <Button
              className="btn-dark mx-3 btn-lg my-3"
              onClick={props.onHide}
            >
              <i className="fas fa-window-close me-2"></i> Close
            </Button>
            <Button className="btn-info mx-3 btn-lg my-3" type="submit">
              <i className="fas fa-paper-plane me-2"></i>Create
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateModal;
