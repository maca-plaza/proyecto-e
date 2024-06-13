import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarBattery} from "@fortawesome/free-solid-svg-icons";
import { faBoxOpen} from "@fortawesome/free-solid-svg-icons";
import {faWrench} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {faIndustry} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import Header from "../../components/Header";

const Residuos = () => {
  const HEADER = [
    {
      titulo: "GESTION DE",
      titulo2: "RESIDUOS",
      info: "es el conjunto de actividades necesarias para el tratamiento de los desechos, desde su generación, hasta su eliminación o reaprovechamiento",
    },
  ];
  return (
    <>
<<<<<<< HEAD
      <div>
        {HEADER.map((c) => (
          <Header {...c} />
        ))}
      </div>
      <main>
        <div class="gestion-de">
          <div class="div">
            <div class="overlap">
              <img
                class="image"
                src="https://images.unsplash.com/photo-1510251197878-a2e6d2cb590c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div class="text-wrapper">
                Gestión de <span class="residuos">Residuos</span>
=======
>>>>>>> 1892cca9db9b9ae0cce4f06b26221b9c8a3c39dd
        <div className="container_img">
        <div className="gestion-de">Gestión de 
          <span className="residuos-text"> Residuos</span>
              </div>
            </div>
          
    
      <div className="container-fluid">
        <span className="Conoces-la-diferencia">
          ¿Conoces la diferencia entre 
          <span className="text-style-1">basura</span>
          <span className="Conoces-la-diferencia">y</span>
          <span className="text-style-1">residuos </span>?
          
        </span>

        <div className="basura-1">
          <img
            className="image-110"
            src="https://images.unsplash.com/photo-1592890278983-18616401d4ed?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="imagen"
          ></img>
          <div className="basura">
            <span className="text-style-3">Basura: </span>
            La basura es todo aquel físico considerado como desecho y que se
            necesita eliminar. La basura es un producto de las actividades
            humanas al cual se le considera de valor igual a cero por el
            desechado, no necesariamente debe ser odorífica, repugnante e
            indeseable, eso depende del origen y composición de estado que ya no
            se le puede dar otro uso o no tiene ninguna utilidad posible
          </div>
        </div>
        <div className="residuos-1">
          <img
            className="image-111"
            src="https://images.unsplash.com/photo-1469326656011-29c6b0ccb641?q=80&w=2639&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="imagen"
          ></img>
          <div className="residuos-2">
            <span className="text-style-3">Residuos: </span>
            Los residuos son materiales, sustancias o productos que ya no son
            útiles para el propósito original para el que fueron creados o
            utilizados. Estos pueden ser sólidos, líquidos o gaseosos y pueden
            ser el resultado de actividades humanas o procesos naturales.Los
            residuos pueden clasificarse de diversas maneras:
          </div>
        </div>

        <div className="content_texto">
        <div className="Segn-sus-caractersticas"> Según sus
        <span className="text-style-4"> características</span>
        </div>
          <div className="iconos">
          <FontAwesomeIcon icon={faCarBattery} />
<<<<<<< HEAD
          </div>
          <div className="residuos-textos">
              <span className="text-style-5">Residuos peligrosos: </span>
            <div className="textos">Desechos que debido a sus propiedades químicas, físicas o biológicas representan un riesgo significativo para la salud humana y el medio ambiente.</div>
            </div>
            <div className="iconos">
            <FontAwesomeIcon icon={faBoxOpen} />
          </div>
          </div>
          <div className="residuos-textos">
              <span className="text-style-5">Residuos NO peligrosos: </span>
              <div className="textos"> Materiales desechados que no presentan riesgos significativos para la salud humana ni el medio ambiente, como residuos orgánicos o materiales reciclables.</div>
              </div>
            <div className="iconos">
            <FontAwesomeIcon icon={faWrench} />
          </div>
          <div className="residuos-textos">
              <span className="text-style-5">Residuos inertes: </span>
              <div className="textos">Desechos que no reaccionan químicamente ni biológicamente, como escombros de construcción y demolición, y que no presentan peligro para el entorno.</div>
        </div>
        </div>
        <div className="content_texto">
        <div className="Segn-su-origen">Según su 
          <span className="text-style-4"> origen</span>
        </div>
          <div className="iconos">
          <FontAwesomeIcon icon={faTrash} />
          </div>
          <div className="residuos-textos">
              <span className="text-style-5">Residuos sólidos municipales: </span>
              Desperdicios generados en hogares, comercios e instituciones, que incluyen desde residuos orgánicos hasta envases y materiales reciclables.
              </div>
            <div className="iconos">
            <FontAwesomeIcon icon={faIndustry} />
          </div>
          <div className="residuos-textos">
              <span className="text-style-5">Residuos industriales: </span>
              Subproductos o desechos derivados de procesos industriales que requieren gestión especializada debido a sus características y posibles impactos ambientales y de salud.
              </div>
      </div>
    
          <div className="row row-cols-3 row-cols-lg-3 g-2 g-lg-3">
            <div className="col">
              <img
                className="gris-claro" 
                src="https://lh3.google.com/u/0/d/1EvT5xp4gvG9dk6Y-niqcQRCJ0Su0NnSZ=w2560-h753-iv1" alt=""
              /> 
              <button className="texto"> Gris Claro
              </button>
                class="gris-claro"
                src="https://lh3.google.com/u/0/d/1EvT5xp4gvG9dk6Y-niqcQRCJ0Su0NnSZ=w2560-h753-iv1"
                alt=""
              />
            </div>
            <div className="col">
              <img
                className="verde"
                src="https://lh3.google.com/u/0/d/17Or6Gjft0MntfzMtRA-cyJRN63K6FiA7=w2560-h753-iv1" alt=""
                class="verde"
                src="https://lh3.google.com/u/0/d/17Or6Gjft0MntfzMtRA-cyJRN63K6FiA7=w2560-h753-iv1"
                alt=""
              />
              <button className="texto"> Verde
              </button>
            </div>
            <div className="col">
              <img
                className="beige"
                src="https://lh3.google.com/u/0/d/18rUFtBxa6H-aFOZQgUAcvVxO3TvdZPqH=w2560-h753-iv1" alt=""
                class="beige"
                src="https://lh3.google.com/u/0/d/18rUFtBxa6H-aFOZQgUAcvVxO3TvdZPqH=w2560-h753-iv1"
                alt=""
              />
              <button className="texto"> Beige
              </button>
            </div>
            <div className="col">
              <img
                className="azul"
                src="https://lh3.google.com/u/0/d/14c0hm-Lrz-MuFJo13afcEXdcys0-qdQl=w2560-h753-iv1" alt=""
                class="azul"
                src="https://lh3.google.com/u/0/d/14c0hm-Lrz-MuFJo13afcEXdcys0-qdQl=w2560-h753-iv1"
                alt=""
              />
              <button className="texto"> Azul
              </button>
            </div>
            <div className="col">
              <img
                className="rojo"
                src="https://lh3.google.com/u/0/d/1IQabauJRE_K9tNkhrKvdkzV3u6a_9vnv=w2560-h753-iv1" alt=""
                class="rojo"
                src="https://lh3.google.com/u/0/d/1IQabauJRE_K9tNkhrKvdkzV3u6a_9vnv=w2560-h753-iv1"
                alt=""
              />
              <button className="texto"> Rojo
              </button>
            </div>
            <div className="col">
              <img
                className="burdeos"
                src="https://lh3.google.com/u/0/d/1nWbhlrLLfr1tjcgZh7uZfl1n0jGlgUKw=w2560-h753-iv1" alt=""
                class="burdeos"
                src="https://lh3.google.com/u/0/d/1nWbhlrLLfr1tjcgZh7uZfl1n0jGlgUKw=w2560-h753-iv1"
                alt=""
              />
              <button className="texto"> Burdeos
              </button>
            </div>
            <div className="col">
              <img
                className="gris-oscuro"
                src="https://lh3.google.com/u/0/d/1e3aJX9z-vMZF6JIy5XsvDpm6rnACqVvy=w2560-h753-iv1" alt=""
                class="gris-oscuro"
                src="https://lh3.google.com/u/0/d/1e3aJX9z-vMZF6JIy5XsvDpm6rnACqVvy=w2560-h753-iv1"
                alt=""
              />
              <button className="texto"> Gris Oscuro
                </button>
            </div>
            <div className="col">
              <img
                className="amarillo"
                src="https://lh3.google.com/u/0/d/19qJih_ll-mv4AXhceSOvWyWzWgvvv5mA=w2560-h753-iv1" alt=""
                class="amarillo"
                src="https://lh3.google.com/u/0/d/19qJih_ll-mv4AXhceSOvWyWzWgvvv5mA=w2560-h753-iv1"
                alt=""
              />
              <button className="texto"> Amarillo
                </button>
            </div>
            <div className="col">
              <img
                className="cafe"
                src="https://lh3.google.com/u/0/d/1uJVCUKjDffHWY1rEpuOwrxxtI-10ZeN4=w2560-h753-iv1" alt=""
                class="cafe"
                src="https://lh3.google.com/u/0/d/1uJVCUKjDffHWY1rEpuOwrxxtI-10ZeN4=w2560-h753-iv1"
                alt=""
              />
              <button className="texto">Café
              </button>
            </div>
            
          </div>
          
          <div className="cuadro-grande"> 
        <p> ¿Quieres saber mas sobre la gestión de residuos?</p>
        </div>
=======
          </div>
          <div className="residuos-textos">
              <span className="text-style-5">Residuos peligrosos: </span>
            <div className="textos">Desechos que debido a sus propiedades químicas, físicas o biológicas representan un riesgo significativo para la salud humana y el medio ambiente.</div>
            </div>
            <div className="iconos">
            <FontAwesomeIcon icon={faBoxOpen} />
          </div>
          </div>
          <div className="residuos-textos">
              <span className="text-style-5">Residuos NO peligrosos: </span>
              <div className="textos"> Materiales desechados que no presentan riesgos significativos para la salud humana ni el medio ambiente, como residuos orgánicos o materiales reciclables.</div>
              </div>
            <div className="iconos">
            <FontAwesomeIcon icon={faWrench} />
          </div>
          <div className="residuos-textos">
              <span className="text-style-5">Residuos inertes: </span>
              <div className="textos">Desechos que no reaccionan químicamente ni biológicamente, como escombros de construcción y demolición, y que no presentan peligro para el entorno.</div>
        </div>
        </div>
        <div className="content_texto">
        <div className="Segn-su-origen">Según su 
          <span className="text-style-4"> origen</span>
        </div>
          <div className="iconos">
          <FontAwesomeIcon icon={faTrash} />
          </div>
          <div className="residuos-textos">
              <span className="text-style-5">Residuos sólidos municipales: </span>
              Desperdicios generados en hogares, comercios e instituciones, que incluyen desde residuos orgánicos hasta envases y materiales reciclables.
              </div>
            <div className="iconos">
            <FontAwesomeIcon icon={faIndustry} />
          </div>
          <div className="residuos-textos">
              <span className="text-style-5">Residuos industriales: </span>
              Subproductos o desechos derivados de procesos industriales que requieren gestión especializada debido a sus características y posibles impactos ambientales y de salud.
              </div>
      </div>
    
          <div className="row row-cols-3 row-cols-lg-3 g-2 g-lg-3">
            <div className="col">
              <img
                className="gris-claro" 
                src="https://lh3.google.com/u/0/d/1EvT5xp4gvG9dk6Y-niqcQRCJ0Su0NnSZ=w2560-h753-iv1" alt=""
              /> 
              <button className="texto"> Gris Claro
              </button>
            </div>
            <div className="col">
              <img
                className="verde"
                src="https://lh3.google.com/u/0/d/17Or6Gjft0MntfzMtRA-cyJRN63K6FiA7=w2560-h753-iv1" alt=""
              />
              <button className="texto"> Verde
              </button>
            </div>
            <div className="col">
              <img
                className="beige"
                src="https://lh3.google.com/u/0/d/18rUFtBxa6H-aFOZQgUAcvVxO3TvdZPqH=w2560-h753-iv1" alt=""
              />
              <button className="texto"> Beige
              </button>
            </div>
            <div className="col">
              <img
                className="azul"
                src="https://lh3.google.com/u/0/d/14c0hm-Lrz-MuFJo13afcEXdcys0-qdQl=w2560-h753-iv1" alt=""
              />
              <button className="texto"> Azul
              </button>
            </div>
            <div className="col">
              <img
                className="rojo"
                src="https://lh3.google.com/u/0/d/1IQabauJRE_K9tNkhrKvdkzV3u6a_9vnv=w2560-h753-iv1" alt=""
              />
              <button className="texto"> Rojo
              </button>
            </div>
            <div className="col">
              <img
                className="burdeos"
                src="https://lh3.google.com/u/0/d/1nWbhlrLLfr1tjcgZh7uZfl1n0jGlgUKw=w2560-h753-iv1" alt=""
              />
              <button className="texto"> Burdeos
              </button>
            </div>
            <div className="col">
              <img
                className="gris-oscuro"
                src="https://lh3.google.com/u/0/d/1e3aJX9z-vMZF6JIy5XsvDpm6rnACqVvy=w2560-h753-iv1" alt=""
              />
              <button className="texto"> Gris Oscuro
                </button>
            </div>
            <div className="col">
              <img
                className="amarillo"
                src="https://lh3.google.com/u/0/d/19qJih_ll-mv4AXhceSOvWyWzWgvvv5mA=w2560-h753-iv1" alt=""
              />
              <button className="texto"> Amarillo
                </button>
            </div>
            <div className="col">
              <img
                className="cafe"
                src="https://lh3.google.com/u/0/d/1uJVCUKjDffHWY1rEpuOwrxxtI-10ZeN4=w2560-h753-iv1" alt=""
              />
              <button className="texto">Café
              </button>
            </div>
            
          </div>
          
          <div className="cuadro-grande"> 
        <p> ¿Quieres saber mas sobre la gestión de residuos?</p>
        </div>
>>>>>>> 1892cca9db9b9ae0cce4f06b26221b9c8a3c39dd
        <div className="cuadro-arriba">
        <img className="imagen-arriba" src="https://lh3.google.com/u/0/d/1mqguxa11FO2AAq8ah2jJvxscu1mj0wvq=w2058-h1118-iv1" alt="recicla-en-casa"></img>
        <a href="https://maspunto.cl/?gad_source=1&gclid=Cj0KCQjw3ZayBhDRARIsAPWzx8obapVn22hlLaU7cmuY_GF4K4lR0ev5k0iQANCfnxvl1LLrzE7m-U8aAvEBEALw_wcB" className="boton-link-1">Recicla desde casa</a>
        </div>
        <div className="cuadro-abajo">
          <img className="imagen-abajo" src="https://lh3.google.com/u/0/d/1V0ionioMPRBad3cTWb0lQ1pDZulwG7uo=w1664-h1118-iv1" alt="compostando"></img>
          <a href="https://acuerdochilecanada.mma.gob.cl/wp-content/uploads/2020/02/Guia-Compostaje-Domiciliario.pdf" className="boton-link-2">Guía para compostar</a>
        </div>
        


  
      
    </>
  );
};
export default Residuos;
