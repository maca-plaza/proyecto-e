import React from 'react';
import Solar from "../Energias/pages/Solar";
import Header from "../../components/Header";
import "./calculadora.css";

const Calculadora = () => {
  const HEADER = [
    {
      titulo: "Calculadora Solar",
      titulo2: "¿Cómo saber cuál es mi consumo?",
      info: "Para determinar tu consumo energético, puedes revisar tu factura eléctrica mensual. Allí encontrarás información detallada sobre tu consumo de energía en kilovatios hora (kWh) y el monto total a pagar. El consumo promedio diario se calcula dividiendo el total de kWh consumidos en el período de facturación por el número de días del período.  Conocer tu consumo energético es importante porque te permite tomar decisiones informadas sobre la eficiencia energética en tu hogar y considerar la adopción de sistemas de energía renovable para reducir tu dependencia de la red eléctrica convencional. ",
    },
  ];

  return (
    <>
      <div className="calculadora">
        <a href="/Energias">
        <img
          src="https://lh3.googleusercontent.com/fife/ALs6j_ELXrSBPppn4E_ywqI-WHqPGZYOZm6lRkehyJloqc6V1cooBs49HXkUbS35REnIiVin7FIy1WnzbtPB_r-pQOoUYB_z_Fk7CWrl4zsRpy9X8h_4QG6qwc8lS4paccBzfCNuFXCUR6np8zdrS22qEKPYa1HxTDH5Nz4SBL56xao_IPuGppjTrxlK_dADZnLpRv2lZ-lz88j2MQ6N7PhBYSpFTaWB9tjCuz3AkO0L_cKd4C0Vkh6ytUUW1WLn5HCy0wWdUuslHd5UScWT-b02TSoVCcj3se9NwY2Q6WlM74SWsgVp75GKZvZ8PAT-jfT7Emf6FprIJYmioQBB9Fci9O66fMIikxpUdOMSur9pebs8r8YcZX8j-Th-_Yx5sYE9snsUfI6gQn5vu6X3iHBSFPkWJ4hZJuHZmTYxTd1FwpRdeBCk1Tpv8eSTzqqQ1X2kbj2qi7dZeYEScrDpPMD58Kk1517M9CsWiHnQqeVihkwJ2zZOphRufU2hEtJ-NmAe_24Feg9qggN_RYOcKesq23sPFpjGuo90PRviSJDuLjhNrWDIy6PHO2nGWm2WDnxJL9JtDkdHwB_21slUucUR0Ztz-BmRrSdlTmyVQ8o7uwrH4xQxOeM3aqE2qa6mSWYjryTD63gxhjqBv4lta10gHuFRzWHOugjmwTBmzeoIYbCHwWc9pUaa3S2xNTlwj2TwHho09UWJ47FU8ly6YG62vzB0CItmRXq_ETMRGLOhOZbHR3_rMA2h2mQ9p9ZcacY8yV1N4vMEcl1ineTsxUE6WZpo9nJA2vNgWQiQoCrmwefsS52Uf_mPYwHD-fMP-wn97BDbn-e2S5KsZ4VJIDUonNLOZW6AEJwrAyZ2ycELdW2r2-2Uc2QUj-ELnr9e7_uPXubnEY_Rqi39tBebjFsMGFIYGz8xJji_24f3d1jW_6JQ50vbuJ3hyx8vEE9Rpm8a-U6UqGmTNb9Jm4fOKFdUV39hKASvMuTWOPk1TDYQKPJxtCilcSYhly3TXFwDM3lKW8EhHU9FuqGp6X78wpu5mA9LLsMKtMjJZLGI5SCsJYEG7o5nZ3AZN8W52JPmwTtZM6bBJiV-ZBPPweC5lCxY59lyGudKqDRjGfQtYTHm03OwwjDM8JHvb2tUwp1HNNfkZ269EZRFpQXbdqBfbu943gcAwXSK_swJI4FJqOlogd5_2H9NacpFtw3Abv-nFrd0l09NBBoNriQJt2XUJ0J2PdiIr9G1dL7gxbEhbMy22TCinlsDW680xQ33EUI6HQmQ7C7fZK9jDTKnRfAVn2zrv84JUyRM4wbBbOAdc8q1Fwpy0TyhnRbnyKv7hA1wmL5UbBqZDPsWtU1Z7TomCXdeoe5B7yWnbooVS1P6EenuaeBs9COV2RRYpk78O1Thn9OH1cljxlopU26so43h0rNnD-aHTP0ohXsqaEu1WOuxZDuw6-Ceqka5lJl4wujLc6FqWeRJruhOwvQRnMsZshy3QIh8MzkpDtlD2IXHiQ21b4MYSLrN4M5kRLUZkkJJxSzyiU6XgEPDZBn6qxlMama-upldsGAzJ0JC8ksl8xqVInzioxI-DdqB_UsHqu0DD47t-NoiDEBxA4n-yIi_BvVoOpxsU2-zuOojBCAO9jM3SEvncxVGS5usdCZDVPJWv7lM6VvxEivRmaJEoH9FtNh3srGDLtjgzg=w1440-h665"
          alt="Back"
          className="navigation-back"
          />
        </a>
        <div className="div">
          <div>
            {HEADER.map((c) => (
              <Header key={c.titulo} {...c} />
            ))}
          </div>
        </div>
        <section id="consumo" className="my-4">
        </section>
        {/* <section id="video" className="my-4">
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
        </section> */}
        <Solar />
      </div>
    </>
  );
};

export default Calculadora;
