import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CreateModal from "./Copies Modal/CreateModal";
import CopiesCard from "./CopiesCard";
import { downloadAllCopies } from "../Assets/DownloadRecord";
import { copiesLink } from "../Links/dbCopies";

function Copies() {
  const [copies, setCopies] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  async function getCopies() {
    let request = await fetch(copiesLink);
    let response = await request.json();
    setCopies(response);
  }

  useEffect(() => {
    getCopies();
  });

  return (
    <>
      <Container className="container-fluid my-4 px-2">
        <Row className="g-0 justify-content-md-center">
          <Col className="col-sm-6 col-12 text-center my-2">
            <Button
              className="btn-lg btn-secondary my-2"
              onClick={() => setShowCreateModal(!showCreateModal)}
            >
              <i className="fas fa-plus me-2"></i>Create Copy
            </Button>
          </Col>
          <Col className="col-sm-6 col-12 text-center my-2">
            {copies.length === 0 ? (
              <Button className="btn-lg btn-primary my-2 disabled">
                <i className="fas fa-file-pdf me-2"></i>No records to download
              </Button>
            ) : (
              <Button
                className="btn-lg btn-primary my-2"
                onClick={() => downloadAllCopies(copies)}
              >
                <i className="fas fa-file-pdf me-2"></i>Download All
              </Button>
            )}
          </Col>
          {copies.map((c) => {
            return <CopiesCard key={c.copyId} copy={c} />;
          })}
        </Row>
      </Container>
      <CreateModal
        show={showCreateModal}
        onHide={() => setShowCreateModal(!showCreateModal)}
      />
    </>
  );
}

export default Copies;
