import React from "react";
import Stepper from "../../../../components/Stepper";

const Climatico = () => {
  return (
    <body>
      
      <h2>Cambio climatico</h2>
      <Stepper />

      <iframe
        src="https://cambioclimatico.minenergia.cl/"
        width="100%"
        height="800px"
        frameborder="0"
      ></iframe>
    </body>
  );
};

export default Climatico;
