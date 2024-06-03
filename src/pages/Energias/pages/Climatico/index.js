import React from "react";
import Stepper from "../../../../components/Stepper";

const Climatico = () => {
    console.log('hola soy una pagina nueva')
  return (
    <body>
      <Stepper />
      <h2>Cambio climatico</h2>

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
