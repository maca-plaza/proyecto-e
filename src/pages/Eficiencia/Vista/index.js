import React from 'react';
import Header from "../../../components/Header";
import "../../Calculadora/calculadora.css";
import Juego from '../Juego';

const Vista = () => {
  const HEADER = [
    {
      titulo: "Mi Casa Eficiente",
      titulo2: "¡Descubre la Casa Eficiente y sé parte de un futuro sostenible!",
      info: "App Casa Eficiente es una aplicación de uso gratuito, en la que te invitamos a descubrir el fantástico mundo de la eficiencia energética y energías renovables en casa, serás el encargando de tomar las decisiones en las diferentes habitaciones que necesitan de tu ayuda, para al fin lograr una Casa Eficiente y amigable con el medio ambiente. Para lograrlo en el trayecto tendrás la compañía de nuestro personaje energético. ¡Aprende jugando! ¡Y recuerda que si réplicas estas decisiones en tu casa seguro conseguirás ahorrar dinero en las cuentas de energía y a la vez cuidar el medio ambiente! ",
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
        
        <Juego />
      </div>
    </>
  );
};

export default Vista;
