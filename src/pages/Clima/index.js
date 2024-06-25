import React from 'react';
import Climatico from "../Energias/pages/Climatico";
import Header from "../../components/Header";
import "../Clima/clima.css";

const Cambio = () => {
  const HEADER = {
    titulo: "Cambio Climático",
    titulo2: "¿Qué acciones hacer para contaminar menos?",
    info: "El cambio climático es uno de los mayores desafíos que enfrenta la humanidad. A continuación, se presentan algunas acciones que podemos tomar para reducir nuestra huella de carbono y ayudar a combatir el cambio climático: ",
  };

  return (
    <>
      <div className="climatico">
        <a href="/Energias">
          <img
            src="https://lh3.googleusercontent.com/fife/ALs6j_ELXrSBPppn4E_ywqI-WHqPGZYOZm6lRkehyJloqc6V1cooBs49HXkUbS35REnIiVin7FIy1WnzbtPB_r-pQOoUYB_z_Fk7CWrl4zsRpy9X8h_4QG6qwc8lS4paccBzfCNuFXCUR6np8zdrS22qEKPYa1HxTDH5Nz4SBL56xao_IPuGppjTrxlK_dADZnLpRv2lZ-lz88j2MQ6N7PhBYSpFTaWB9tjCuz3AkO0L_cKd4C0Vkh6ytUUW1WLn5HCy0wWdUuslHd5UScWT-b02TSoVCcj3se9NwY2Q6WlM74SWsgVp75GKZvZ8PAT-jfT7Emf6FprIJYmioQBB9Fci9O66fMIikxpUdOMSur9pebs8r8YcZX8j-Th-_Yx5sYE9snsUfI6gQn5vu6X3iHBSFPkWJ4hZJuHZmTYxTd1FwpRdeBCk1Tpv8eSTzqqQ1X2kbj2qi7dZeYEScrDpPMD58Kk1517M9CsWiHnQqeVihkwJ2zZOphRufU2hEtJ-NmAe_24Feg9qggN_RYOcKesq23sPFpjGuo90PRviSJDuLjhNrWDIy6PHO2nGWm2WDnxJL9JtDkdHwB_21slUucUR0Ztz-BmRrSdlTmyVQ8o7uwrH4xQxOeM3aqE2qa6mSWYjryTD63gxhjqBv4lta10gHuFRzWHOugjmwTBmzeoIYbCHwWc9pUaa3S2xNTlwj2TwHho09UWJ47FU8ly6YG62vzB0CItmRXq_ETMRGLOhOZbHR3_rMA2h2mQ9p9ZcacY8yV1N4vMEcl1ineTsxUE6WZpo9nJA2vNgWQiQoCrmwefsS52Uf_mPYwHD-fMP-wn97BDbn-e2S5KsZ4VJIDUonNLOZW6AEJwrAyZ2ycELdW2r2-2Uc2QUj-ELnr9e7_uPXubnEY_Rqi39tBebjFsMGFIYGz8xJji_24f3d1jW_6JQ50vbuJ3hyx8vEE9Rpm8a-U6UqGmTNb9Jm4fOKFdUV39hKASvMuTWOPk1TDYQKPJxtCilcSYhly3TXFwDM3lKW8EhHU9FuqGp6X78wpu5mA9LLsMKtMjJZLGI5SCsJYEG7o5nZ3AZN8W52JPmwTtZM6bBJiV-ZBPPweC5lCxY59lyGudKqDRjGfQtYTHm03OwwjDM8JHvb2tUwp1HNNfkZ269EZRFpQXbdqBfbu943gcAwXSK_swJI4FJqOlogd5_2H9NacpFtw3Abv-nFrd0l09NBBoNriQJt2XUJ0J2PdiIr9G1dL7gxbEhbMy22TCinlsDW680xQ33EUI6HQmQ7C7fZK9jDTKnRfAVn2zrv84JUyRM4wbBbOAdc8q1Fwpy0TyhnRbnyKv7hA1wmL5UbBqZDPsWtU1Z7TomCXdeoe5B7yWnbooVS1P6EenuaeBs9COV2RRYpk78O1Thn9OH1cljxlopU26so43h0rNnD-aHTP0ohXsqaEu1WOuxZDuw6-Ceqka5lJl4wujLc6FqWeRJruhOwvQRnMsZshy3QIh8MzkpDtlD2IXHiQ21b4MYSLrN4M5kRLUZkkJJxSzyiU6XgEPDZBn6qxlMama-upldsGAzJ0JC8ksl8xqVInzioxI-DdqB_UsHqu0DD47t-NoiDEBxA4n-yIi_BvVoOpxsU2-zuOojBCAO9jM3SEvncxVGS5usdCZDVPJWv7lM6VvxEivRmaJEoH9FtNh3srGDLtjgzg=w1440-h665"
            alt="Back"
            className="navigation-back"
          />
        </a>
        <div className="div">
          <Header {...HEADER} />
        </div>
        <section id="consumo" className="my-4"></section>
        <Climatico />
      </div>
    </>
  );
};

export default Cambio;
