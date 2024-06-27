import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faHeart, faSkull } from "@fortawesome/free-solid-svg-icons";
import { levelUpTower } from "../Game/Helpers";

const RESET_TIME = 10;

const questions = {
  sostenibilidad: [
    {
      question:
        "¿En qué país se construyó la primera máquina a vapor atmosférica, que impulsó la Revolución Industrial?",
      options: ["Francia", "Inglaterra", "Alemania", "Italia"],
      correct: "Inglaterra",
    },
    {
      question:
        "En China, monjes taoístas que se encontraban buscando el elixir de la inmortalidad elaboraron accidentalmente la pólvora",
      options: ["Verdadero", "Falso"],
      correct: "Verdadero",
    },
    {
      question: "¿Qué personaje desarrolla la Teoría de la Relatividad?",
      options: [
        "Nikola Tesla",
        "Thomas Alva Edison",
        "Antoine Lavoisier",
        "Albert Einstein",
      ],
      correct: "Albert Einstein",
    },
  ],
  energia: [
    {
      question: "¿Qué país es el productor número uno de Energía Solar?",
      options: ["Argentina", "Brasil", "Chile", "Colombia"],
      correct: "Chile",
    },
    {
      question: "¿Qué color NO representa los colores del reciclaje?",
      options: ["Gris Claro", "Verde", "Rojo", "Blanco"],
      correct: "Blanco",
    },
    {
      question:
        "¿Qué término se utiliza para describir el consumo de electricidad por parte de dispositivos electrónicos cuando están apagados pero aún enchufados?",
      options: [
        "Consumo silencioso",
        "Consumo vampiro",
        "Consumo discreto",
        "Consumo invisible",
      ],
      correct: "Consumo vampiro",
    },
  ],
};

const Sidebar = ({
  life,
  money,
  setMoney,
  upgrades,
  towers
}) => {
  const [buttonsEnabled, setButtonsEnabled] = useState([false, false]);
  const [timer, setTimer] = useState(RESET_TIME);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showQuestion, setShowQuestion] = useState(false);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          setButtonsEnabled([true, true]);
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

 const enableButton = index => {
    setButtonsEnabled((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  }; 

  const handleButtonClick = (category) => {
    const randomQuestion =
      questions[category][
        Math.floor(Math.random() * questions[category].length)
      ];
    setCurrentQuestion(randomQuestion);
    setShowQuestion(true);
    setCategory(category);
  };

  const handleAnswerClick = (answer) => {
    if (answer === currentQuestion.correct) {
      setMoney(money + 100); // Agrega $100 si la respuesta es correcta
    }
    setShowQuestion(false);
    setCurrentQuestion(null);
    setButtonsEnabled([false, false]);
    resetTimers();
  };

  const resetTimers = () => {
    const timers = buttonsEnabled.map((enabled, index) =>
      setTimeout(() => enableButton(index), (index + 1) * RESET_TIME * 1000)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  };

  useEffect(() => {
    resetTimers();
  }, []); 

  return (
    <div className="sidebar">
      <div className="sidebar-gamestatus">
        <h2>Estado del Juego</h2>
        <div className="sidebar-puntos">
          <FontAwesomeIcon icon={faHeart} className="sidebar-icon" />
          <strong>Vida:</strong> {life}
        </div>
        <div className="sidebar-puntos">
          <FontAwesomeIcon icon={faCoins} className="sidebar-icon2" />
          <strong>Dinero:</strong> ${money}
        </div>
        <div className="sidebar-puntos">
          <FontAwesomeIcon icon={faSkull} className="sidebar-icon3" />
          <strong>Muertes</strong>
        </div>
      </div>
      <div className="sidebar-upgrades">
        <h3>Mejoras Disponibles</h3>
        <ul>
          {upgrades.map((upgrade, index) => (
            <li key={index}>
              {upgrade.name} - ${upgrade.cost}
            </li>
          ))}
        </ul>
        <h3>Subir Nivel de Torres</h3>
        {towers.map((t, i) => (
          <button key={i} onClick={() => levelUpTower(t.tower, money, setMoney)}>Subir de nivel torre {t.type} - {t.id}</button>
        ))}

        {/* <button onClick={upgradeSolarTower}>Subir Nivel de Torre Solar</button>
        <button onClick={upgradeWindTower}>Subir Nivel de Torre Eólica</button> */}
      </div>
      <div className="buttons">
        <button
          className={!buttonsEnabled[0] ? "disabled" : ""}
          disabled={!buttonsEnabled[0]}
          onClick={() => handleButtonClick("sostenibilidad")}
        >
          Pregunta de Sostenibilidad
        </button>
        <button
          className={!buttonsEnabled[1] ? "disabled" : ""}
          disabled={!buttonsEnabled[1]}
          onClick={() => handleButtonClick("energia")}
        >
          Pregunta de Energía
        </button>
      </div>
      <div className="timer">
        {buttonsEnabled.every((enabled) => !enabled) && (
          <p>Próxima pregunta disponible en: {timer}s</p>
        )}
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
