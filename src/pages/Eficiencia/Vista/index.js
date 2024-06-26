import React, { useState } from "react";
import Header from "../../../components/Header";
import "../../Calculadora/calculadora.css";
import Game from "../../../game/Game/Game"
import Sidebar from"../../../game/componentes/Sidebar";

const Vista = () => {
  const HEADER = [
    {
      titulo: "Tower Defense",
      titulo2: "Juega y aprende sobre sostenibilidad",
      info: "Pendiente ",
    },
  ];
  const [life, setLife] = useState(0);
  const [money, setMoney] = useState(0);

  const upgrades = [
    { name: 'Mejora de Torre Solar', cost: 100 },
    { name: 'Mejora de Torre de Viento', cost: 150 },
    // Añade más mejoras según sea necesario
  ];

  return (
    <div><div className="vista-juego">
      <a href="/eficiencia">
        <img
          src="https://static.vecteezy.com/system/resources/previews/007/231/420/non_2x/arrow-back-icon-which-is-suitable-for-commercial-work-and-easily-modify-or-edit-it-vector.jpg"
          alt="Back"
          className="navigation-back"
        />
      </a>
      <div className="div">
        <div>
          {HEADER.map((c) => (
            <Header {...c} />
          ))}
        </div>
      </div>
      <section id="consumo" className="my-4"></section>
      <div className="vista-page">
        <div className="sidebar-container">
        <Sidebar life={life} money={money} upgrades={upgrades} />
      </div>
      <div className="game-container">
        <Game setLife={setLife} setMoney={setMoney} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Vista;
