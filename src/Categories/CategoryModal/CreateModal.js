import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { categoryLink } from "../../Links/dbCategory";
import axios from "axios";

function CreateModal(props) {
  const categoryApi = axios.create({
    baseURL: categoryLink,
  });
  const [categoryName, setCategoryName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (categoryName === "") {
      return alert("Category is blank");
    }
    await categoryApi.post("/", {
      categoryName: categoryName,
    });
    setCategoryName("");
    props.onHide();
    props.getCategories();
  }

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
            Create New Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <form onSubmit={handleSubmit}>
            <label htmlFor="categoryName" className="mx-4 font-monospace fs-4">
              Category Name:{" "}
            </label>
            <input
              type="text"
              name="categoryName"
              placeholder="Enter category name.."
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <br />
            <Button
              className="btn-dark mx-3 btn-lg my-2"
              onClick={props.onHide}
            >
              <i className="fas fa-window-close me-2"></i> Close
            </Button>
            <Button className="btn-info mx-3 btn-lg my-2" type="submit">
              <i className="fas fa-paper-plane me-2"></i>Create
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateModal;
