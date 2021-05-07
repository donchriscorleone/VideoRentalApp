import React, { useState, useEffect } from "react";
import { Modal, Button, Col, Row, Container } from "react-bootstrap";

const formatDate = (date) => {
  const d = new Date(date);
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  const mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  return `${ye}/${mo}/${da}`;
};

function InsertModal(props) {
  const [createProp, setCreateProp] = useState({
    title: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    addressStreet: "",
    addressTownVillage: "",
    addressPostCode: "",
    telephoneNumber: "",
    additionalNotes: "",
  });

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
            New Member
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className="text-center font-monospace"
            onSubmit={() => props.handleSubmit(createProp)}
          >
            <h1 className="fs-4 mt-3">Title</h1>
            <input
              type="text"
              placeholder="Example: Mr. Ms. Mrs. Dr."
              required
              onChange={(e) =>
                setCreateProp({ ...createProp, title: e.target.value })
              }
            />
            <h1 className="fs-4 mt-3">First Name</h1>
            <input
              type="text"
              placeholder="Juan"
              required
              onChange={(e) =>
                setCreateProp({ ...createProp, firstName: e.target.value })
              }
            />
            <h1 className="fs-4 mt-3">Last Name</h1>
            <input
              type="text"
              placeholder="Dela Cruz"
              required
              onChange={(e) =>
                setCreateProp({ ...createProp, lastName: e.target.value })
              }
            />
            <h1 className="fs-4 mt-3">Date of Birth</h1>
            <input
              type="date"
              required
              pattern="\d{4}-\d{2}-\d{2}"
              onChange={(e) =>
                setCreateProp({
                  ...createProp,
                  dateOfBirth: formatDate(e.target.valueAsDate),
                })
              }
            />
            <h1 className="fs-4 mt-3">Address</h1>
            <input
              type="text"
              placeholder="123 Juan Luna"
              required
              className="mx-2 mb-2"
              onChange={(e) =>
                setCreateProp({ ...createProp, addressStreet: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Tondo, Manila"
              required
              className="mx-2 mb-2"
              onChange={(e) =>
                setCreateProp({
                  ...createProp,
                  addressTownVillage: e.target.value,
                })
              }
            />
            <input
              type="number"
              placeholder="Post Code ex. 1012"
              required
              className="mx-2 mb-2"
              onChange={(e) =>
                setCreateProp({
                  ...createProp,
                  addressPostCode: e.target.value,
                })
              }
            />
            <h1 className="fs-4 mt-3">Telephone Number</h1>
            <input
              type="tel"
              placeholder="09xxxxxxxxx"
              required
              onChange={(e) =>
                setCreateProp({
                  ...createProp,
                  telephoneNumber: e.target.value,
                })
              }
            />
            <h1 className="fs-4 mt-3">Additional Notes</h1>
            <input
              type="text"
              placeholder="This is optional"
              onChange={(e) =>
                setCreateProp({
                  ...createProp,
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
                    <i className="fas fa-window-close me-2"></i>Close
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
    </>
  );
}

export default InsertModal;
