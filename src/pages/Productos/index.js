import "./styles.css";
import Header from "../../components/Header";
import { Link, Outlet } from "react-router-dom";

const Productos = () => {
  const HEADER = [
    {
      titulo: "PRODUCTOS",
      titulo2: "SOSTENIBLES",
      info: "Los productos sostenibles son aquellos diseñados, fabricados y distribuidos de manera que minimizan su impacto negativo en el medio ambiente y promueven la responsabilidad social, estos productos buscan equilibrar las necesidades económicas, ambientales y sociales, promoviendo un futuro más sostenible y justo para todos. En esta página le mostraremos una gran variedad de categorías que pueden visitar.",
    },
  ];

  return (
    <>
      <div className="productos">
        <div className="div">
          <div>
            {HEADER.map((c) => (
              <Header {...HEADER} />
            ))}
          </div>
        </div>
        <div className="overlap-5">
          <div className="text-wrapper-10">Nuestras Categorias</div>
          <div className="frame">
            <div className="frame-2">
              <div className="text-wrapper-11">
                <Link to="/productos/categoria/Cocina">Cocina</Link>
              </div>
              <img
                className="img"
                src="https://images.unsplash.com/photo-1556037843-347ddff9f4b0?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cocina"
              />
            </div>
            <div className="frame-3">
              <div className="text-wrapper-12">
                <Link to="/productos/categoria/Baño">Baño</Link>
              </div>
              <img
                className="img-2"
                src="https://images.unsplash.com/photo-1616537937163-387d3f079de8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Baño"
              />
            </div>
            <div className="frame-4">
              <div className="text-wrapper-13">
                <Link to="/productos/categoria/Lavanderia">Lavanderia</Link>
              </div>
              <img
                className="unsplash"
                src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Lavanderia"
              />
            </div>
            <div className="frame-5">
              <div className="text-wrapper-14">
                <Link to="/productos/categoria/Mascotas">Mascotas</Link>
              </div>
              <img
                className="img-2"
                src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mascotas"
              />
            </div>
            <div className="frame-6">
              <div className="text-wrapper-15">
                <Link to="/productos/categoria/Cuidado personal">Cuidado personal</Link>
              </div>
              <img
                className="img"
                src="https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cuidado personal"
              />
            </div>
            <div className="frame-7">
              <div className="text-wrapper-16">
                <Link to="/productos/categoria/Papeleria">Papelería</Link>
              </div>
              <img
                className="unsplash-mtnnifryy"
                src="https://images.unsplash.com/photo-1612599316791-451087c7fe15?q=80&w=1648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Papelería"
              />
            </div>
            <div className="frame-8">
              <div className="text-wrapper-17">
                <Link to="/productos/categoria/Muebles">Muebles</Link>
              </div>
              <img
                className="unsplash-ihwpsjwomc"
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Muebles"
              />
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Productos;
