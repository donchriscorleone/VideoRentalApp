import React, { useState, useEffect } from "react";
import { Modal, Button, Col, Row, Container } from "react-bootstrap";
import axios from "axios";
import { membersLink } from "../../Links/dbMembers";

const formatDate = (date) => {
  const d = new Date(date);
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  const mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  return `${ye}/${mo}/${da}`;
};

const api = axios.create({
  baseURL: membersLink,
});

function EditModal(props) {
  const [editProp, setEditProp] = useState({
    title: props.editprop.title,
    firstName: props.editprop.firstName,
    lastName: props.editprop.lastName,
    dateOfBirth: props.editprop.dateOfBirth,
    addressStreet: props.editprop.addressStreet,
    addressTownVillage: props.editprop.addressTownVillage,
    addressPostCode: props.editprop.addressPostCode,
    telephoneNumber: props.editprop.telephoneNumber,
    additionalNotes: props.editprop.additionalNotes,
  });

  async function handleSubmit(e) {
    e.preventDefault();

    await api.put(`/${props.editprop.id}`, {
      title: editProp.title,
      firstName: editProp.firstName,
      lastName: editProp.lastName,
      dateOfBirth: editProp.dateOfBirth,
      addressStreet: editProp.addressStreet,
      addressTownVillage: editProp.addressTownVillage,
      addressPostCode: editProp.addressTownVillage,
      telephoneNumber: editProp.telephoneNumber,
      additionalNotes: editProp.additionalNotes,
    });

    e.target.reset();
    props.onHide();
    window.location.reload();
  }
  useEffect(() => {}, []);
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
            Edit Member:{" "}
            {props.editprop.title +
              " " +
              props.editprop.firstName +
              " " +
              props.editprop.lastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="text-center font-monospace" onSubmit={handleSubmit}>
            <h1 className="fs-4 mt-3">Title</h1>
            <input
              type="text"
              value={editProp.title}
              required
              onChange={(e) =>
                setEditProp({ ...editProp, title: e.target.value })
              }
            />
            <h1 className="fs-4 mt-3">First Name</h1>
            <input
              type="text"
              value={editProp.firstName}
              required
              onChange={(e) =>
                setEditProp({ ...editProp, firstName: e.target.value })
              }
            />
            <h1 className="fs-4 mt-3">Last Name</h1>
            <input
              type="text"
              value={editProp.lastName}
              required
              onChange={(e) =>
                setEditProp({ ...editProp, lastName: e.target.value })
              }
            />
            <h1 className="fs-4 mt-3">Date of Birth</h1>
            <input
              type="date"
              required
              pattern="\d{4}-\d{2}-\d{2}"
              onChange={(e) =>
                setEditProp({
                  ...editProp,
                  dateOfBirth: formatDate(e.target.valueAsDate),
                })
              }
            />
            <h1 className="fs-4 mt-3">Address</h1>
            <input
              type="text"
              value={editProp.addressStreet}
              required
              className="mx-2 mb-2"
              onChange={(e) =>
                setEditProp({
                  ...editProp,
                  addressStreet: e.target.value,
                })
              }
            />
            <input
              type="text"
              value={editProp.addressTownVillage}
              required
              className="mx-2 mb-2"
              onChange={(e) =>
                setEditProp({
                  ...editProp,
                  addressTownVillage: e.target.value,
                })
              }
            />
            <input
              type="number"
              value={editProp.addressPostCode}
              required
              className="mx-2 mb-2"
              onChange={(e) =>
                setEditProp({
                  ...editProp,
                  addressPostCode: e.target.value,
                })
              }
            />
            <h1 className="fs-4 mt-3">Telephone Number</h1>
            <input
              type="tel"
              value={editProp.telephoneNumber}
              required
              onChange={(e) =>
                setEditProp({
                  ...editProp,
                  telephoneNumber: e.target.value,
                })
              }
            />
            <h1 className="fs-4 mt-3">Additional Notes</h1>
            <input
              type="text"
              value={editProp.additionalNotes}
              onChange={(e) =>
                setEditProp({
                  ...editProp,
                  additionalNotes: e.target.value,
                })
              }
            />
            <Container className="container-fluid text-center mt-5">
              <Row>
                <Col className="col-12">
                  <Button
                    className="btn-dark mx-3 btn-lg"
                    onClick={props.onHide}
                  >
                    <i className="fas fa-window-close me-2"></i> Close
                  </Button>
                  <Button type="submit" className="btn-success  btn-lg">
                    <i className="fas fa-paper-plane me-2"></i> Edit
                  </Button>
                </Col>
              </Row>
            </Container>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditModal;
