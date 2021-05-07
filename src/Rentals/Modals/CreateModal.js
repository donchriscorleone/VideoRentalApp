import React, { useState, useEffect } from "react";
import { Modal, Button, Dropdown } from "react-bootstrap";
import axios from "axios";
import { rentalsLink } from "../../Links/dbRentals";
import { copiesLink } from "../../Links/dbCopies";
import { membersLink } from "../../Links/dbMembers";

/* UPDATE `video_rental`.`copies` SET `currentlyHired` = 1 WHERE `copyId` = ? and `isCopyActive` = 1; */

function CreateModal(props) {
  const copiesApi = axios.create({
    baseURL: copiesLink,
  });
  const rentalsApi = axios.create({
    baseURL: rentalsLink,
  });
  const [members, setMembers] = useState([]);
  const [copies, setCopies] = useState([]);
  const [rentalProp, setRentalProp] = useState({
    memberId: "",
    memberName: "",
    copyId: "",
    titleName: "",
    filmCopyHireCost: "",
    overdueCostPerDay: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let { memberId, copyId, filmCopyHireCost, overdueCostPerDay } = rentalProp;
    await copiesApi.put(`/${copyId}/hired/1`, {});
    await rentalsApi.post("/", {
      memberId: memberId,
      copyId: copyId,
      filmCopyHireCost: filmCopyHireCost,
      overdueCostPerDay: overdueCostPerDay,
    });
    props.onHide();
    window.location.reload();
  }

  async function getForeignKeys() {
    let requestMembers = await fetch(membersLink);
    let requestCopies = await fetch(copiesLink + "/creatingRentals");

    let membersResult = await requestMembers.json();
    let copiesResult = await requestCopies.json();

    setMembers(membersResult);
    setCopies(copiesResult);
  }

  useEffect(() => {
    getForeignKeys();
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
              Create Rental
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="text-center font-monospace">
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="btn-lg my-4"
              >
                Members ID: {rentalProp.memberId} {rentalProp.memberName}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {members.map((m) => {
                  return (
                    <Dropdown.Item
                      onClick={() =>
                        setRentalProp({
                          ...rentalProp,
                          memberId: m.memberId,
                          memberName:
                            m.title + " " + m.firstName + " " + m.lastName,
                        })
                      }
                    >
                      {m.memberId}{" "}
                      {m.title + " " + m.firstName + " " + m.lastName}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="btn-lg my-4"
              >
                Film Copy: {rentalProp.copyId}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {copies.map((c) => {
                  return (
                    <Dropdown.Item
                      onClick={() =>
                        setRentalProp({
                          ...rentalProp,
                          copyId: c.copyId,
                          titleName: c.titleName,
                        })
                      }
                    >
                      {c.copyId} {c.titleName}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
            <h1 className="fs-4">Film Copy Hire Cost</h1>
            <input
              type="number"
              required
              onChange={(e) =>
                setRentalProp({
                  ...rentalProp,
                  filmCopyHireCost: e.target.value,
                })
              }
            ></input>
            <h1 className="fs-4">Overdue Cost Per Day</h1>
            <input
              type="number"
              required
              onChange={(e) =>
                setRentalProp({
                  ...rentalProp,
                  overdueCostPerDay: e.target.value,
                })
              }
            ></input>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={props.onHide} className="mx-4 btn-dark">
              <i className="fas fa-window-close me-2"></i> Close
            </Button>
            <Button className="mx-4 btn-success" type="submit">
              <i className="fas fa-paper-plane me-2"></i>Create
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default CreateModal;
