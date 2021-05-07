import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import axios from "axios";
import EditModal from "./Modals/EditModal";
import { downloadMember } from "../Assets/DownloadRecord";
import { membersLink } from "../Links/dbMembers";

function MembersCard(props) {
  const [editModal, setEditModal] = useState(false);
  const membersApi = axios.create({
    baseURL: membersLink,
  });
  const {
    memberId,
    dateJoined,
    title,
    firstName,
    lastName,
    dateOfBirth,
    addressPostCode,
    addressTownVillage,
    addressStreet,
    telephoneNumber,
    additionalNotes,
  } = props.membersInfo;

  async function deleteMember() {
    await membersApi.put(`${memberId}/${firstName}`);
    props.getMembers();
  }

  return (
    <>
      <Col className="col-sm-6 col-12 my-3 py-3 px-5 text-center">
        <div className="card text-center font-monospace bg-dark text-white">
          <div className="card-header fs-4">
            {title + " " + firstName + " " + lastName}
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Date of Birth: {new Date(dateOfBirth).toLocaleDateString()}
            </h5>
            <p className="card-text">
              Lives at: {addressTownVillage + " " + addressStreet}
            </p>
            <p className="card-text">Post Code: {addressPostCode}</p>
            <p className="card-text">Contact #: {telephoneNumber}</p>
            <p className="card-text">
              Date Joined: {new Date(dateJoined).toLocaleDateString()}
            </p>
            <Button
              className="btn-lg btn-danger mx-3 my-2"
              onClick={deleteMember}
            >
              <i className="far fa-trash-alt me-2"></i>Delete
            </Button>
            <Button
              className="btn-lg btn-success mx-3 my-2"
              onClick={() => setEditModal(!editModal)}
            >
              <i className="fas fa-edit me-2"></i>Edit
            </Button>
            <Button
              className="btn-lg btn-primary mx-3 my-2"
              onClick={() => downloadMember(props.membersInfo)}
            >
              <i className="fas fa-file-pdf me-2"></i>Download
            </Button>
          </div>
          <div className="card-footer text-muted">{additionalNotes}</div>
        </div>
      </Col>
      <EditModal
        show={editModal}
        onHide={() => setEditModal(!editModal)}
        editprop={props.membersInfo}
      />
    </>
  );
}

export default MembersCard;
