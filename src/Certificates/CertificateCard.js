import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import axios from "axios";
import EditModal from "./CertificateModal/EditModal";
import { downloadCertificate } from "../Assets/DownloadRecord";
import { certificateLink } from "../Links/dbCertificate";

function CertificateCard(props) {
  const [editModal, setEditModal] = useState(false);
  const api = axios.create({
    baseURL: certificateLink,
  });

  const handleDelete = async () => {
    let response = await api.put("/", {
      certificateName: props.certificate.certificateName,
      certificateId: props.certificate.certificateId,
    });
    console.log(response);
    props.getcertificates();
  };

  return (
    <>
      <tr>
        <td className="fs-5">{props.certificate.certificateId}</td>
        <td className="fs-5">{props.certificate.certificateName}</td>
        <td>
          <Button
            className="btn-success"
            onClick={() => setEditModal(!editModal)}
          >
            <i className="fas fa-edit me-2"></i>Edit
          </Button>
        </td>
        <td>
          <Button className="btn-danger" onClick={handleDelete}>
            <i className="far fa-trash-alt me-2"></i>Delete
          </Button>
        </td>
        <td>
          <Button
            className="btn-primary"
            onClick={() => downloadCertificate(props)}
          >
            <i className="fas fa-file-pdf me-2"></i>
            Download
          </Button>
        </td>
      </tr>
      <EditModal
        show={editModal}
        onHide={() => setEditModal(!editModal)}
        certificate={props.certificate}
        // loadcertificate={props.getcertificate}
      />
    </>
  );
}

export default CertificateCard;
