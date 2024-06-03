import React from "react";
import Stepper from "../../../../components/Stepper";

const Solar = () => {
  return (
    <body>
      <Stepper />
      <h2>Calculadora Solar</h2>
      <iframe
        src="https://calculadora-ahorro.web.app/#/"
        width="100%"
        height="800px"
        frameborder="0"
      ></iframe>
    </body>
  );
};

export default Solar;
