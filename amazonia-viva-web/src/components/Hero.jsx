import "./Hero.css";
import { Link } from "react-router-dom";
function Hero() {
  return (

    <section className="hero">
      <div className="hero-content">
        <h1>Bienvenido a la Amazonía Viva</h1>
        <p>Descubre la biodiversidad y protege nuestra selva</p>
      
        <Link to="/catalogo" className="hero-btn">Explorar biodiversidad</Link>
      </div>
    </section>

    
  );
}

export default Hero;
