import "./styles.css";
import Product from "../componentes/Product";

const PRODUCTOSP = () => {
  const header = {
    title: "PRODUCTOS",
    title2: "SOSTENIBLES",
    categories: "Papeleria",
  };
  const productos = [
    {
      name: "planner escritorio araucaria",
      price: "$14.990",
      image:
        "https://www.greencorp.cl/wp-content/uploads/2023/12/WhatsApp-Image-2024-04-22-at-17.12.09.jpeg",
    },
    {
      name: "taco de notas en caja",
      price: "$7.990",
      image:
        "https://www.greencorp.cl/wp-content/uploads/2023/12/taco-3-scaled.jpeg",
    },
    {
      name: "cuaderno alerce",
      price: "$12.000",
      image:
        "https://www.greencorp.cl/wp-content/uploads/2023/12/portada-cuaderno.jpeg",
    },
  ];

  return (
    <body>
      <div className="container"> 
      <div className="productos-c">
        <div className="div-wrapper-2">
          <div className="overlap-202">
            <img
              className="image-leaf"
              src="https://lh3.googleusercontent.com/fife/ALs6j_E1XJMy6dLTQnWKOndAwWLR4882f5wfGN589o7PPEimSpodGq_o5vNYhSPbl0UMxtY2zKIZCE4lDDevefGQO2Q1BdoHGu-w8ywkUj_KndRdOI3MG4njm3acK0U-pwUBcVVISr3a2l-_f6HHQDHodYIrdW4mkBI-Dc-zY2v7eX5cMEiNcnbgAK4cQnbnW2LITdQnTI-63pRUpT2o_MsenBcVxzHDjJCEfm3ACxP5xbhkqiIkJ7yHAAj4mvQ6nJZ-wpA16w6OALBltOO3OrO1dLDPZwrlGnKRsAp3SlW0XjnvE4Ove-OP3dF0SZ3cReKkG7wwhbq8gub96w6tPjISI10Lrjvbec2o1A8mam_b84-HZsKDvB0g0Tyt7Cz_BZxE8jD7OmIsIOEwtegv2MTqd7hw3BoKlADXU-duHKurKBjCPZ2tpVgnF56GP07sw0YbacRwFFkhLTfSVfJ1avpN1QhRevyC-j-frmLFWr4At8vetmEX71LnEFKNI-5vY29hgOT0dJWBL_0MMhG-6VpP2frxlITkWl-R3ca6eMw9nLBgkDEDbSetQ9Ll3D0RLmzvjSG3hwWETBOIz0xlB16I2DskEqT3wOID_NB4B6HqwORSNRh10xbAEd2VXe-nO0z2zO7bA2cxUhe9J0Q9_sZ7PetV3sSOsHe0Tko6LZQIHycQI2HHIxZWR_Fr5lB-ywpd0r0RAAwbsN1He44F6uWpUxqIGZ7Njmn-eBjUOGOu4X3bLjEROTeIR_sat6lxABuuKL-si7rVG1H8vgP354_6eO8UQJMnrOoJupfXTi841rYRdNmpX-fVWeZIse6pBoTZnZ68s1vPI-XAKJMKM22lVxKfd859mAzn-I6JGtccl6xxXKE1wxngWP6Bs478IpWhWpXl0sddcjsvwW_n8woi9byjyt8GoofU8KGfah1k3FnARVsWE4J_s_mW0De2cIm90ME-F7vfXZlQwJ00LYdG03LzkIMq7JD9HZlQvF9jGoeh8yHCjPViZ_B2R5eZrdr_o0rLt0CMeynFJPKa4zS1xPvXp7v2Anz9n5vboRRKWhKJd5xUBbHI4gI5iK3zr5W5zuXJShGscJiC3xuifF_tvaGtTmKjAdzue0Ony4auYR3zcxiT-fSUdFAq-lRQ0g-Y2GptCjYbxu3m9DuO7UrcCAmOuxJJukRx2tvcV7yb_DTTJtH1_fDf8FfaNuyrp6NK2IZNNxcQkHizBmxKBELZBu_uBOYzPps7gitT3wBOImW-0WmNCQmbW_ssypr4_QXkrjAEB88isOoVf9HQB1LA94ge_JYHF1qzWTnz5PssJtyhtTVfifMee0m3-XtqqS5mfRrimpDDu7WCvM2kbmoNUvi8CDn8Mghjo0Zz_hfNJkAK8qSekumivIQt8sug5O_A3RzqVLBVOh-9mYrqQmWsjN3S_B0kcdDfAAYTQp3wfmlqg2LIyYeg-MT34vQDvAC99AHTwpNzA6MM5YGfFzxukvUv6-lDW5cncqABn__SDFrWt27q8Uv0XxjJDJJap8Ziu4Izl1GJ-I5J-LFmeJs3s1LM5DSc6aYPUBACXNHuNqnGae5OlC-nVhNndhxV1XCf5T_mgNR0WpJLQ5yNOtFkWc0nwTg4WDaZX4LeynB0ZTmWlA65-RJDFyAxHKs_wl9U0mOL_espD3k0j0-tZsG3Y0Hpnbgu0g=w2000-h3556"
            />
            <div className="text-titulo-pag2">{header.title}</div>
            <div className="text-titulo-pag3">{header.title2}</div>
            <div className="overlap-group-a">
              <div className="hero-banner-plo"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards-container">
        <div className="flex-column">
          <div className="tarjeta-productos">
            {productos.map((p) => (
              <Product {...p} />
            ))}
          </div>
        </div>
      </div>
      </div>
    </body>
  );
};

export default PRODUCTOSP;

