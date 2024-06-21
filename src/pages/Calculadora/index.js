import React from 'react';
import SearchBar from "../../components/Searchbar";
import Solar from "../Energias/pages/Solar";
import Header from "../../components/Header";
import "./calculadora.css";

const Calculadora = () => {
  const HEADER = [
    {
      titulo: "Calculadora Solar",
      titulo2: "¿Cómo saber cuál es mi consumo?",
      info: "Para determinar tu consumo energético, puedes revisar tu factura eléctrica mensual. Allí encontrarás información detallada sobre tu consumo de energía en kilovatios hora (kWh) y el monto total a pagar. El consumo promedio diario se calcula dividiendo el total de kWh consumidos en el período de facturación por el número de días del período.  Conocer tu consumo energético es importante porque te permite tomar decisiones informadas sobre la eficiencia energética en tu hogar y considerar la adopción de sistemas de energía renovable para reducir tu dependencia de la red eléctrica convencional. ",
    },
  ];

  return (
    <>
      <div className="calculadora">
        <div className="div">
          <div>
            {HEADER.map((c) => (
              <Header key={c.titulo} {...c} />
            ))}
          </div>
        </div>
        <section id="consumo" className="my-4">
        </section>
        {/* <section id="video" className="my-4">
          <h2>Video Tutorial</h2>
          <p>
            A continuación, te mostramos un breve video que te guiará en cómo revisar
            tu cuenta de la luz para obtener la información necesaria sobre tu consumo
            energético:
          </p>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="video_tutorial.mp4"
              allowfullscreen
            ></iframe>
          </div>
        </section> */}
        <Solar />
      </div>
    </>
  );
};

export default Calculadora;
