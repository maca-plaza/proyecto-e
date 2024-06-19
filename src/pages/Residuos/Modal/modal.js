// Modal.js

import React from "react";
import "./modal.css"; // Estilos del modal (puedes personalizarlos según tus necesidades)

const Modal = ({ showModal, setShowModal, imageSrc, title, description }) => {
  // Función para cerrar el modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="overlay">
          <div className="modal">
            <img src={imageSrc} alt={title} className="modal-image" />
            <h2 className="modal-title">{title}</h2>
            <p className="modal-description">{description}</p>
            <button className="modal-close-btn" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
