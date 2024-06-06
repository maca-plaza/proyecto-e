import { Link } from "react-router-dom";
import Stepper from "../../components/Stepper";

const Renewal = () => {
  return (
    <>
      <h1>Energias Renovables</h1>
      <Stepper />
      <div className="container">
        <section id="intro" className="my-4">
          <p>
            Las energías renovables son fuentes de energía que se obtienen de
            recursos naturales como el sol, el viento, el agua y la biomasa.
            Estas fuentes son inagotables y no contaminantes, lo que las
            convierte en una alternativa sostenible y respetuosa con el medio
            ambiente.
          </p>

          <h2>Qué son las Energías Renovables</h2>
          <p>
            Las energías renovables son aquellas que se obtienen de recursos
            naturales inagotables o que se regeneran de manera continua. A
            diferencia de los combustibles fósiles, las energías renovables no
            se agotan y tienen un impacto ambiental mínimo.
          </p>
          <h3>Ejemplos de Energías Renovables:</h3>
          <ul>
            
            <li>
              <strong>Energía Hidroeléctrica:</strong> Genera electricidad a
              partir del flujo del agua en ríos y embalses mediante turbinas
              hidráulicas.
            </li>
            <li>
              <strong>Energía Geotérmica:</strong> Aprovecha el calor del
              interior de la Tierra para generar electricidad o calefacción.
            </li>
            <li>
              <strong>Biomasa:</strong> Utiliza materiales orgánicos como
              madera, residuos agrícolas y desechos orgánicos para producir
              energía.
            </li>
          </ul>
        </section>
        <section className="benefits">
          <h2>Beneficios de las Energías Renovables</h2>
          

          <h3>Beneficios Económicos:</h3>
          <ul>
            <li>
              <strong>Ahorro en Costos Energéticos:</strong> Aunque la inversión
              inicial puede ser alta, las energías renovables suelen tener
              costos operativos bajos, lo que resulta en ahorros a largo plazo.
            </li>
            <li>
              <strong>Creación de Empleos:</strong> El sector de las energías
              renovables genera empleo en la fabricación, instalación y
              mantenimiento de tecnologías verdes.
            </li>
            <li>
              <strong>Independencia Energética:</strong> Reducir la dependencia
              de importaciones de combustibles fósiles fortalece la seguridad
              energética y económica de los países.
            </li>
          </ul>

          
        </section>
      </div>
      <body>
        <div>
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
                      <p className="card-text">
                        Consejos para Eficiencia Energética: Prácticas y
                        tecnologías para climatización eficiente. Comparativa de
                        Sistemas: Análisis de diferentes sistemas de
                        climatización.
                        faSun,faWind,faWater,
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-4">
                <Link to="climatico" className="card-link">
                  <div className="card">
                    <img
                      src="https://exploradores.minenergia.cl/portal-ernc/thumbnails/cambio_climatico.png"
                      className="card-img-top"
                      alt="Imagen 1"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Cambio Climático</h5>
                      <p className="card-text">
                        Soluciones Renovables: Cómo las energías renovables
                        pueden mitigar el cambio climático.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <section id="links" className="my-4">
            <h2>Enlaces de Interés</h2>
            <ul>
              <li>
                <a href="https://energia.gob.cl/">Ministerio de Energía</a>
              </li>
              <li>
                <a href="https://www.cne.cl/">Comisión Nacional de Energía</a>
              </li>
              <li>
                <a href="https://eolico.minenergia.cl/inicio ">
                  Explorador Eólico
                </a>
              </li>
              <li>
                <a href="https://sit.conaf.cl/">
                  Explorador de bioenergia en Chile
                </a>
              </li>
            </ul>
          </section>
        </div>
      </body>
    </>
  );
};

export default Renewal;


