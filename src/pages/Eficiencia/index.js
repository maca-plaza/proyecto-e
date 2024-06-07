import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const Eficiencia = () => {
  return (
    <>
      <main>
        <div className="info_main">
          <h1 className="title">
            EFICIENCIA <br />
            <b className="yellow"> ENERGETICA</b>
          </h1>
          <p className="intro">
            El concepto de uso eficiente de la energía hace referencia a la
            capacidad para obtener los mejores resultados en cualquier actividad
            empleando la menor cantidad posible de recursos energéticos. Nos
            permite reducir el consumo de cualquier tipo de energía y con ello
            los posibles impactos ambientales asociados a ella. Esto es
            aplicable desde la generación de dicha energía hasta su consumo
            final.
          </p>
        </div>
        <div className="icono_main">
          <FontAwesomeIcon icon={faLightbulb} className="icon_main" />
        </div>
      </main>
      <section >
      <body>
      <section className="container-xxl">
        <div className="content">
          <div className="content_info">
            <h2 className="content_title">CONSEJOS EFICIENTES</h2>
            <h3 className="content_subtitle">
              Uso eficiente del <b className="yellow">Refrigerador</b>
            </h3>
            <ul>
              <li>
                El refrigerador es responsable de más del 19,4% del gasto de
                electricidad en el hogar.
              </li>
              <li>Ubica el refrigerador en un lugar frío</li>
              <li>Descongela y retira el hielo congelado</li>
              <li>Limpia parte trasera</li>
              <li>Regula el termostato</li>
              <li>
                Descongela alimentos en el interior y no introduzcas elementos
                calientes
              </li>
            </ul>
          </div>
          <div className="content_imagen">
            <img src="https://lh3.google.com/u/0/d/1TGCLNVS3gzKAjAc_ydZGMibtYoFGWQMb=w1439-h753-iv1" alt="" />
          </div>
        </div>

        <div className="content content_reverse">
          <div className="content_info">
            <h3 className="content_subtitle">
              En <b className="yellow">iluminación</b>
            </h3>
            <ul>
              <li>
                Apaga las luces que no estés usando. La iluminación representa
                un 16,8% del consumo de electricidad en una vivienda.
              </li>
              <li>
                Reemplazar ampolletas por las de Ahorro Energético (Tecnología
                Led o de bajo consumo). Así podrás conseguir un ahorro de hasta
                90%, con respecto a las ampolletas antiguas.
              </li>
              <li>
                Aprovechar la luz natural y en lo posible pintar murallas con
                colores claros
              </li>
              <li>
                Apaga el televisor si no lo están viendo. Representa casi el
                16,3% del consumo de electricidad de una vivienda.
              </li>
            </ul>

            <h3 className="content_subtitle">
              En la <b className="yellow">cocina</b>
            </h3>
            <ul>
              <li>Cocina con la olla tapada</li>
              <li>Cuida que el fuego no salga de la olla</li>
              <li>Mantenga el horno cerrado y los quemadores limpios</li>
            </ul>
          </div>
          <div className="content_imagen">
            <img
              src="https://lh3.google.com/u/0/d/1m1YfHNB57AcoklNbCBREBtjkbh8AytLi=w1439-h460-iv1"
              className="imagen_principal"
              alt=""
            />
          </div>
        </div>

        <div className="content">
          <div className="content_info">
            <h3 className="content_subtitle">
              <b className="yellow">Agua</b> caliente{" "}
            </h3>
            <ul>
              <li>Apagar la llama del calefón.</li>
              <li>Regula la temperatura desde el calefón.</li>
              <li>Instala aireadores</li>
              <li>Tomar duchas cortas</li>
              <li>
                Instala aireadores de agua en las llaves de baños y cocina.
                Puedes ahorrar hasta un 50% de agua y energía.
              </li>
            </ul>

            <h3 className="content_subtitle">
              La <b className="yellow">plancha</b>
            </h3>
            <ul>
              <li>
                Plancha la mayor cantidad de prendas y No dejes encendida más de
                lo necesario.
              </li>
              <li>
                Plancha durante la mañana, para aprovechar la luz natural y
                ahorrar en iluminación.
              </li>
            </ul>
          </div>
          <div className="content_imagen">
            <img src="https://lh3.google.com/u/0/d/1QQqQ4riGQagmUCcVQVJttqhtYuz-3kmR=w1439-h460-iv1" alt="" />
          </div>
        </div>

        <div className="content content_reverse">
          <div className="content_info">
            <h3 className="content_subtitle">
              Consumo <b className="yellow">Vampiro</b>
            </h3>
            <p>
              Todos los artefactos eléctricos que tienen una luz verde o roja
              indican que están consumiendo energía, aunque estén apagados. Para
              evitar este consumo vampiro, debes desenchufar los artefactos
              eléctricos o utilizar un alargador o (zapatilla) con interruptor.
            </p>
            <ul>
              <li>No cargue el celular durante toda la noche.</li>
              <li>Desenchufe aparatos que no están usando.</li>
              <li>
                Utiliza alargadores con interruptor porque permiten apagar todos
                los artefactos que estés utilizando.
              </li>
              <li>
                Recuerda adquirir alargadores (o zapatillas) que cuenten con el
                sello de la SEC.
              </li>
            </ul>
          </div>
          <div className="content_imagen">
            <img src="https://lh3.google.com/u/0/d/1Qk5wn28dueNw19D1ov8cKeEQmc1D8DXd=w1439-h460-iv1" alt="" />
          </div>
        </div>
      </section>

      <div className="cards">
        <div className="card_info">
          <FontAwesomeIcon icon={faLightbulb} className="icon" />
          <div className="card_body">
            <h3>Ahorro de energía y costes</h3>
            <p className="card_text">
              Al utilizar menos recursos para llevar a cabo una actividad
              contribuimos al ahorro energético. Además, un menor gasto de
              energía se traduce en una reducción en la factura energética.
            </p>
          </div>
        </div>

        <div className="card_info">
          <FontAwesomeIcon icon={faLightbulb} className="icon" />
          <div className="card-body">
            <h3>Mejoras para el medioambiente</h3>
            <p className="card-text">
              La eficiencia energética rebaja las emisiones de gases de efecto
              invernadero. Con el uso responsable de la energía se consumen
              menos recursos, lo que contribuye a reducir la huella de carbono.
            </p>
          </div>
        </div>

        <div className="card_info">
          <FontAwesomeIcon icon={faLightbulb} className="icon" />
          <div className="card-body">
            <h3>Mejoras en el abastecimiento</h3>
            <p className="card-text">
              La eficiencia energética nos permite optimizar el uso de recursos
              naturales y crear economía de proximidad, fomentando con ello el
              consumo responsable.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="calculator">
        <button></button>
      </div> */}



      </body>
    </>
  );
};

export default Eficiencia;
