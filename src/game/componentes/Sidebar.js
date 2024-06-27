import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const questions = [
  {
    question: "¿En qué país se construyó la primera máquina a vapor atmosférica, que impulsó la Revolución Industrial?",
    options: ["Francia", "Inglaterra", "Alemania", "Italia"],
    correct: "Inglaterra"
  },
  {
    question: "En China, monjes taoístas que se encontraban buscando el elixir de la inmortalidad elaboraron accidentalmente la pólvora",
    options: ["Verdadero", "Falso"],
    correct: "Verdadero"
  },
  {
    question: "¿Qué personaje desarrolla la Teoría de la Relatividad?",
    options: ["Nikola Tesla", "Thomas Alva Edison", "Antoine Lavoisier", "Albert Einstein"],
    correct: "Albert Einstein"
  },
  {
    question: "¿Qué país es el productor número uno de Energía Solar?",
    options: ["Argentina", "Brasil", "Chile", "Colombia"],
    correct: "Chile"
  },
  {
    question: "¿Qué color no representa los colores del reciclaje?",
    options: ["Gris Claro", "Verde", "Rojo", "Blanco"],
    correct: "Blanco"
  },
  {
    question: "¿Qué término se utiliza para describir el consumo de electricidad por parte de dispositivos electrónicos cuando están apagados pero aún enchufados?",
    options: ["Consumo silencioso", "Consumo vampiro", "Consumo discreto", "Consumo invisible"],
    correct: "Consumo vampiro"
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

