import React, { useState, useEffect } from "react";
import { downloadAllCategories } from "../Assets/DownloadRecord";
import { Col, Container, Row, Button, Table } from "react-bootstrap";
import CategoriesCard from "../Categories/CategoriesCard";
import CreateModal from "./CategoryModal/CreateModal";
import { categoryLink } from "../Links/dbCategory";

function Categories() {
  const [categories, setCategories] = useState([]);

  const [createModal, setCreateModal] = useState(false);

  async function getCategories() {
    let response = await fetch(categoryLink);
    let result = await response.json();
    setCategories(result);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Container className="my-4 py-5">
        <Row className="g-0 justify-content-md-center my-3">
          <Col className="col-sm-6 col-12 my-2 text-center">
            <Button
              className="btn-secondary btn-lg"
              onClick={() => setCreateModal(!createModal)}
            >
              <i className="fas fa-plus me-2"></i>
              Create Category
            </Button>
          </Col>
          <Col className="col-sm-6 col-12 my-2 text-center">
            {categories.length === 0 ? (
              <Button className="btn-primary btn-lg disabled">
                <i className="fas fa-file-pdf me-2"></i>
                No records to download
              </Button>
            ) : (
              <Button
                className="btn-primary btn-lg"
                onClick={() => downloadAllCategories(categories)}
              >
                <i className="fas fa-file-pdf me-2"></i>
                Download All
              </Button>
            )}
          </Col>
        </Row>
        <Row className="g-0 justify-content-md-center">
          <Table
            responsive
            striped
            bordered
            hover
            variant="dark"
            className="my-5 font-monospace text-center"
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Category Name</th>
                <th colSpan="3">Operations</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c) => {
                return (
                  <>
                    <CategoriesCard key={c.categoryId} category={c} />
                  </>
                );
              })}
            </tbody>
          </Table>
          <CreateModal
            show={createModal}
            onHide={() => setCreateModal(!createModal)}
            getCategories={getCategories}
          />
        </Row>
      </Container>
    </>
  );
}

export default Categories;
