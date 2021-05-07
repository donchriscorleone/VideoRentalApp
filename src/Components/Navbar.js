import React, { useState } from "react";
import AboutModal from "../Modals/AboutModal";
import ContactModal from "../Modals/ContactModal";
import ProjectInfo from "../Modals/ProjectInfo";
function Navbar() {
  const [aboutModal, setAboutModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg special-color-dark font-monospace">
        <div className="container-fluid ">
          <a
            className="text-light fs-3 navbar-brand btn btn-dark px-1 py-1"
            href="/"
          >
            <i class="fas fa-film px-2"></i> Video Rental
          </a>

          <button
            className="navbar-toggler "
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="text-dark fs-5 nav-link active"
                  aria-current="page"
                  href="/"
                >
                  <i class="fas fa-home px-2"></i>Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="text-dark fs-5 nav-link"
                  href="#"
                  onClick={() => setAboutModal(!aboutModal)}
                >
                  <i class="fas fa-info px-2"></i>About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="text-dark fs-5 nav-link"
                  href="#"
                  tabindex="-1"
                  onClick={() => setContactModal(!contactModal)}
                >
                  <i class="fas fa-address-book px-2"></i>Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ProjectInfo
        show={aboutModal}
        onHide={() => setAboutModal(!aboutModal)}
      />
      <ContactModal
        show={contactModal}
        onHide={() => setContactModal(!contactModal)}
      />
    </>
  );
}

export default Navbar;
