// Modal.js
import React from "react";
import "./modal.css";

const Modal = ({ imageSrc, overlayText, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="image-container">
          <img src={imageSrc} alt="Modal Image" className="modal-image" />
          <div className="overlay-text">{overlayText}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;