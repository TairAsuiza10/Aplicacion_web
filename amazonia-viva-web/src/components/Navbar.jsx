import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"; // tu logo generado

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Amazonía Viva" />
        </div>

        {/* Links */}
        <ul className="navbar-links">
          <li><Link to="/">Inicio</Link></li>
        <li><Link to="/explora">Explora</Link></li>
        <li><Link to="/mapa">Mapa</Link></li>
        <li><Link to="/conciencia">Conciencia</Link></li>
        </ul>
      </div>
    </nav>
  );
}

