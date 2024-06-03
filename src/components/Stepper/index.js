
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const location = useLocation();
  const steps = [
    { label: "Cambio Climático", path: "../../pages/Climatico" },
    { label: "Acciones Sostenibles", path: "./Calculadora" },
    { label: "Sistemas de climatización", path: "../../pages/Climatiza" },
    { label: "Climatiza", path: "../../pages/Climatiza" },
    { label: "Step 5", path: "./Calculadora" },
  ]; //  cantidad de pasos según sea necesario

  const handlePrevClick = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNextClick = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <>
      <div className="stepper">
        <button className="arrow prev" onClick={handlePrevClick}>
          &#9664;
        </button>
        <div className="circles">
          {steps.map((step, index) => (
            <Link
              key={index}
              to="calculadora"
              className={`circle ${index === currentStep ? "active" : ""}`}
              onClick={() => setCurrentStep(index)}
            >
              <FontAwesomeIcon icon={faLeaf} />
            </Link>
          ))}
        </div>
        <button className="arrow next" onClick={handleNextClick}>
          &#9654;
        </button>
      </div>
      <div>
        <ul>
          {steps.map((step, index) => (
            <li key={index}>
              <Link
                to={step.path}
                style={{
                  fontWeight:
                    location.pathname === step.path ? "bold" : "normal",
                }}
              >
                {step.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Stepper;
