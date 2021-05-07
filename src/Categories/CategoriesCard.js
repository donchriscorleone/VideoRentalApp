import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import axios from "axios";
import EditModal from "./CategoryModal/EditModal";
import { downloadCategory } from "../Assets/DownloadRecord";
import { categoryLink } from "../Links/dbCategory";

function CategoriesCard(props) {
  const [editModal, setEditModal] = useState(false);

  const categoryApi = axios.create({
    baseURL: categoryLink,
  });

  async function handleDelete() {
    let result = await categoryApi.put(
      `/${props.category.categoryId}/${props.category.categoryName}`
    );
    console.log(result);
    window.location.reload();
  }
  return (
    <>
      <tr>
        <td className="fs-5">{props.category.categoryId}</td>
        <td className="fs-5">{props.category.categoryName}</td>
        <td>
          <Button
            className="btn-success"
            onClick={() => setEditModal(!editModal)}
          >
            <i className="fas fa-edit"></i> Edit
          </Button>
        </td>
        <td>
          <Button className="btn-danger" onClick={handleDelete}>
            <i className="far fa-trash-alt"></i> Delete
          </Button>
        </td>
        <td>
          <Button
            className="btn-primary"
            onClick={() => downloadCategory(props)}
          >
            {" "}
            <i className="fas fa-file-pdf me-2"></i>Download
          </Button>
        </td>
      </tr>
      <EditModal
        show={editModal}
        onHide={() => setEditModal(!editModal)}
        category={props.category}
      />
    </>
  );
}

export default CategoriesCard;
