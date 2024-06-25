import "./styles.css";
const Tarjeta = ({ Link, url, name }) => {
  return (
    <div className="imagenes-home">
    <Link to= {Link} className="imagen-cuidado-home"> 
              <img src={url} alt={name} />
            </Link>
          </div>
  );
};

export default Tarjeta;
