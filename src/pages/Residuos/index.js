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
              </div>
            </div>
          </div>
        </div>
      </main>
      <section class="container-xxl">
        <span class="Conoces-la-diferencia-entre-basura-y-residuos-">
          ¿Conoces la diferencia entre
          <span class="text-style-1"> basura</span> y
          <span class="text-style-2"> residuos</span>?
        </span>

        <div class="basura-1">
          <img
            class="image-110"
            src="https://images.unsplash.com/photo-1592890278983-18616401d4ed?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="imagen"
          ></img>
          <div class="basura">
            <span class="text-style-3">Basura: </span>
            La basura es todo aquel físico considerado como desecho y que se
            necesita eliminar. La basura es un producto de las actividades
            humanas al cual se le considera de valor igual a cero por el
            desechado, no necesariamente debe ser odorífica, repugnante e
            indeseable, eso depende del origen y composición de estado que ya no
            se le puede dar otro uso o no tiene ninguna utilidad posible
          </div>
        </div>
        <div class="residuos-1">
          <img
            class="image-111"
            src="https://images.unsplash.com/photo-1469326656011-29c6b0ccb641?q=80&w=2639&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="imagen"
          ></img>
          <div class="residuos-2">
            <span class="text-style-3">Residuos: </span>
            Los residuos son materiales, sustancias o productos que ya no son
            útiles para el propósito original para el que fueron creados o
            utilizados. Estos pueden ser sólidos, líquidos o gaseosos y pueden
            ser el resultado de actividades humanas o procesos naturales.Los
            residuos pueden clasificarse de diversas maneras:
          </div>
        </div>

        <span class="Segn-sus-caractersticas">
          <span class="text-style-1">Según sus </span>
          características
        </span>

        <div class="content_info">
          <ul>
            <li>
              <span class="text-style-3">Residuos peligrosos: </span>
              presentan riesgo para la salud y el medio ambiente
            </li>
            <li>
              <span class="text-style-3">Residuos NO peligrosos: </span>
              no presentan riesgo para la salud ni el medio ambiente
            </li>
            <li>
              <span class="text-style-3">Residuos inertes: </span>
              residuo que no experimenta variaciones físicas, quimicas o
              biológicas
            </li>
          </ul>
        </div>

        <span class="Segn-su-origen">
          <span class="">Según su </span>
          <span class="text-style-1">origen</span>
        </span>

        <div class="content_info">
          <ul>
            <li>
              <span class="text-style-3">Residuos sólidos municipales: </span>
              residuos domiciliarios y de aseo público
            </li>
            <li>
              <span class="text-style-3">Residuos industriales: </span>
              residuos domiciarios y de aseo público
            </li>
          </ul>
        </div>

        <div class="container text-center">
          <div class="row row-cols-3 row-cols-lg-3 g-2 g-lg-3">
            <div class="col">
              <img
                class="gris-claro"
                src="https://lh3.google.com/u/0/d/1EvT5xp4gvG9dk6Y-niqcQRCJ0Su0NnSZ=w2560-h753-iv1"
                alt=""
              />
            </div>
            <div class="col">
              <img
                class="verde"
                src="https://lh3.google.com/u/0/d/17Or6Gjft0MntfzMtRA-cyJRN63K6FiA7=w2560-h753-iv1"
                alt=""
              />
            </div>
            <div class="col">
              <img
                class="beige"
                src="https://lh3.google.com/u/0/d/18rUFtBxa6H-aFOZQgUAcvVxO3TvdZPqH=w2560-h753-iv1"
                alt=""
              />
            </div>
            <div class="col">
              <img
                class="azul"
                src="https://lh3.google.com/u/0/d/14c0hm-Lrz-MuFJo13afcEXdcys0-qdQl=w2560-h753-iv1"
                alt=""
              />
            </div>
            <div class="col">
              <img
                class="rojo"
                src="https://lh3.google.com/u/0/d/1IQabauJRE_K9tNkhrKvdkzV3u6a_9vnv=w2560-h753-iv1"
                alt=""
              />
            </div>
            <div class="col">
              <img
                class="burdeos"
                src="https://lh3.google.com/u/0/d/1nWbhlrLLfr1tjcgZh7uZfl1n0jGlgUKw=w2560-h753-iv1"
                alt=""
              />
            </div>
            <div class="col">
              <img
                class="gris-oscuro"
                src="https://lh3.google.com/u/0/d/1e3aJX9z-vMZF6JIy5XsvDpm6rnACqVvy=w2560-h753-iv1"
                alt=""
              />
            </div>
            <div class="col">
              <img
                class="amarillo"
                src="https://lh3.google.com/u/0/d/19qJih_ll-mv4AXhceSOvWyWzWgvvv5mA=w2560-h753-iv1"
                alt=""
              />
            </div>
            <div class="col">
              <img
                class="cafe"
                src="https://lh3.google.com/u/0/d/1uJVCUKjDffHWY1rEpuOwrxxtI-10ZeN4=w2560-h753-iv1"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Residuos;
