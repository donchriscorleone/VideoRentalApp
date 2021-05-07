import React, { useState, useEffect } from "react";
import { Modal, Button, Dropdown } from "react-bootstrap";
import axios from "axios";
import { copiesLink } from "../../Links/dbCopies";
import { titlesLink } from "../../Links/dbTitles";

function CreateModal(props) {
  const [titles, setTitles] = useState([]);
  const copyApi = axios.create({
    baseURL: copiesLink,
  });
  const [copyProp, setCopyProp] = useState({
    titleId: "",
    titleName: "Choose Title: ",
    additionalNotes: "",
  });
  async function getTitles() {
    let request = await fetch(titlesLink);
    let response = await request.json();
    setTitles(response);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let request = await copyApi.post("/", {
      titleId: copyProp.titleId,
      additionalNotes: copyProp.additionalNotes,
    });

    e.target.reset();
  }

  useEffect(() => {
    getTitles();
  }, []);
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
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Create Film Copy
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="text-center font-monospace">
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="btn-lg my-4"
              >
                {copyProp.titleName}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {titles.map((t) => {
                  return (
                    <Dropdown.Item
                      onClick={() =>
                        setCopyProp({
                          ...copyProp,
                          titleId: t.titleId,
                          titleName: t.titleName,
                        })
                      }
                    >
                      ID: {t.titleId} - Title Name: {t.titleName}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
            <h1 className="fs-4">Additional Notes</h1>
            <input
              type="text"
              placeholder="Optional"
              onChange={(e) =>
                setCopyProp({ ...copyProp, additionalNotes: e.target.value })
              }
            ></input>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={props.onHide} className="mx-4 btn-dark">
              <i className="fas fa-window-close me-2"></i>Close
            </Button>
            <Button
              onClick={props.onHide}
              className="mx-4 btn-success"
              type="submit"
            >
              <i className="fas fa-paper-plane me-2"></i> Create
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default CreateModal;
