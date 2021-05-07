import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { copiesLink } from "../../Links/dbCopies";

function EditModal(props) {
  const copyApi = axios.create({
    baseURL: copiesLink,
  });
  const [editProp, setEditProp] = useState({
    additionalNotes: props.copy.additionalNotes,
  });

  async function handleEdit(e) {
    e.preventDefault();
    let request = await copyApi.put(`${props.copy.copyId}`, {
      additionalNotes: editProp.additionalNotes,
    });

    props.onHide();
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
        <form onSubmit={(e) => handleEdit(e)}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Copy
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="text-center font-monospace">
            <h1 className="fs-4">Additional Notes</h1>
            <input
              type="text"
              placeholder={props.copy.additionalNotes}
              value={editProp.additionalNotes}
              onChange={(e) =>
                setEditProp({ ...editProp, additionalNotes: e.target.value })
              }
            />
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={props.onHide} className="mx-4 btn-dark">
              <i className="fas fa-window-close me-2"></i> Close
            </Button>
            <Button className="mx-4 btn-success" type="submit">
              <i className="fas fa-paper-plane me-2"></i> Edit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default EditModal;
