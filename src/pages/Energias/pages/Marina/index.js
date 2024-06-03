import React from "react";
import Stepper from "../../../../components/Stepper";

const Marina = () => {
  return (
    <body>
      <Stepper />
      <h2>Explorador marino</h2>
      <iframe
        src="https://marino.minenergia.cl/"
        width="100%"
        height="800px"
        frameborder="0"
      ></iframe>
    </body>
  );
};

export default Marina;
