import React, { useState, useEffect } from "react";
import { Col, Button } from "react-bootstrap";
import axios from "axios";
import EditModal from "./TitleModal/EditModal";
import { downloadTitle } from "../Assets/DownloadRecord";
import { titlesLink } from "../Links/dbTitles";

function TitleCard(props) {
  const [showEditModal, setShowEditModal] = useState(false);
  const api = axios.create({
    baseURL: titlesLink,
  });
  const {
    titleId,
    titleName,
    releaseDate,
    certificateName,
    certificateId,
    categoryId,
    categoryName,
    filmDuration,
    additionalNotes,
  } = props.title;

  async function deleteTitle() {
    let req = await api.put(
      `/${props.title.titleId}/${props.title.titleName}`,
      {}
    );
    window.location.reload();
    console.log(`/${props.title.titleId}/${props.title.titleName}`);
  }

  useEffect(() => {}, []);

  return (
    <>
      <Col className=" col-sm-6 col-12 my-4 px-4 text-light">
        <div className="card text-center font-monospace bg-dark text-white">
          <div className="card-header fs-4">{titleName}</div>
          <div className="card-body">
            <h5 className="card-title">
              Released Date: {new Date(releaseDate).toLocaleDateString()}
            </h5>
            <p className="card-text">Certificate: {certificateName}</p>
            <p className="card-text">Category: {categoryName}</p>
            <p className="card-text">Film Duration: {filmDuration}</p>
            <Button
              className="btn-lg btn-danger mx-3 my-2"
              onClick={deleteTitle}
            >
              <i className="far fa-trash-alt me-1"></i> Delete
            </Button>
            <Button
              className="btn-lg btn-success mx-3 my-2"
              onClick={() => setShowEditModal(!showEditModal)}
            >
              <i className="fas fa-edit me-2"></i>Edit
            </Button>
            <Button
              className="btn-lg btn-primary mx-3 my-2"
              onClick={() => downloadTitle(props.title)}
            >
              <i className="fas fa-file-pdf mx-2"></i>Download
            </Button>
          </div>
          <div className="card-footer text-muted">
            Additional Notes: {additionalNotes}
          </div>
        </div>
      </Col>
      <EditModal
        show={showEditModal}
        onHide={() => setShowEditModal(!showEditModal)}
        title={props.title}
      />
    </>
  );
}

export default TitleCard;
