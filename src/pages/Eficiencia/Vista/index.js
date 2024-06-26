import React, { useState } from 'react';
import Header from "../../../components/Header";
import "../../Calculadora/calculadora.css";
import PhaserGame from '../../../components/PhaserGame/PhaserGame';

const Vista = () => {
  const HEADER = [
    {
      titulo: "Tower Defense",
      titulo2: "Juega y aprende sobre sostenibilidad",
      info: "Pendiente ",
    },
  ];
  const [life, setLife] = useState(100);
  const [money, setMoney] = useState(500);
  const [upgrades, setUpgrades] = useState([
    { name: 'Torre Solar', cost: 100 },
    { name: 'Parque Eólico', cost: 200 }
  ]);

  return (
    <>
      <div className="calculadora">
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
        <section id="consumo" className="my-4">
        </section>
        
        <PhaserGame  />
      </div>
    </>
  );
};

export default Vista;
