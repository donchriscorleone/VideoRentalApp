import React, { useState, useEffect } from "react";
import { downloadAllCertificates } from "../Assets/DownloadRecord";
import { Table, Container, Row, Col, Button } from "react-bootstrap";
import CertificateCard from "./CertificateCard.js";
import CreateModal from "./CertificateModal/CreateModal";
import { certificateLink } from "../Links/dbCertificate";

function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [createModal, setCreateModal] = useState(false);

  const getCertificates = async () => {
    let response = await fetch(certificateLink);
    let result = await response.json();
    setCertificates(result);
  };

  useEffect(() => {
    getCertificates();
  }, []);

  return (
    <>
      <Container className="my-4 py-5">
        <Row className="g-0 justify-content-md-center pt-4">
          <Col className="col-sm-6 col-12 my-2 text-center">
            <Button
              className="btn-secondary btn-lg"
              onClick={() => setCreateModal(!createModal)}
            >
              <i className="fas fa-plus me-2"></i>Create Certificate
            </Button>
          </Col>
          <Col className="col-sm-6 col-12 my-2 text-center">
            {certificates.length === 0 ? (
              <Button className="btn-primary btn-lg disabled">
                <i className="fas fa-file-pdf me-2"></i>No records to download
              </Button>
            ) : (
              <Button
                className="btn-primary btn-lg"
                onClick={() => downloadAllCertificates(certificates)}
              >
                <i className="fas fa-file-pdf me-2"></i>Download All
              </Button>
            )}
          </Col>
        </Row>
        <Row className="g-0 justify-content-md-center my-5">
          <Table
            responsive
            striped
            bordered
            hover
            variant="dark"
            className="my-5 font-monospace text-center"
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Certificate Name</th>
                <th colSpan="3">Operations</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((c) => {
                return (
                  <>
                    <CertificateCard
                      key={c.certificateId}
                      certificate={c}
                      getcertificates={getCertificates}
                    />
                  </>
                );
              })}
            </tbody>
          </Table>
        </Row>
        <CreateModal
          show={createModal}
          onHide={() => setCreateModal(!createModal)}
          getCertificates={getCertificates}
        />
      </Container>
    </>
  );
}

export default Certificates;
