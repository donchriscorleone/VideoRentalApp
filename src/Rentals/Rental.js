import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CreateModal from "./Modals/CreateModal";
import axios from "axios";
import RentalsCard from "./RentalsCard";
import { downloadAllRentals } from "../Assets/DownloadRecord";
import { rentalsLink } from "../Links/dbRentals";
import { copiesLink } from "../Links/dbCopies";

function Rental() {
  const rentalApi = axios.create({
    baseURL: rentalsLink,
  });
  const copiesApi = axios.create({
    baseURL: copiesLink,
  });
  const [rentals, setRentals] = useState([]);
  const [vacantCopies, setVacantCopies] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  async function getRentals() {
    let request = await fetch(rentalsLink);
    let result = await request.json();
    let request2 = await fetch(copiesLink + "/creatingRentals");
    let result2 = await request2.json();
    setRentals(result);
    setVacantCopies(result2);
  }

  async function handleDelete(rentalId, copyId) {
    let deleteRental = await rentalApi.put(`/${rentalId}/delete`);
    let changeCurrentlyHiredCopy = await copiesApi.put(`/${copyId}/hired/0`);
    window.location.reload();
  }

  async function handleReturns(rentalId, copyId) {
    let returnCopy = await rentalApi.put(`/${rentalId}/returnCopy`);
    let changeCurrentlyHiredCopy = await copiesApi.put(`/${copyId}/hired/0`);
    window.location.reload();
  }

  useEffect(() => {
    getRentals();
  }, []);
  return (
    <>
      <Container className="container-fluid my-4 px-2">
        <Row className="g-0 justify-content-md-center">
          <Col className="col-sm-6 col-12 text-center my-2">
            {vacantCopies.length == 0 ? (
              <Button className="btn-lg btn-dark my-2" disabled>
                <i className="fas fa-film me-2"></i> No Vacant Copies
              </Button>
            ) : (
              <Button
                className="btn-lg btn-secondary my-2"
                onClick={() => setShowCreateModal(!showCreateModal)}
              >
                <i className="fas fa-film me-2"></i>Rent a Film
              </Button>
            )}
          </Col>
          <Col className="col-sm-6 col-12 text-center my-2">
            {rentals.length === 0 ? (
              <Button className="btn-lg btn-primary my-2 disabled">
                <i className="fas fa-file-pdf me-2"></i>
                No records to download
              </Button>
            ) : (
              <Button
                className="btn-lg btn-primary my-2"
                onClick={() => downloadAllRentals(rentals)}
              >
                <i className="fas fa-file-pdf me-2"></i>
                Download All
              </Button>
            )}
          </Col>
        </Row>
        <Row className="g-0 justify-content-md-center mt-5">
          {rentals.map((r) => {
            return (
              <RentalsCard
                key={r.rentalId}
                rental={r}
                handledelete={handleDelete}
                handlereturn={handleReturns}
              />
            );
          })}
        </Row>
      </Container>
      <CreateModal
        show={showCreateModal}
        onHide={() => setShowCreateModal(!showCreateModal)}
        loadrentals={getRentals}
      />
    </>
  );
}

export default Rental;
