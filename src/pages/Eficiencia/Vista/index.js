import React from 'react';
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
              <Header {...HEADER} />
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
