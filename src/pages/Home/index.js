import { Link, Outlet } from "react-router-dom";
import ReactDOM from "react-dom";
import "./styles.css"
import Header from "../../components/Header";

const Home = () => {
  const HEADER = [
    {
      titulo: "Bienvenidos a",
      titulo2: "ENERGIZATECH",
      info: "Aqui encontrarás todo lo que necesitas saber para tu hogar.",
    },
  ];
    return (
      <>
      <div className="home-Principal">
        <div className="div">
        <div>
        {HEADER.map((c) => (
          <Header {...c} />
        ))}
      </div>
          {/* <div className="info-home">
            <img
              className="home-image"
              src="https://lh3.googleusercontent.com/u/0/d/1VvNTNUwphxPQz5EKcpu0x9rYtN5KjUZZ=w1848-h858-iv1"
            />
            <div className="text-wrapper-home">Bienvenido a</div>
            <div className="text-wrapper-2-home">ENERGIZATECH</div>
          </div> */}
        </div>
      
      <div className="Home">
      <div className="todosaber-home">
        <div className="home-encontrar">
           <h1 className="parrafo-todosaber-home">
            ¡Todo lo que necesita para tener un hogar más sustentable está acá!
            </h1>
           <h2 className="parrafo-todosaber-home1">
            ¿Te ha pasado que deseas hacer tu hogar más eficiente pero no sabes cómo? No te preocupes, <b className="amarillo-home">ENERGIZATECH</b> está aquí para ayudarte. En nuestra plataforma, te proporcionamos herramientas y recursos prácticos para reducir tu consumo energético y adoptar prácticas sostenibles. Desde consejos simples hasta soluciones avanzadas, te guiaremos paso a paso para transformar tu hogar en un espacio más eco-friendly y eficiente, ahorrando energía y dinero mientras cuidas del medio ambiente.
          </h2>
        <div className="boton-Home">
      <button className="boton-home-productos">
        <Link to="/productos" className="click" style={{ color: 'inherit' }}>Ver más</Link>
      </button>
      </div>
    </div>
  <div className="content-imagen-home">
    <img
      src="https://lh3.googleusercontent.com/u/0/d/1zv6pAwAP24bOeQ2zc7MuizPKgwKa11WG=w1848-h858-iv1"
      alt="Imagen de hogar sustentable"
    />
  </div>
</div>

      <div className="container-xxl-home">
        <h1 className="inspirate-home">Inspírate y renueva tu casa</h1>
        <div className="images-home">
          <div className="imagenes-home">
            <Link to="/productos/categoria/Cuidado personal" className="imagen-cuidado-home"> 
              <img src="https://lh3.googleusercontent.com/u/0/d/1kMPfzK3qv8umxV8_0KVl5rZ8ONcM9AEL=w1020-h834-iv1" alt="Imagen cepillo Productos" />
            </Link>
          </div>
          <div className="imagenes-home">
            <Link to="/Residuos" className="imagen-botellas-home">
              <img src="https://lh3.googleusercontent.com/u/0/d/17QuZhVVFXryu9RI2LgI_fdT6Uj78Ray1=w1020-h834-iv1" alt="Imagen reciclaje botellas" />
            </Link>
          </div>
          <div className="imagenes-home">
            <Link to="/productos/categoria/Lavanderia" className="imagen-detergente-home">
              <img src="https://lh3.googleusercontent.com/u/0/d/1Jmp1g97dONz9SsTLA_Rpvzbnc8lpc4FE=w1020-h834-iv1" alt="Imagen detergente Productos" />
            </Link>
          </div>
          <div className="imagenes-home">
            <Link to="/productos/categoria/Baño" className="imagen-paños-home">
              <img src="https://lh3.googleusercontent.com/u/0/d/1YG5sONRbeG6DkD_L1b-aojp-rE7p8Ljo=w1848-h858-iv1" alt="Imagen paños Productos" />
            </Link>
          </div>
          <div className="imagenes-home">
            <Link to="/Login" className="imagen-jardin-home">
              <img src="https://lh3.googleusercontent.com/u/0/d/1JMm2EUKAB2tVDYokMqOsvwoIv15JyShl=w1020-h834-iv1" alt="Imagen jardin " />
            </Link>
          </div>
          <div className="imagenes-home">
            <Link to="/productos/categoria/Cocina" className="imagen-cocina-home">
              <img src="https://lh3.googleusercontent.com/u/0/d/1rxAAtR4ejNKp0z_JLWcBIsw8FKQ9fdtb=w1020-h834-iv1" alt="Imagen detergente cocina Productos" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mision-home">
        <div className="content-imagen-home-mision">
          <img
          src="https://lh3.googleusercontent.com/u/0/d/1A49yjnk0y9Al3n4wlX6bmGh5XQUZjYn1=w1020-h834-iv1"
          alt="Imagen de hogar sustentable"
          />
          </div>
          <div className="mision-home-content">
            <div className="mision-paragraph">
              <h1 className="Info-Home-Mision">Nuestra Misión</h1>
              <p className="mision-info-home">
                Ofrecer a los ciudadanos herramientas y recursos para concientizar
                sobre la reducción de sus consumos energéticos y así poder adoptar
                prácticas más sostenibles en sus hogares a corto y largo plazo.
                </p>
              </div>
              <div className="mision-paragraph">
                <h1 className="Info-Home-Mision">Nuestro Equipo</h1>
                  <p className="mision-info-home">
                    Nuestro equipo de profesionales está dispuesto a dar todo por la
                    causa medioambiental. Promoviendo diversas formas de acercar tu
                    casa a un entorno más eco-friendly.
                  </p>
              </div>
            <div className="mision-paragraph">
              <h1 className="Info-Home-Mision">Nuestra Historia</h1>
              <p className="mision-info-home">
                Nacimos en 2024 como una plataforma web enfocadas en poder dar una
                solución al Objetivo de Desarrollo Sostenible (ODS) de la ONU.
              </p>
            </div>
          </div>
        </div>
      
      <div>
      <h3 className="Parrafo-imagenes-home-abajo">
      Encuentra más inspiración para renovar tu hogar aquí </h3>
      </div>

      <section className="container-home-xxl-2">
      <div className="images-home-2">
          <div className="images-home-container">
            <Link to="/Energias" className="" style={{ color: 'inherit' }}> 
              <img src="https://lh3.googleusercontent.com/u/0/d/1Qp0BSI6p73p1wtA2XiU6W5hQxD75lnSl=w1848-h858-iv1" alt="energía" />
            </Link>
            <Link to="/Eficiencia" className="" style={{ color: 'inherit' }}> 
              <img src="https://lh3.googleusercontent.com/u/0/d/1zWdkLtTyozaN5wQqx6Ikr1nrcjwfCNIM=w1848-h858-iv1" alt="energia" />
            </Link>
          </div>
          <div className="images-home-container2">
            <Link to="/residuos" className="" style={{ color: 'inherit' }}> 
              <img src="https://lh3.googleusercontent.com/u/0/d/1ZdemYeLJSpSOVpsiNeifwghDh_GWT4Yg=w1020-h834-iv1" alt="residuos" />
            </Link>
            <Link to="/productos/Mascotas" className="" style={{ color: 'inherit' }}> 
              <img src="https://lh3.googleusercontent.com/u/0/d/1jjTp3m7ozt3_aFbVILAnwNHGK5c-Jy6P=w1020-h834-iv1" alt="productosmascota" />
            </Link>
          </div>
        </div>
      </section>
    <div className="boton-calculadora-home">
      <img className="imagen-calculadora-home" src="https://lh3.googleusercontent.com/fife/ALs6j_EfcXkhfxqbWhxK132kq09f83wn0FWAnNfmK3Sw9TUIKXIMXa4ZNm9uayWNV1vfpEWbckF-DeDudPoY7X7RmaW-ggon6UOmKJphxqVvX2DL63sHe4CPI5dIUMJrR8XuHIg6AGFUZrz5xf5Zx5jz05dcZ6FABesSAOGUF5dJ-7AD-wRUa5sjDZy4kNAEHRwA6fBq6szzg33nCvRAtTroXCldhQQUcAoGQJMEeZ0FTj5PmJMuywzyBK5B5x_kZJuOB4X61BZAyrMfcju_Nlc1wBESouCtxlcW-cCQ71KWqdOefuSfHCck1Mj7MrVpJ8XqLY-9wwSoP0coqsWJnAxUWnA57AOAU84zTI0qgW4Tyf5oaG2NP2Xf-1RpRX9giyxRXqo9eU2pmc1i2G_Gnpf3Z1dpTmu_wz0l0kdVPS4wXOjFRemIkW0tyrufo0RgzYB7uUHUQ4NBtGLSCzVZsZdSJAtab7VbGVr-bRj4XO9CCTwrYhyZLxtYwzLb2OGwxYseUoNmmDS3z1jJR02wF3mCKgx6VkqcNUVbc9OvL3jYXPXPodHKzDQjKjoPrRC2OF9Mhi6-nK81OygFXTNIGIrW3slWMHtv9H2g5pFt7a5X4BhIk1B9ZGteEb2MKE9hQe_4RqfT10j_GI3SkKYEcQeHvgm-ThBTk53IUa7fU9QtSZ-wuY7TWLlxUSzXXkOz4ZiupCzlwlMTrpKYcw1i7Xu0TVRL0LUuXUONzndj2mEKAWRZxqYRpkXIaOhYiTPDllSQRU9GgQ8UaImU0slUxpFUP49WyigbxG92sRk4M-TnggcMEWhcYgXve1nxYAH3Ph05euhSx4fu6y2W9qcvkOZniZb2oKVR7gxDvExA0_rGKQhDtWzK1a9vpc6_XrlBwVRwRs97hshGXm5NE5pZpwoYE7LdY6OFb6m9TV7TEp8eS8eCAO4hr_xRwzX55uR4o-RrkIZDIvlV2mdlyvo5lV1pKG25GJPQoAwxvajsnzZKy5KH-agoCRV0jwq89e7BF1yxYV_VAu2qQVBID3W76Vn1rof_kcv5oiyfds9Xzh6KPLRJWs2i9QX5j5-Kptamo5-Mhd6WvOKHjBChBY4F4Bz1wHDRxFDN5D1WzHdUnnBmnLhys-cz83UK0WsiPIihKa1u-teIPZZGm4sCP7L7hxCWf3o3fT3uINFHbPTzj2h909nzw0rROB3HUQq-Ypl1SoZ6m_zNg4ri0e0FDQMjiTt2TmUODytcTLywSfKcFdsI19kWVGZacHiXJcF94-KR5Xiu2Kp-TEcpViVxBMvh3lsIQ8RX-G8rspMGEpOx_KDuTPFxw7_WNEQ1bkvwnqNK_LOojlQVWsAABioyWs1P3FAQ6o_G5bYa3u-ALE-AP41N2MFPQObOYYg9UEzjlW0qPc3FkH3DSZkxyR7cDJk7vt-jwJeE9BViLWWsA8DKfk1Mjjyo0nT1wfFcNKHd9-Vf1euboWJl18IsusZGKKt65RRnAVIwK7wFx0XVsfBLoZQne8xEvP0iNmpfzIkZgFHpVCWfDvldxExI1vFckW2tdG_t9zg95QGrTelQbZ3iFwgmBYlcnUTO-JhBsMqSSLMj-iS7PopkYidY_FaOEw1qV7jtgDdtCmDnHXvfz1QnAkGn9AE20J9GXyewawg=w1920-h838" width="100%"/>
    <div className="text-container-home1">
      <h1 className="calculator-home">Calcula tu gasto energético</h1>
      <Link to="/Calculadora"className="button-2-home" >Explóralo acá</Link>
    </div>
  </div>
  </div>
</div>
</>
    );
};

export default Home;
