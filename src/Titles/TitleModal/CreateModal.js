import React, { useState, useEffect } from "react";
import { Modal, Button, Dropdown } from "react-bootstrap";
import axios from "axios";
import { titlesLink } from "../../Links/dbTitles";
import { categoryLink } from "../../Links/dbCategory";
import { certificateLink } from "../../Links/dbCertificate";

function CreateModal(props) {
  const [titleProp, setTitleProp] = useState({
    title: "",
    releaseDate: "",
    filmDuration: "",
    additionalNotes: "",
    categoryId: "",
    certificateId: "",
  });
  const [categories, setCategories] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const titleApi = axios.create({
    baseURL: titlesLink,
  });

  async function getAllForeignKeys() {
    let category = await fetch(categoryLink);
    let certificate = await fetch(certificateLink);

    let categoryResults = await category.json();
    let certificateResults = await certificate.json();
    setCategories(categoryResults);
    setCertificates(certificateResults);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let request = await titleApi.post("/", {
      title: titleProp.title,
      releaseDate: titleProp.releaseDate,
      categoryId: titleProp.categoryId,
      certificateId: titleProp.certificateId,
      filmDuration: titleProp.filmDuration,
      additionalNotes: titleProp.additionalNotes,
    });
    props.onHide();
    window.location.reload();
    console.log(titleProp);
  }

  useEffect(() => {
    getAllForeignKeys();
  }, []);

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="bg-dark"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New Title
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center font-monospace">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h1 className="fs-3 text-uppercase">Title Name</h1>
            <input
              type="text"
              required
              value={titleProp.titleName}
              className="mb-4"
              placeholder="Toy Story"
              onChange={(e) =>
                setTitleProp({ ...titleProp, title: e.target.value })
              }
            ></input>
            <Dropdown className="mb-4 ">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Category ID: {titleProp.categoryId}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {categories.map((c) => {
                  return (
                    <Dropdown.Item
                      key={c.categoryId}
                      onClick={() =>
                        setTitleProp({
                          ...titleProp,
                          categoryId: c.categoryId,
                        })
                      }
                    >
                      {c.categoryId} & {c.categoryName}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mb-4 ">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Certificate ID : {titleProp.certificateId}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {certificates.map((c) => {
                  return (
                    <Dropdown.Item
                      key={c.certificateId}
                      onClick={() =>
                        setTitleProp({
                          ...titleProp,
                          certificateId: c.certificateId,
                        })
                      }
                    >
                      {c.certificateId} {c.certificateName}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
            <h1 className="fs-3 text-uppercase">Released Date</h1>
            <input
              type="date"
              required
              className="mb-4"
              onChange={(e) =>
                setTitleProp({ ...titleProp, releaseDate: e.target.value })
              }
            ></input>
            <h1 className="fs-3 text-uppercase">Film Duration</h1>
            <input
              type="text"
              required
              placeholder="Ex. 2h 1m"
              value={titleProp.filmDuration}
              className="mb-4"
              onChange={(e) =>
                setTitleProp({ ...titleProp, filmDuration: e.target.value })
              }
            ></input>
            <h1 className="fs-3 text-uppercase">Additional Notes</h1>
            <input
              type="text"
              value={titleProp.additionalNotes}
              placeholder="Opt: Good movie..."
              className="mb-4"
              onChange={(e) =>
                setTitleProp({ ...titleProp, additionalNotes: e.target.value })
              }
            ></input>
            <br />
            <Button
              className="btn-lg btn-dark mx-2 my-2"
              onClick={props.onHide}
            >
              <i className="fas fa-window-close me-2"></i> Cancel
            </Button>
            <Button className="btn-lg btn-info mx-2 my-2" type="submit">
              <i className="fas fa-paper-plane me-2"></i> Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateModal;
