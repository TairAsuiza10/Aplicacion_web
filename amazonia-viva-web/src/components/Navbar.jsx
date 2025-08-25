import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🌿 Amazonía Viva</div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <li><Link to="/mapa">Mapa</Link></li>
        <li><Link to="/conciencia">Conciencia</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

