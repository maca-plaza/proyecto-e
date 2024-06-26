import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const questions = [
  {
    question: "¿Cuál es la capital de Francia?",
    options: ["Madrid", "Paris", "Berlín", "Lisboa"],
    correct: "Paris"
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    options: ["Amazonas", "Nilo", "Yangtsé", "Mississippi"],
    correct: "Amazonas"
  },
  {
    question: "¿Cuál es el planeta más cercano al sol?",
    options: ["Tierra", "Venus", "Marte", "Mercurio"],
    correct: "Mercurio"
  }
];

const Sidebar = ({ life, money, upgrades, addMoney }) => {
  const [buttonsEnabled, setButtonsEnabled] = useState([false, false, false]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showQuestion, setShowQuestion] = useState(false);

  useEffect(() => {
    const timers = buttonsEnabled.map((enabled, index) =>
      setTimeout(() => enableButton(index), (index + 1) * 120000)
    );

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  const enableButton = index => {
    setButtonsEnabled(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handleButtonClick = () => {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuestion(randomQuestion);
    setShowQuestion(true);
  };

  const handleAnswerClick = answer => {
    if (answer === currentQuestion.correct) {
      addMoney(100); // Agrega $100 si la respuesta es correcta
    }
    setShowQuestion(false);
    setButtonsEnabled([false, false, false]);
    setCurrentQuestion(null);
    resetTimers();
  };

  const resetTimers = () => {
    const timers = buttonsEnabled.map((enabled, index) =>
      setTimeout(() => enableButton(index), (index + 1) * 120000)
    );

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  };

  useEffect(() => {
    resetTimers();
  }, []);

  return (
    <div className="sidebar">
      <h2>Estado del Juego</h2>
      <div>
        <strong>Vida:</strong> {life}
      </div>
      <div>
        <strong>Dinero:</strong> ${money}
      </div>
      <h3>Mejoras Disponibles</h3>
      <ul>
        {upgrades.map((upgrade, index) => (
          <li key={index}>{upgrade.name} - ${upgrade.cost}</li>
        ))}
      </ul>
      <div className="buttons">
        {buttonsEnabled.map((enabled, index) => (
          <button key={index} disabled={!enabled} onClick={handleButtonClick}>
            Pregunta {index + 1}
          </button>
        ))}
      </div>
      {showQuestion && (
        <div className="question">
          <h4>{currentQuestion.question}</h4>
          {currentQuestion.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswerClick(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;

