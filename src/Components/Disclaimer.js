import React, { useState } from "react";
import AboutModal from "../Modals/AboutModal";

function Disclaimer() {
  const [projectInfoModal, setProjectInfoModal] = useState(false);
  return (
    <>
      <h1 className="fs-4">
        <i class="fas fa-info-circle px-2"></i>DISCLAIMER
      </h1>
      <p>
        This is for educational purposes only. Click the button to know about
        this project.
      </p>
      <button
        type="button"
        className="btn btn-outline-dark my-2"
        onClick={() => {
          setProjectInfoModal(!projectInfoModal);
        }}
      >
        <i class="fas fa-info me-2"></i>Project info
      </button>
      <AboutModal
        show={projectInfoModal}
        onHide={() => setProjectInfoModal(!projectInfoModal)}
      />
    </>
  );
}

export default Disclaimer;
