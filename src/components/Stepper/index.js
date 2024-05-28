// src/Stepper.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const Stepper = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [1, 2, 3, 4, 5]; //  cantidad de pasos según sea necesario

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
        <div className="stepper">
            <button className="arrow prev" onClick={handlePrevClick}>&#9664;</button>
            <div className="circles">
                {steps.map((step, index) => (
                    <a
                        key={index}
                        href="#"
                        className={`circle ${index === currentStep ? 'active' : ''}`}
                        onClick={() => setCurrentStep(index)}
                    >
                        <FontAwesomeIcon icon={faLeaf} />
                    </a>
                ))}
            </div>
            <button className="arrow next" onClick={handleNextClick}>&#9654;</button>
        </div>
    );
};

export default Stepper;
