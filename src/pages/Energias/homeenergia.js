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
              <strong>Energía Solar:</strong> Aprovecha la radiación solar para
              generar electricidad o calor mediante paneles solares
              fotovoltaicos y térmicos.
            </li>
            <li>
              <strong>Energía Eólica:</strong> Utiliza la fuerza del viento para
              mover aerogeneradores que producen electricidad.
            </li>
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

          <h3>Beneficios Ambientales:</h3>
          <ul>
            <li>
              <strong>Reducción de Emisiones de CO2:</strong> Al reemplazar los
              combustibles fósiles con energías renovables, se disminuyen
              significativamente las emisiones de dióxido de carbono y otros
              gases de efecto invernadero.
            </li>
            <li>
              <strong>Conservación de Recursos Naturales:</strong> Las energías
              renovables no agotan los recursos naturales, preservando los
              ecosistemas y la biodiversidad.
            </li>
            <li>
              <strong>Menor Contaminación:</strong> Estas fuentes de energía
              producen menos contaminación del aire y del agua, mejorando la
              calidad ambiental y la salud pública.
            </li>
          </ul>

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

          <h3>Beneficios Sociales:</h3>
          <ul>
            <li>
              <strong>Acceso a Energía en Áreas Remotas:</strong> Las
              tecnologías renovables, como los sistemas solares, pueden
              proporcionar electricidad a comunidades rurales y aisladas.
            </li>
            <li>
              <strong>Mejora de la Salud Pública:</strong> Al disminuir la
              contaminación del aire, se reducen las enfermedades respiratorias
              y cardiovasculares relacionadas con la quema de combustibles
              fósiles.
            </li>
            <li>
              <strong>Educación y Conciencia:</strong> Promover el uso de
              energías renovables fomenta una mayor conciencia ambiental y educa
              a la población sobre prácticas sostenibles.
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
                    <div className="card-body">
                      <h5 className="card-title">Explorador Solar</h5>
                      <p className="card-text">
                        El Explorador Solar es la herramienta pública más
                        completa y detallada sobre el recurso solar en Chile.
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
                        El Explorador Marino es una herramienta que permite
                        explorar las características del recurso mareomotriz en
                        Chile y estimar su potencial. Beneficios y Retos:
                        Ventajas y desafíos de esta tecnología.
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
                      <p className="card-text">
                        Consejos para Eficiencia Energética: Prácticas y
                        tecnologías para climatización eficiente. Comparativa de
                        Sistemas: Análisis de diferentes sistemas de
                        climatización.
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
