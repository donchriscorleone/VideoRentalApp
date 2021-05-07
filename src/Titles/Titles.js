import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import TitleCard from "./TitleCard";
import CreateModal from "./TitleModal/CreateModal";
import { downloadAllTitles } from "../Assets/DownloadRecord";
import { titlesLink } from "../Links/dbTitles";

function Titles() {
  const [titles, setTitles] = useState([]);
  const [createModal, setCreateModal] = useState(false);

  async function getTitles() {
    let request = await fetch(titlesLink);
    let results = await request.json();
    setTitles(results);
  }

  useEffect(() => {
    getTitles();
  }, []);
  return (
    <>
      <Container className="container-fluid my-5">
        <Row className="g-0 justify-content-md-center">
          <Col className="col-sm-6 col-12 text-center my-2">
            <Button
              className="btn-secondary btn-lg"
              onClick={() => setCreateModal(!createModal)}
            >
              <i className="fas fa-plus me-2"></i>
              Create Title
            </Button>
          </Col>
          <Col className="col-sm-6 col-12 text-center my-2">
            {titles.length === 0 ? (
              <Button className="btn-primary btn-lg disabled">
                <i className="fas fa-file-pdf me-2"></i>
                No records to download
              </Button>
            ) : (
              <Button
                className="btn-primary btn-lg"
                onClick={() => downloadAllTitles(titles)}
              >
                <i className="fas fa-file-pdf me-2"></i>
                Download All
              </Button>
            )}
          </Col>
        </Row>
      </Container>
      <Container className="container-fluid my-5 px-5">
        <Row className="g-0 justify-content-md-center">
          {titles.map((t) => {
            return (
              <TitleCard
                key={t.titleId}
                title={t}
                getitles={() => getTitles()}
              />
            );
          })}
        </Row>
      </Container>
      <CreateModal
        show={createModal}
        onHide={() => setCreateModal(!createModal)}
        gettitles={getTitles}
      />
    </>
  );
}

export default Titles;
