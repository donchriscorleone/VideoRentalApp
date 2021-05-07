import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { categoryLink } from "../../Links/dbCategory";

function EditModal(props) {
  const [category, setCategory] = useState({
    id: props.category.categoryId,
    categoryName: props.category.categoryName,
  });
  const categoryApi = axios.create({
    baseURL: categoryLink,
  });

  async function handleEdit(e) {
    e.preventDefault();

    if (category.categoryName === "") {
      setCategory({ ...category, categoryName: props.category.categoryName });
      return alert("Category is blank");
    }

    let result = await categoryApi.put(`/${props.category.categoryId}`, {
      categoryName: category.categoryName,
    });
    console.log(result);
    props.onHide();
    window.location.reload();
  }

  useEffect(() => {}, []);
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="bg-dark"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-uppercase"
          >
            Edit: {props.category.categoryName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <form onSubmit={handleEdit}>
            <label htmlFor="categoryName" className="mx-4 font-monospace fs-4">
              Category Name:
            </label>
            <input
              type="text"
              name="categoryName"
              value={category.categoryName}
              onChange={(e) =>
                setCategory({ ...category, categoryName: e.target.value })
              }
            />
            <br />
            <Button
              className="btn-dark mx-3 btn-lg my-2"
              onClick={props.onHide}
            >
              <i className="fas fa-window-close me-2"></i>Close
            </Button>
            <Button className="btn-info mx-3 btn-lg my-2" type="submit">
              <i className="fas fa-paper-plane me-2"></i> Edit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditModal;
