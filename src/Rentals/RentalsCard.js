import React, { useState, useEffect } from "react";
import { Col, Button } from "react-bootstrap";
import axios from "axios";
import EditModal from "./Modals/EditModal";
import { downloadRental } from "../Assets/DownloadRecord";

function RentalsCard(props) {
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <>
      <Col className=" col-sm-6 col-12 my-4 px-5 text-light">
        <div className="card text-center font-monospace bg-dark text-white">
          <div className="card-header fs-4">
            Rental ID {props.rental.rentalId} - {props.rental.titleName}
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Date Hired:{" "}
              {new Date(props.rental.dateHired).toLocaleDateString()}
            </h5>

            {new Date().getTime() >=
            new Date(props.rental.dateDueBack).getTime() ? (
              <p className="card-text badge bg-danger rounded-pill">
                {new Date(props.rental.dateDueBack).toLocaleDateString()} - DUE
                NOW!
              </p>
            ) : (
              <p className="card-text badge bg-secondary rounded-pill">
                Date due back:{" "}
                {new Date(props.rental.dateDueBack).toLocaleDateString()}
              </p>
            )}
            <p className="card-text">
              Rented by:{" "}
              {props.rental.title +
                " " +
                props.rental.firstName +
                " " +
                props.rental.lastName}
            </p>
            <p className="card-text">
              Film Copy Hire Cost: {props.rental.filmCopyHireCost}
            </p>
            <p className="card-text">
              Overdue Cost Per Day: {props.rental.overdueCostPerDay}
            </p>
            {props.rental.returnedDate === null ? (
              <Button className="btn-lg btn-danger mx-3 my-2 disabled">
                <i className="far fa-trash-alt"></i> Delete
              </Button>
            ) : (
              <Button
                className="btn-lg btn-danger mx-3 my-2"
                onClick={() => {
                  props.handledelete(
                    props.rental.rentalId,
                    props.rental.copyId
                  );
                }}
              >
                <i className="far fa-trash-alt"></i> Delete
              </Button>
            )}
            {props.rental.returnedDate === null ? (
              <Button
                className="btn-lg btn-success mx-3 my-2"
                onClick={() => setShowEditModal(!showEditModal)}
              >
                <i className="fas fa-edit me-2"></i> Edit
              </Button>
            ) : (
              <Button className="btn-lg btn-success mx-3 my-2" disabled>
                <i className="fas fa-edit me-2"></i> Edit
              </Button>
            )}
            <br />
            {props.rental.returnedDate === null ? (
              <Button
                className="btn-lg btn-warning mx-3 my-2"
                onClick={() =>
                  props.handlereturn(props.rental.rentalId, props.rental.copyId)
                }
              >
                <i class="fas fa-exchange-alt me-2"></i> Return
              </Button>
            ) : (
              <Button className="btn-lg btn-warning mx-3 my-2" disabled>
                <i class="fas fa-exchange-alt me-2"></i>
                Returned
              </Button>
            )}
            <Button
              className="btn-lg btn-primary mx-3 my-2"
              onClick={() => downloadRental(props.rental)}
            >
              <i className="fas fa-file-pdf me-2"></i>Download
            </Button>
          </div>
          <div className="card-footer text-muted">
            {props.rental.returnedDate === null
              ? "Not yet returned"
              : "Returned at: " +
                new Date(props.rental.returnedDate).toDateString()}
          </div>
        </div>
      </Col>
      <EditModal
        show={showEditModal}
        onHide={() => setShowEditModal(!showEditModal)}
        rental={props.rental}
      />
    </>
  );
}

export default RentalsCard;
