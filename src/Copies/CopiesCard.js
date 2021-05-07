import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import EditModal from "./Copies Modal/EditModal";
import axios from "axios";
import { downloadCopy } from "../Assets/DownloadRecord";
import { copiesLink } from "../Links/dbCopies";

function CopiesCard(props) {
  const copyApi = axios.create({
    baseURL: copiesLink,
  });

  async function deleteCopy() {
    let request = await copyApi.put(`/${props.copy.copyId}/delete`);
  }
  const [showEditModal, setShowEditModal] = useState(false);
  return (
    <>
      <Col className=" col-sm-6 col-12 my-4 px-5 text-light">
        <div className="card text-center font-monospace bg-dark text-white">
          <div className="card-header fs-4">
            Copy ID {props.copy.copyId}: {props.copy.titleName}
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Released Date:{" "}
              {new Date(props.copy.releaseDate).toLocaleDateString()}
            </h5>
            {props.copy.currentlyHired == 1 ? (
              <p className="card-text badge bg-danger rounded-pill">
                Currently Hired!
              </p>
            ) : (
              <p className="card-text badge bg-secondary rounded-pill">
                Not Hired!
              </p>
            )}
            <p className="card-text"></p>
            <p className="card-text">
              Film Duration: {props.copy.filmDuration}
            </p>
            {props.copy.currentlyHired == 1 ? (
              <Button className="btn-lg btn-danger mx-3 my-2  disabled">
                <i className="far fa-trash-alt me-2"></i>Delete
              </Button>
            ) : (
              <Button
                className="btn-lg btn-danger mx-3 my-2"
                onClick={deleteCopy}
              >
                <i className="far fa-trash-alt me-2"></i>Delete
              </Button>
            )}
            <Button
              className="btn-lg btn-success mx-3 my-2"
              onClick={() => setShowEditModal(!showEditModal)}
            >
              <i className="fas fa-edit me-2"></i>Edit
            </Button>
            <Button
              className="btn-lg btn-primary mx-3 my-2"
              onClick={() => downloadCopy(props.copy)}
            >
              <i className="fas fa-file-pdf me-2"></i>Download
            </Button>
          </div>
          <div className="card-footer text-muted">
            Additional Notes: {props.copy.additionalNotes}
          </div>
        </div>
      </Col>
      <EditModal
        show={showEditModal}
        onHide={() => setShowEditModal(!showEditModal)}
        copy={props.copy}
      />
    </>
  );
}

export default CopiesCard;
