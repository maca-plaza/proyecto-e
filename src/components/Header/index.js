import "../Header/styles.css";

const Header = ({ titulo, titulo2, info }) => {
  return (
    <div className="header">
      <div className="titulo">{titulo}</div>
      <div className="titulo2">{titulo2}</div>
      <div className="info">{info}</div>
    </div>
  );
};
export default Header;
