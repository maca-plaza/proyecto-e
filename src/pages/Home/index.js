import { Link, Outlet } from "react-router-dom";
import ReactDOM from "react-dom";
import "./styles.css"

const Home = () => {
    return (
      <>
      <div>
      <body>
      <div className="Home">
        <main>
          <div className="contenedor-home">
            <img
              className="image-home" src="https://lh3.googleusercontent.com/u/0/d/1wzkn8Frt9jUyLkRbqY6eNKsjf573ACbg=w1848-h858-iv1" alt="https://lh3.googleusercontent.com/u/0/d/1Qeo7UkQvuBDkC3nkcg3XcBJih54IWTow=w1848-h858-iv1"
              /> 
          </div>
        </main>
        
        <div className="todosaber-home">
          <div className="home-encontrar">
          <p>Aquí encontrarás todo lo que necesita saber para tener un hogar más sustentable</p>
          </div>
          <div className="boton-Home">
          <button className="boton-home-productos">
            <Link to="/productos" className="click"style={{ color: 'inherit' }}>¡A un solo CLICK!</Link>
          </button>
          </div>
        </div>

        <section className="container-xxl-home">
        <div className="images-home">
          <div className="imagenes-home">
            <Link to="" className="boton-favs-home" style={{ color: 'inherit' }}> 
              <img src="https://lh3.googleusercontent.com/u/0/d/1E31DZ7jn1aJJH1m95jOcjUqRavYZMPQx=w1020-h834-iv1" alt="Imagen 1" />
            </Link>
          </div>
          <div className="imagenes-home">
            <Link to="" className="">
              <img src="https://lh3.googleusercontent.com/u/0/d/17QuZhVVFXryu9RI2LgI_fdT6Uj78Ray1=w1020-h834-iv1" alt="Imagen 2" />
            </Link>
          </div>
          <div className="imagenes-home">
            <Link to="" className="">
              <img src="https://lh3.googleusercontent.com/u/0/d/1Jmp1g97dONz9SsTLA_Rpvzbnc8lpc4FE=w1020-h834-iv1" alt="Imagen 3" />
            </Link>
          </div>
          <div className="imagenes-home">
            <Link to="" className="">
              <img src="https://lh3.googleusercontent.com/u/0/d/1FJKPZucmLDgGoAKhd3x82cqoMZNQ8Efk=w1020-h834-iv1" alt="Imagen 4" />
            </Link>
          </div>
          <div className="imagenes-home">
            <Link to="" className="">
              <img src="https://lh3.googleusercontent.com/u/0/d/1_twNE5CrVJDnfLFhYVvmea4Zuz8Tfucq=w1020-h834-iv1" alt="Imagen 5" />
            </Link>
          </div>
          <div className="imagenes-home">
            <Link to="" className="">
              <img src="https://lh3.googleusercontent.com/u/0/d/1hatqIhazIV3aBO_bYMUoIj9IAH6H5eI7=w1020-h834-iv1" alt="Imagen 6" />
            </Link>
          </div>
        </div>
      </section>

        <div className="mision">
          <img className="image-home-mision" src="https://lh3.googleusercontent.com/u/0/d/14A9j2ABOzp4KabDusRk68aIDtB0O0DY8=w1020-h834-iv1"/>
          <div className="text-container-mision">
            <h1 className="titulomision">Nuestra Misión</h1>
            <p className="textomision">
              Ofrecer a los ciudadanos herramientas y recursos para concientizar
              sobre la reducción de sus consumos energéticos y así poder adoptar
              prácticas más sostenibles en sus hogares a corto y largo plazo.
            </p>
            <h1 className="titulomision1">Nuestro Equipo</h1>
            <p className="textomision1">
              Nuestro equipo de profesionales está dispuesto a dar todo por la
              causa medioambiental. Promoviendo diversas formas de acercar tu
              casa a un entorno más eco-friendly.
            </p>
            <h1 className="titulomision2">Nuestra Historia</h1>
            <p className="textomision2">
              Nacimos en 2024 como una plataforma web enfocadas en poder dar una
              solución al Objetivo de Desarrollo Sostenible (ODS) de la ONU.
            </p>
          </div>
        </div>

      <section className="container-home-xxl-2">
      <div className="images-home-2">
          <div className="images-home-container">
            <Link to="/Energias" className="" style={{ color: 'inherit' }}> 
              <img src="https://lh3.googleusercontent.com/u/0/d/1Qp0BSI6p73p1wtA2XiU6W5hQxD75lnSl=w1848-h858-iv1" alt="" />
            </Link>
            <Link to="" className="" style={{ color: 'inherit' }}> 
              <img src="https://lh3.googleusercontent.com/u/0/d/1FETp8FrApInge-2d0vuvwNv-BuMNpvuD=w1020-h834-iv1" alt="" />
            </Link>
          </div>
          <div className="images-home-container2">
            <Link to="/Residuos" className="" style={{ color: 'inherit' }}> 
              <img src="https://lh3.googleusercontent.com/u/0/d/1ZdemYeLJSpSOVpsiNeifwghDh_GWT4Yg=w1020-h834-iv1" alt="" />
            </Link>
            <Link to="/Mascotas" className="" style={{ color: 'inherit' }}> 
              <img src="https://lh3.googleusercontent.com/u/0/d/1jjTp3m7ozt3_aFbVILAnwNHGK5c-Jy6P=w1020-h834-iv1" alt="" />
            </Link>
          </div>
        </div>
      </section>
        
        
  <div className="boton-calculadora-home">
    <img className="imagen-calculadora-home" src="https://lh3.googleusercontent.com/fife/ALs6j_EfcXkhfxqbWhxK132kq09f83wn0FWAnNfmK3Sw9TUIKXIMXa4ZNm9uayWNV1vfpEWbckF-DeDudPoY7X7RmaW-ggon6UOmKJphxqVvX2DL63sHe4CPI5dIUMJrR8XuHIg6AGFUZrz5xf5Zx5jz05dcZ6FABesSAOGUF5dJ-7AD-wRUa5sjDZy4kNAEHRwA6fBq6szzg33nCvRAtTroXCldhQQUcAoGQJMEeZ0FTj5PmJMuywzyBK5B5x_kZJuOB4X61BZAyrMfcju_Nlc1wBESouCtxlcW-cCQ71KWqdOefuSfHCck1Mj7MrVpJ8XqLY-9wwSoP0coqsWJnAxUWnA57AOAU84zTI0qgW4Tyf5oaG2NP2Xf-1RpRX9giyxRXqo9eU2pmc1i2G_Gnpf3Z1dpTmu_wz0l0kdVPS4wXOjFRemIkW0tyrufo0RgzYB7uUHUQ4NBtGLSCzVZsZdSJAtab7VbGVr-bRj4XO9CCTwrYhyZLxtYwzLb2OGwxYseUoNmmDS3z1jJR02wF3mCKgx6VkqcNUVbc9OvL3jYXPXPodHKzDQjKjoPrRC2OF9Mhi6-nK81OygFXTNIGIrW3slWMHtv9H2g5pFt7a5X4BhIk1B9ZGteEb2MKE9hQe_4RqfT10j_GI3SkKYEcQeHvgm-ThBTk53IUa7fU9QtSZ-wuY7TWLlxUSzXXkOz4ZiupCzlwlMTrpKYcw1i7Xu0TVRL0LUuXUONzndj2mEKAWRZxqYRpkXIaOhYiTPDllSQRU9GgQ8UaImU0slUxpFUP49WyigbxG92sRk4M-TnggcMEWhcYgXve1nxYAH3Ph05euhSx4fu6y2W9qcvkOZniZb2oKVR7gxDvExA0_rGKQhDtWzK1a9vpc6_XrlBwVRwRs97hshGXm5NE5pZpwoYE7LdY6OFb6m9TV7TEp8eS8eCAO4hr_xRwzX55uR4o-RrkIZDIvlV2mdlyvo5lV1pKG25GJPQoAwxvajsnzZKy5KH-agoCRV0jwq89e7BF1yxYV_VAu2qQVBID3W76Vn1rof_kcv5oiyfds9Xzh6KPLRJWs2i9QX5j5-Kptamo5-Mhd6WvOKHjBChBY4F4Bz1wHDRxFDN5D1WzHdUnnBmnLhys-cz83UK0WsiPIihKa1u-teIPZZGm4sCP7L7hxCWf3o3fT3uINFHbPTzj2h909nzw0rROB3HUQq-Ypl1SoZ6m_zNg4ri0e0FDQMjiTt2TmUODytcTLywSfKcFdsI19kWVGZacHiXJcF94-KR5Xiu2Kp-TEcpViVxBMvh3lsIQ8RX-G8rspMGEpOx_KDuTPFxw7_WNEQ1bkvwnqNK_LOojlQVWsAABioyWs1P3FAQ6o_G5bYa3u-ALE-AP41N2MFPQObOYYg9UEzjlW0qPc3FkH3DSZkxyR7cDJk7vt-jwJeE9BViLWWsA8DKfk1Mjjyo0nT1wfFcNKHd9-Vf1euboWJl18IsusZGKKt65RRnAVIwK7wFx0XVsfBLoZQne8xEvP0iNmpfzIkZgFHpVCWfDvldxExI1vFckW2tdG_t9zg95QGrTelQbZ3iFwgmBYlcnUTO-JhBsMqSSLMj-iS7PopkYidY_FaOEw1qV7jtgDdtCmDnHXvfz1QnAkGn9AE20J9GXyewawg=w1920-h838" width="100%"/>
    <div className="text-container-home1">
      <h1 className="calculator-home">Calcula tu gasto energético</h1>
      <Link to="/Calculadora"className="button-2-home" >Aqui</Link>
    </div>
  </div>
  </div>
</body>
</div>
      </>
    );
};

export default Home;
