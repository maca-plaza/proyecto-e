import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const constants = {
    FORM_TITLE: "¿Quieres ofrecer tus servicios?",
    FORM_SUBTITLE: "Registra tus datos y nos pondremos en contacto contigo",
  };

  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("p");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, usando fetch o axios
    setStatus("s");

    // Simulación de envío
    setTimeout(() => {
      setStatus("r");
      setFormData({
        email: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <div className="form-container">
      <div className="form-titles">
        <p className="form-title">{constants.FORM_TITLE}</p>
        <p className="form-subtitle">{constants.FORM_SUBTITLE}</p>
      </div>
      {status === "r" && (
        <div className="form-response">
          <p className="form-title">Gracias!</p>
          <p className="form-subtitle">
            Nos pondremos en contacto para resolver tus dudas.
          </p>
        </div>
      )}

      {status !== "r" && (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ejemplo@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              id="message"
              name="message"
              placeholder="Cuéntanos sobre tu pyme"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="form-submit-btn"
              disabled={status !== "p"}
            >
              {status === "s" ? (
                <FontAwesomeIcon icon={faSpinner} spin/>
              ) : (
                "Enviar"
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
