import React from "react";
import Embed from "./Embed";
import { faSun, faWind, faWater} from "@fortawesome/free-solid-svg-icons";

const Pages = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Embed 
        icon={faSun} 
        title="Energía Solar" 
        paragraph="Descubre cómo la energía solar puede ayudarte a ahorrar en tu factura de electricidad." 
        link="/energia-solar" 
      />
      <Embed 
        icon={faWater} 
        title="Energía Hidroeléctrica" 
        paragraph="Es una herramienta que permite explorar las características del
                recurso mareomotriz en Chile y estimar su potencial." 
        link="/energia-hidroelectrica" 
      />
      <Embed 
        icon={faWind} 
        title="Climatico" 
        paragraph="Soluciones Renovables: Cómo las energías renovables pueden mitigar el cambio climático." 
        link="/energia-geotermica" 
      />
    </div>
  );
};

export default Pages;