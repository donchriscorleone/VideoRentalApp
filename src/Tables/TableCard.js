import React from "react";
import { tables } from "./tables";
import { Col, Row, Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function TableCard() {
  return (
    <>
      <Row className="g-0 justify-content-center my-5">
        {tables.map((t) => {
          return (
            <Col className="col-sm-6 col-12 py-3 px-4 " key={t.id}>
              <a href={t.name} className="text-dark">
                <Container className="container-md ripple">
                  <div className="card px-5 text-center bg-transparent">
                    <div
                      className="bg-image hover-overlay"
                      data-mdb-ripple-color="light"
                    >
                      <img src={t.imgSrc} className="img-fluid" />
                      <a href={t.name}>
                        <div className="mask"></div>
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title font-monospace fs-2 text-uppercase">
                        {t.name}
                      </h5>

                      <Link to={t.name}>
                        <Button className=" btn-secondary btn-lg">
                          <i
                            className="fa fa-list-alt me-2"
                            aria-hidden="true"
                          ></i>
                          See more
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Container>
              </a>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default TableCard;
