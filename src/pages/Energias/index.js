import Stepper from "../../components/Stepper";
const Energias = () => {
  return (
    <>
      <h1>Energias Renovables</h1>
<Stepper />
<div className="container">
  <section id="intro" className="my-4">
    <p>
      Las energías renovables son fuentes de energía que se obtienen de recursos
      naturales como el sol, el viento, el agua y la biomasa. Estas fuentes son
      inagotables y no contaminantes, lo que las convierte en una alternativa
      sostenible y respetuosa con el medio ambiente.
    </p>
  </section>
  <section id="consumo" className="my-4">
    <h2>Cómo saber cuál es mi consumo</h2>
    <p>
      Para determinar tu consumo energético, puedes revisar tu factura eléctrica
      mensual. Allí encontrarás información detallada sobre tu consumo de
      energía en kilovatios hora (kWh) y el monto total a pagar.
    </p>
    <p>
      El consumo promedio diario se calcula dividiendo el total de kWh
      consumidos en el período de facturación por el número de días del período.
    </p>
    <p>
      Conocer tu consumo energético es importante porque te permite tomar
      decisiones informadas sobre la eficiencia energética en tu hogar y
      considerar la adopción de sistemas de energía renovable para reducir tu
      dependencia de la red eléctrica convencional.
    </p>
  </section>
  <section id="video" className="my-4">
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
  </section>
</div>
<body>
  <div className="container">
    <h2 className="mt-4 mb-4">Exploradores</h2>

    <div className="row">
      <div className="col-md-4">
        <a href="calculadora.html" className="card-link">
          <div className="card">
            <img
              src="https://exploradores.minenergia.cl/portal_exploradores/portal-ernc/thumbnails/Banner_solarTarjetav2.png"
              className="card-img-top"
              alt="Imagen 1"
            />
            <div className="card-body">
              <h5 className="card-title">Explorador Solar</h5>
              <p className="card-text">
                El Explorador Solar es la herramienta pública más completa y
                detallada sobre el recurso solar en Chile.
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="col-md-4">
        <a href="marina.html" className="card-link">
          <div className="card">
            <img
              src="https://exploradores.minenergia.cl/portal_exploradores/portal-ernc/thumbnails/Banner_Marinov5.png"
              className="card-img-top"
              alt="Imagen 1"
            />
            <div className="card-body">
              <h5 className="card-title">Explorador Marino</h5>
              <p className="card-text">
                El Explorador Marino es una herramienta que permite explorar las
                características del recurso eólico en Chile y estimar su
                potencial.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-md-4">
        <a href="climatiza.html" className="card-link">
          <div className="card">
            <img
              src="https://exploradores.minenergia.cl/portal_exploradores/portal-ernc/thumbnails/Banner_climatiza.svg"
              className="card-img-top"
              alt="Imagen 1"
            />
            <div className="card-body">
              <h5 className="card-title">Climatiza tu Hogar</h5>
              <p className="card-text">Climatiza tu hogar</p>
            </div>
          </div>
        </a>
      </div>

      <div className="col-md-4">
        <a href="climatico.html" className="card-link">
          <div className="card">
            <img
              src="https://exploradores.minenergia.cl/portal-ernc/thumbnails/cambio_climatico.png"
              className="card-img-top"
              alt="Imagen 1"
            />
            <div className="card-body">
              <h5 className="card-title">Cambio Climático</h5>
              <p className="card-text">Explorador cambio climatico</p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <section id="links" className="my-4">
      <h2>Enlaces de Interés</h2>
      <ul>
        <li><a href="https://energia.gob.cl/">Ministerio de Energía</a></li>
        <li>
          <a href="https://www.cne.cl/">Comisión Nacional de Energía</a>
        </li>
        <li>
          <a href="https://eolico.minenergia.cl/inicio ">Explorador Eólico</a>
        </li>
        <li>
          <a href="https://sit.conaf.cl/">Explorador de bioenergia en Chile</a>
        </li>
      </ul>
    </section>
  </div>
</body>

    </>
  );
};

export default Energias;