<div className="flex flex-col min-h-screen">
<main className="flex-1">
  <section className="main-section">
    <img src="/placeholder.svg" alt="Energía Renovable" className="main-image" />
    <div className="main-overlay">
      <div className="container main-content">
        <h1 className="main-title">Impulsando un Futuro Sostenible</h1>
        <p className="main-subtitle">Descubre el poder de las soluciones de energía renovable y cómo pueden transformar tu comunidad.</p>
        <div className="main-buttons">
          <Link href="#" className="button-primary" prefetch={false}>Aprende Más</Link>
          <Link href="#" className="button-secondary" prefetch={false}>Involúcrate</Link>
        </div>
      </div>
    </div>
  </section>
  <section className="content-section">
    <div className="container content-container">
      <div className="content-header">
        <h2 className="content-title">Soluciones de Energía Renovable</h2>
        <p className="content-subtitle">Explora las diferentes tecnologías de energía renovable y cómo pueden impulsar un futuro sostenible.</p>
      </div>
      <div className="grid">
        <div className="grid-item">
          <FontAwesomeIcon icon={faSun} className="grid-icon" />
          <h3 className="grid-title">Energía Solar</h3>
          <p className="grid-text">Aprovecha el poder del sol para generar electricidad limpia y renovable.</p>
          <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
        </div>
        <div className="grid-item">
          <FontAwesomeIcon icon={faWind} className="grid-icon" />
          <h3 className="grid-title">Energía Eólica</h3>
          <p className="grid-text">Captura el poder del viento para generar electricidad renovable.</p>
          <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
        </div>
        <div className="grid-item">
          <FontAwesomeIcon icon={faWater} className="grid-icon" />
          <h3 className="grid-title">Energía Hidroeléctrica</h3>
          <p className="grid-text">Aprovecha el poder del agua corriente para generar electricidad renovable.</p>
          <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
        </div>
        <div className="grid-item">
          <FontAwesomeIcon icon={faLeaf} className="grid-icon" />
          <h3 className="grid-title">Bioenergía</h3>
          <p className="grid-text">Convierte materia orgánica en fuentes de energía renovable como los biocombustibles.</p>
          <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
        </div>
        <div className="grid-item">
          <FontAwesomeIcon icon={faBolt} className="grid-icon" />
          <h3 className="grid-title">Energía Geotérmica</h3>
          <p className="grid-text">Aprovecha el calor natural de la Tierra para generar electricidad renovable.</p>
          <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
        </div>
        <div className="grid-item">
          <FontAwesomeIcon icon={faBatteryFull} className="grid-icon" />
          <h3 className="grid-title">Almacenamiento de Energía</h3>
          <p className="grid-text">Almacena energía renovable para usarla cuando más se necesita.</p>
          <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
        </div>
      </div>
    </div>
  </section>
  <section className="benefits-section">
    <div className="container benefits-container">
      <div className="benefits-header">
        <h2 className="benefits-title">Los Beneficios de la Energía Renovable</h2>
        <p className="benefits-subtitle">La energía renovable proporciona una multitud de beneficios, desde la reducción de emisiones de carbono hasta la mejora de la salud pública y la creación de empleos.</p>
      </div>
      <div className="grid">
        <div className="grid-item">
          <FontAwesomeIcon icon={faHospital} className="grid-icon" />
          <h3 className="grid-title">Mejora de la Salud Pública</h3>
          <p className="grid-text">Reduce la contaminación del aire y del agua, mejorando los resultados de salud para las comunidades.</p>
          <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
        </div>
        <div className="grid-item">
          <FontAwesomeIcon icon={faDollarSign} className="grid-icon" />
          <h3 className="grid-title">Crecimiento Económico</h3>
          <p className="grid-text">Crea empleos y estimula el crecimiento económico a través de inversiones en energía renovable.</p>
          <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
        </div>
        <div className="grid-item">
          <FontAwesomeIcon icon={faFan} className="grid-icon" />
          <h3 className="grid-title">Independencia Energética</h3>
          <p className="grid-text">Reduce la dependencia de combustibles importados y aumenta la seguridad energética.</p>
          <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
        </div>
        <div className="grid-item">
          <FontAwesomeIcon icon={faUsers} className="grid-icon" />
          <h3 className="grid-title">Empoderamiento de la Comunidad</h3>
          <p className="grid-text">Involucra a las comunidades en la transición hacia la energía sostenible y empodera la toma de decisiones local.</p>
          <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
        </div>
        <div className="grid-item">
          <FontAwesomeIcon icon={faShieldAlt} className="grid-icon" />
          <h3 className="grid-title">Resiliencia Climática</h3>
          <p className="grid-text">Mejora la resiliencia de los sistemas energéticos frente a los impactos climáticos y eventos climáticos extremos.</p>
          <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
        </div>
        <div className="grid-item">
          <FontAwesomeIcon icon={faBolt} className="grid-icon" />
          <h3 className="grid-title">Huella de Carbono Reducida</h3>
          <p className="grid-text">Reduce significativamente las emisiones de carbono en comparación con los combustibles fósiles, ayudando a mitigar el cambio climático.</p>
          <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
        </div>
      </div>
    </div>
  </section>
</main>
</div>