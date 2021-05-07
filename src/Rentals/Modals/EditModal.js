import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { rentalsLink } from "../../Links/dbRentals";

function EditModal(props) {
  const rentalsApi = axios.create({
    baseURL: rentalsLink,
  });
  const [editProp, setEditProp] = useState({
    copyId: props.rental.copyId,
    rentalId: props.rental.rentalId,
    filmCopyHireCost: props.rental.filmCopyHireCost,
    overdueCostPerDay: props.rental.overdueCostPerDay,
  });

  async function handleEditSubmit(e) {
    e.preventDefault();
    await rentalsApi.put(`/${editProp.rentalId}/update`, {
      filmCopyHireCost: editProp.filmCopyHireCost,
      overdueCostPerDay: editProp.overdueCostPerDay,
    });
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
        <form onSubmit={handleEditSubmit}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Rental ID : {editProp.rentalId}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center font-monospace">
            <h1 className="fs-4 my-2 px-4">Film Copy Hire Cost</h1>
            <input
              type="number"
              required
              value={editProp.filmCopyHireCost}
              onChange={(e) =>
                setEditProp({
                  ...editProp,
                  filmCopyHireCost: e.target.value,
                })
              }
            ></input>
            <h1 className="fs-4 my-2 px-4">Overdue Cost Per Day</h1>
            <input
              type="number"
              required
              value={editProp.overdueCostPerDay}
              onChange={(e) =>
                setEditProp({
                  ...editProp,
                  overdueCostPerDay: e.target.value,
                })
              }
            ></input>
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
