import React, { useState, useEffect } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import InsertModal from "./Modals/InsertModal";
import MembersCard from "./MembersCard";
import axios from "axios";
import { downloadAllMembers } from "../Assets/DownloadRecord";
import { membersLink } from "../Links/dbMembers";

function Members() {
  const api = axios.create({
    baseURL: membersLink,
  });
  const [createModal, setCreateModal] = useState(false);
  const [members, setMembers] = useState([]);

  async function getMembers() {
    let response = await fetch(membersLink);
    let result = await response.json();
    setMembers(result);
  }

  async function handleSubmit(createProp) {
    const {
      title,
      firstName,
      lastName,
      dateOfBirth,
      addressStreet,
      addressTownVillage,
      addressPostCode,
      telephoneNumber,
      additionalNotes,
    } = createProp;

    let request = await api.post("/", {
      title: title,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      addressStreet: addressStreet,
      addressTownVillage: addressTownVillage,
      addressPostCode: addressPostCode,
      telephoneNumber: telephoneNumber,
      additionalNotes: additionalNotes,
    });
    setCreateModal(!createModal);
    getMembers();
  }

  useEffect(() => {
    getMembers();
  }, []);
  return (
    <>
      <Container className="container-fluid my-4 py-4">
        <Row className="g-0 justify-content-md-center">
          <Col className="col-sm-6 col-12 text-center my-2">
            <Button
              className="btn-lg btn-secondary"
              onClick={() => setCreateModal(!createModal)}
            >
              <i className="fas fa-plus me-2"></i>Create member
            </Button>
          </Col>
          <Col className="col-sm-6 col-12 text-center my-2">
            {members.length === 0 ? (
              <Button className="btn-lg btn-primary disabled">
                <i className="fas fa-file-pdf me-2"></i>No records to download
              </Button>
            ) : (
              <Button
                className="btn-lg btn-primary"
                onClick={() => downloadAllMembers(members)}
              >
                <i className="fas fa-file-pdf me-2"></i>Download All
              </Button>
            )}
          </Col>
        </Row>
      </Container>
      <Container className="container-fluid my-4 py-4">
        <Row className="g-0 justify-content-md-center">
          {members.map((m) => {
            return (
              <MembersCard
                key={m.memberId}
                membersInfo={m}
                getMembers={getMembers}
              />
            );
          })}
        </Row>
      </Container>

      <InsertModal
        show={createModal}
        onHide={() => setCreateModal(!createModal)}
        getMembers={getMembers}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Members;
