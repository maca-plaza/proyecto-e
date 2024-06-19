import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarBattery,
  faBoxOpen,
  faWrench,
  faTrash,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";
import Modal from "./Modal/modal";
import "./styles.css";

const Residuos = () => {
  const HEADER = {
    titulo: "GESTION DE",
    titulo2: "RESIDUOS",
    info: "Es el conjunto de actividades necesarias para el tratamiento de los desechos, desde su generación, hasta su eliminación o reaprovechamiento",
  };
  // const [showModal, setShowModal] = useState(false);
  // const [modalContent, setModalContent] = useState({
  //   imageSrc: "",
  //   title: "",
  //   description: "",
  // });

  // const openModal = (imageSrc, title, description) => {
  //   setModalContent({ imageSrc, title, description });
  //   setShowModal(true);
  // };
  // Listado de imágenes y textos superpuestos
  const coloresReciclaje = [
    {
      imageSrc:
        "https://lh3.google.com/u/0/d/1EvT5xp4gvG9dk6Y-niqcQRCJ0Su0NnSZ=w2560-h753-iv1",
      title: "Gris Claro",
      overlayText: "Texto sobre Gris Claro",
    },
    {
      imageSrc:
        "https://lh3.google.com/u/0/d/17Or6Gjft0MntfzMtRA-cyJRN63K6FiA7=w2560-h753-iv1",
      title: "Verde",
      overlayText: "Texto sobre Verde",
    },
    {
      imageSrc:
        "https://lh3.google.com/u/0/d/18rUFtBxa6H-aFOZQgUAcvVxO3TvdZPqH=w2560-h753-iv1",
      title: "Beige",
      overlayText: "Texto sobre Beige",
    },
    {
      imageSrc:
        "https://lh3.google.com/u/0/d/14c0hm-Lrz-MuFJo13afcEXdcys0-qdQl=w2560-h753-iv1",
      title: "Azul",
      overlayText: "Texto sobre Azul",
    },
    {
      imageSrc:
        "https://lh3.google.com/u/0/d/1IQabauJRE_K9tNkhrKvdkzV3u6a_9vnv=w2560-h753-iv1",
      title: "Rojo",
      overlayText: "Texto sobre Rojo",
    },
    {
      imageSrc:
        "https://lh3.google.com/u/0/d/1nWbhlrLLfr1tjcgZh7uZfl1n0jGlgUKw=w2560-h753-iv1",
      title: "Burdeos",
      overlayText: "Texto sobre Burdeos",
    },
    {
      imageSrc:
        "https://lh3.google.com/u/0/d/1e3aJX9z-vMZF6JIy5XsvDpm6rnACqVvy=w2560-h753-iv1",
      title: "Gris Oscuro",
      overlayText: "Texto sobre Gris Oscuro",
    },
    {
      imageSrc:
        "https://lh3.google.com/u/0/d/19qJih_ll-mv4AXhceSOvWyWzWgvvv5mA=w2560-h753-iv1",
      title: "Amarillo",
      overlayText: "Texto sobre Amarillo",
    },
    {
      imageSrc:
        "https://lh3.google.com/u/0/d/1uJVCUKjDffHWY1rEpuOwrxxtI-10ZeN4=w2560-h753-iv1",
      title: "Café",
      overlayText: "Texto sobre Café",
    },
  ];


    return (
    <>
    
      <div className="img">
        <Header {...HEADER} />
      </div>


      <div className="container-fluid">
        <span className="Conoces-la-diferencia">
          ¿Conoces la diferencia entre
          <span className="text-style-1">basura</span>
          <span className="Conoces-la-diferencia">y</span>
          <span className="text-style-1">residuos </span>?
        </span>

        <div class="container-basura">
  <div class="section basura">
    <div class="content-1">
      <h2 class="title-1">Basura</h2>
      <p class="description-1">
        La basura es todo aquel físico considerado como desecho y que se necesita eliminar. La basura es un producto de las actividades humanas al cual se le considera de valor igual a cero por el desechado, no necesariamente debe ser odorífica, repugnante e indeseable, eso depende del origen y composición de estado que ya no se le puede dar otro uso o no tiene ninguna utilidad posible.
      </p>
    </div>
    <img
      class="image-1"
      src="https://images.unsplash.com/photo-1592890278983-18616401d4ed?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Basura"
    />
  </div>

  <div class="section residuos">
    <img
      class="image-1"
      src="https://images.unsplash.com/photo-1469326656011-29c6b0ccb641?q=80&w=2639&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Residuos"
    />
    <div class="content-1">
      <h2 class="title-1">Residuos</h2>
      <p class="description-1">
        Los residuos son materiales, sustancias o productos que ya no son útiles para el propósito original para el que fueron creados o utilizados. Estos pueden ser sólidos, líquidos o gaseosos y pueden ser el resultado de actividades humanas o procesos naturales. Los residuos pueden clasificarse de diversas maneras.
      </p>
    </div>
  </div>
</div>


        <div className="content_texto">
          <div className="Segn-sus-caractersticas">
            Según sus
            <span className="text-style-4"> características</span>
          </div>
          </div>
        
      

          <div class="card-container1">
        <div class="card1">
            <div class="icon-1">
                <FontAwesomeIcon icon={faCarBattery} />
            </div>
            <div class="card-content-1">
                <span class="label-title">Residuos peligrosos</span>
                <div class="text-card">
                    Desechos que debido a sus propiedades químicas, físicas o biológicas representan un riesgo significativo para la salud humana y el medio ambiente.
                </div>
            </div>
        </div>
        

        <div class="card1">
            <div class="icon-1">
                <FontAwesomeIcon icon={faBoxOpen} />
            </div>
            <div class="card-content">
                <span class="label-title">Residuos NO peligrosos</span>
                <div class="text-card">
                    Materiales desechados que no presentan riesgos significativos para la salud humana ni el medio ambiente, como residuos orgánicos o materiales reciclables.
                </div>
            </div>
        </div>
        <div class="card1">
        <div class="icon-1">
                <FontAwesomeIcon icon={faWrench}/>
            </div>
            <div class="card-content-1">
                <span class="label-title">Residuos inertes</span>
                <div class="text-card">
                Desechos que no reaccionan químicamente ni biológicamente, como
            escombros de construcción y demolición, y que no presentan peligro
            para el entorno.
                </div>
            </div>
            </div>
      
            <div className="content_texto">
          <div className="Segn-su-origen">
            Según su
            <span className="text-style-4"> origen</span>
          </div>
          <div class="card-container1">
          <div class="card1">
            <div class="icon-1">
                <FontAwesomeIcon icon={faTrash} />
            </div>
            <div class="card-content-1">
                <span class="label-title">Residuos sólidos municipales</span>
                <div class="text-card">
                    Desperdicios generados en hogares, comercios e instituciones, que incluyen desde residuos orgánicos hasta envases y materiales reciclables.
                </div>
            </div>
            </div>

            <div class="card1">
            <div class="icon-1">
                <FontAwesomeIcon icon={faIndustry} />
            </div>
            <div class="card-content-1">
                <span class="label-title">Residuos industriales</span>
                <div class="text-card">
                    Subproductos o desechos derivados de procesos industriales que requieren gestión especializada debido a sus características y posibles impactos ambientales y de salud.
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    
    <div class="container-cuadros">
    <div className="content_texto">
          <div className="Segn-sus-caractersticas">
            Colores de
            <span className="text-style-4"> reciclaje</span>
          </div>
          </div>
        <div class="row row-cols-1 row-cols-md-3 g-3">
            <div class="col-1">
                <div class="cardi">
                    <img src="https://lh3.google.com/u/0/d/1EvT5xp4gvG9dk6Y-niqcQRCJ0Su0NnSZ=w2560-h753-iv1" class="card-img-top" alt="Gris claro"/>
                    <div class="card-body-1">
                        <button class="btnn btnn-primary btnn-overlay">Gris Claro</button>
                    </div>
                </div>
            </div>
            <div class="col-1">
                <div class="cardi">
                    <img src="https://lh3.google.com/u/0/d/17Or6Gjft0MntfzMtRA-cyJRN63K6FiA7=w2560-h753-iv1" class="card-img-top" alt="Verde"/>
                    <div class="card-body-1">
                        <button class="btnn btnn-primary btnn-overlay">Verde</button>
                    </div>
                </div>
            </div>
            <div class="col-1">
                <div class="cardi">
                    <img src="https://lh3.google.com/u/0/d/18rUFtBxa6H-aFOZQgUAcvVxO3TvdZPqH=w2560-h753-iv1" class="card-img-top" alt="Beige"/>
                    <div class="card-body-1">
                        <button class="btnn btnn-primary btnn-overlay">Beige</button>
                    </div>
                </div>
            </div>
            <div class="col-1">
                <div class="cardi">
                    <img src="https://lh3.google.com/u/0/d/14c0hm-Lrz-MuFJo13afcEXdcys0-qdQl=w2560-h753-iv1" class="card-img-top" alt="Azul"/>
                    <div class="card-body-1">
                        <button class="btnn btnn-primary btnn-overlay">Azul</button>
                    </div>
                </div>
            </div>
            <div class="col-1">
                <div class="cardi">
                    <img src="https://lh3.google.com/u/0/d/1IQabauJRE_K9tNkhrKvdkzV3u6a_9vnv=w2560-h753-iv1" class="card-img-top" alt="Rojo"/>
                    <div class="card-body-1">
                        <button class="btnn btnn-primary btnn-overlay">Rojo</button>
                    </div>
                </div>
            </div>
            <div class="col-1">
                <div class="cardi">
                    <img src="https://lh3.google.com/u/0/d/1nWbhlrLLfr1tjcgZh7uZfl1n0jGlgUKw=w2560-h753-iv1" class="card-img-top" alt="Burdeos"/>
                    <div class="card-body-1">
                        <button class="btnn btnn-primary btnn-overlay">Burdeos</button>
                    </div>
                </div>
            </div>
            <div class="col-1">
                <div class="cardi">
                    <img src="https://lh3.google.com/u/0/d/1e3aJX9z-vMZF6JIy5XsvDpm6rnACqVvy=w2560-h753-iv1" class="card-img-top" alt="Gris Oscuro"/>
                    <div class="card-body-1">
                        <button class="btnn btnn-primary btnn-overlay">Gris Oscuro</button>
                    </div>
                </div>
            </div>
            <div class="col-1">
                <div class="cardi">
                    <img src="https://lh3.google.com/u/0/d/19qJih_ll-mv4AXhceSOvWyWzWgvvv5mA=w2560-h753-iv1" class="card-img-top" alt="Amarillo"/>
                    <div class="card-body-1">
                        <button class="btnn btnn-primary btnn-overlay">Amarillo</button>
                    </div>
                </div>
            </div>
            <div class="col-1">
                <div class="cardi">
                    <img src="https://lh3.google.com/u/0/d/1uJVCUKjDffHWY1rEpuOwrxxtI-10ZeN4=w2560-h753-iv1" class="card-img-top" alt="Café"/>
                    <div class="card-body-1">
                        <button class="btnn btnn-primary btnn-overlay">Café</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-final">
    <div className="content_texto">
          <div className="Segn-sus-caractersticas">
            ¿Quieres saber mas sobre la 
            <span className="text-style-4"> gestión de residuos</span>?
          </div>
          </div>
  <div class="cuadros-paralelos">
    <div class="cuadro-arriba">
      <img
        class="imagen-arriba"
        src="https://lh3.google.com/u/0/d/1mqguxa11FO2AAq8ah2jJvxscu1mj0wvq=w2058-h1118-iv1"
        alt="recicla-en-casa"
      />
      <a
        href="https://maspunto.cl/?gad_source=1&gclid=Cj0KCQjw3ZayBhDRARIsAPWzx8obapVn22hlLaU7cmuY_GF4K4lR0ev5k0iQANCfnxvl1LLrzE7m-U8aAvEBEALw_wcB"
        class="boton-link-1"
      >
        Recicla desde casa
      </a>
    </div>
    <div class="cuadro-abajo">
      <img
        class="imagen-abajo"
        src="https://lh3.google.com/u/0/d/1V0ionioMPRBad3cTWb0lQ1pDZulwG7uo=w1664-h1118-iv1"
        alt="compostando"
      />
      <a
        href="https://acuerdochilecanada.mma.gob.cl/wp-content/uploads/2020/02/Guia-Compostaje-Domiciliario.pdf"
        class="boton-link-2"
      >
        Guía para compostar
      </a>
    </div>
  </div>
</div>


      </>
      );
    };


export default Residuos;
