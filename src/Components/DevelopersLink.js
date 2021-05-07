import React from "react";

function DevelopersLink() {
  return (
    <>
      <ul className="list-unstyled list-inline mt-4">
        <li className="list-inline-item">
          <h1 className=" font-monospace fs-6 text-uppercase mx-2">
            Lajom, Christopher II
          </h1>
        </li>
        <li className="list-inline-item mx-3 my-2">
          <a
            className="btn btn-primary"
            href={"https://facebook.com/penpenlajom"}
            target={"_blank"}
          >
            <i class="fab fa-facebook-f me-1"></i> Facebook
          </a>
        </li>

        <li className="list-inline-item mx-3 my-2">
          <a
            className="btn btn-success"
            href={"https://github.com/donchriscorleone"}
            target={"_blank"}
          >
            <i class="fab fa-github pe-2"></i>Github
          </a>
        </li>
      </ul>
      <ul className="list-unstyled list-inline">
        <li className="list-inline-item mx-3 my-2">
          <h1 className="font-monospace fs-6 text-uppercase">
            Villafuerte, Kim
          </h1>
        </li>
        <li className="list-inline-item mx-3 my-2">
          <a
            className="btn btn-primary"
            href={"https://www.facebook.com/kimvillafuerte/"}
            target={"_blank"}
          >
            <i class="fab fa-facebook-f me-1"></i> Facebook
          </a>
        </li>

        <li className="list-inline-item mx-3 my-2">
          <a
            className="btn btn-success"
            href={"https://github.com/suppduck03"}
            target={"_blank"}
          >
            <i class="fab fa-github pe-2"></i>Github
          </a>
        </li>
      </ul>
    </>
  );
}

export default DevelopersLink;
