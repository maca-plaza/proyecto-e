import "./styles.css";
import Header from "../../components/Header";

const Productos = () => {
  const HEADER = [
    {
      titulo: "PRODUCTOS",
      titulo2: "SOSTENIBLES",
      info: "Productos sostenibles tiene una gran variedad y diferentes categorías que puedes visitar",
    },
  ];
  return (
    <>
      <div>
        {HEADER.map((c) => (
          <Header {...c} />
        ))}
      </div>
      <div className="productos">
        <div className="div">
          <div className="overlap">
            <img
              className="image"
              src="https://lh3.googleusercontent.com/fife/ALs6j_G7Ndzll_aU1HIQRuZoACLifidEBc-7l3x8DreTi1yMmvGg9IRtk0K0GUZ3Z0bfXo_xx9z08IfSxhiWGBspeiHpDIZTg5fQXWrQ8Qk93k_KXRmX1asctUlEbmB972cpz0qXzwcSk35KOWoLfpSoRGzRgHuZog8kEgeyBiEk9kMI_jn6m_1EhluyY6QTiWV7ngdpu7NR5iRJjH9NW-CnN5F1y5y0ZaexmiXxAY-frvt0MwS4ywDk52DaDXyMUUFt1UZVQSmPJvVhKekSGptzDqxT7H2K2YDuFtaJte9Ej7PMb5uNRaltqjDJUcq63BtDvUX1vYUDp-fOPln9eOgFTdMAxKrVbKk25xYz9wy2G9JGf3E4BevJ-PUY6AvvxMIEhgSByCp_8hoSHiMsuvHDJooq1K9b0hrGi49heknflwgPpZhXQ1bxoNLG1bScQ-LCMR2vTlkbSt5q0xD5qWjd42h9cwzMrKGr1HaIFd8FAvrmP-pFN-APXEXHtrV4jNBeFig74r230Alj8bX56wJxnGOuacUDhfeIvsyoNanIYbvEeww8tAUi_AF5ZDF9LgrCbTBp76tEcpD9H1fD0bQYUhkOprYNJOLuKD09NGtY4S5LGnmN4oQv35NwmcuCT0wudqQvPYWAAl9abOYn7JHJx1Lk3HqGRgHmNX5H9Ee2gVayOm0XcGqpxUb6E0EP1flkdgSEkLXbTnc6uX8T9NIE5J5Lav7sMzMb2JtiG4tkxFzGdoThmB_VI1WwTNd5_iG-KpL5pxSDZBN_xlFGfj2cbAC9UYQiDZiPy4g6kRjdSMdGnImPNhY4S53_E_QhFcfO86dEr8xl8QRcFuwqOBGX4xGWF86wiw0Acg2tBHw1FA-K5JFn8h6PZ8Yp6VnEUXG75X25_ujU-d6umWSLfnU8Twcebu1AmodmTFjcFO-Rcwr_nRqw7-ON3oC0jonKNKedbCoycINA2Xd4Dz1xwmUoipBuUaro8FPdmtdumlBWRBG9KqOifua10xxYOcvhkIjG4jflmOhDIwdFVr3MqPxXzcDRcdcDmzajmMHPPiXxanmlEuakpFN2cxWkY5x0_asQHD5WuG_iXJ8w1UAhweDkVF2pzlY4RJkYheQFI_MWrYWbVN16b0MMdqMJIbodkOTkbU9EJX3tn7d11AVKhOUhrUEVHMCdAL3v_RTCecFlbCrben9I5WRHUvtrdcGioXxBLGwNnqmrSb7B-ewPYjc3l6A1JUhyIK1LckuMHNLaxR4r6WD2lOCP2wL_OcZUrVXeDjc9FRcHgJbYBYK7pHUEr-fIuq9_KXIxS-uwq26fjzh1IE_kxM1N8QYK7Dn-ID2WvVWQgY2IeaXJCFG2mJaJ5OkjleLZQ0Gc-qu1VZWKh7NvnBWH2u53RW2K3Qj07Oy0oPSHrG-t7qPhlM36bTe2pi7xEFAEii9jNkdQN7D1kuCrlT-31BKWlE_b9Y1aCNM-sXftVgYh2707WQtz5sZW9_CaJHlrHnjsziS3ec7AyaVtD-exAC8s48aGKp0bCN5CAmDxZaW80L9-VikIMou4OGfE_RKAbS76GevM4S-I2LJ_lTvAZ3aVCHM-JNN9Z-xNaDBvX9jAxAwHqS4arw2bsEn4VrSkttZ6eZ1Ll4b4yoM9BCxO43bra9uqwDwCCRgJOSspJwL6Dzt_xWlkkgXB1hqJy0oLcA=w2000-h1288"
            />
            <div className="text-wrapper">PRODUCTOS</div>
            <div className="text-wrapper-2">SOSTENIBLES</div>
          </div>
        </div>
        <div className="overlap-5">
          <div className="text-wrapper-10">Nuestras Categorias</div>
          <div className="frame">
            <div className="frame-2">
              <div className="text-wrapper-11">Cocina</div>
              <img
                className="img"
                src="https://images.unsplash.com/photo-1556037843-347ddff9f4b0?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="frame-3">
              <div className="text-wrapper-12">Baño</div>
              <img
                className="img-2"
                src="https://images.unsplash.com/photo-1616537937163-387d3f079de8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="frame-4">
              <div className="text-wrapper-13">Lavanderia</div>
              <img
                className="unsplash"
                src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="frame-5">
              <div className="text-wrapper-14">Mascotas</div>
              <img
                className="img-2"
                src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="frame-6">
              <div className="text-wrapper-15">Cuidado personal</div>
              <img
                className="img"
                src="https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="frame-7">
              <div className="text-wrapper-16">Papelería</div>
              <img
                className="unsplash-mtnnifryy"
                src="https://images.unsplash.com/photo-1612599316791-451087c7fe15?q=80&w=1648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="frame-8">
              <div className="text-wrapper-17">Muebles</div>
              <img
                className="unsplash-ihwpsjwomc"
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productos;
