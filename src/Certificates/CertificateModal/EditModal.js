import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { certificateLink } from "../../Links/dbCertificate";

function EditModal(props) {
  const api = axios.create({
    baseURL: certificateLink,
  });

  const [certificate, setCertificate] = useState({
    id: props.certificate.certificateId,
    name: props.certificate.certificateName,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (certificate.name === "") return alert("Certificate is blank!");

    await api.put(`/${certificate.id}`, {
      certificateName: certificate.name,
    });
    console.log(certificate);
    props.onHide();
    window.location.reload();
  }
  useEffect(() => {}, []);
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
            Edit: {props.certificate.certificateName}
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
              value={certificate.name}
              onChange={(e) =>
                setCertificate({ ...certificate, name: e.target.value })
              }
            />
            <br />
            <Button
              className="btn-dark mx-3 btn-lg my-2"
              onClick={props.onHide}
            >
              <i className="fas fa-window-close me-2"></i>Close
            </Button>
            <Button className="btn-info mx-3 btn-lg my-2" type="submit">
              <i className="fas fa-paper-plane me-2"></i> Edit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditModal;
