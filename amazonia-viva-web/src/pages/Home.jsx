import { useState } from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import Hero from "../components/Hero";

function Home() {
  const [imagenActual, setImagenActual] = useState(img1);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-700 p-10 flex justify-center items-center">

      <Hero />
      {/* Contenedor principal */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Columna izquierda → Galería de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <img src={img1} alt="Amazonía 1" className="w-full h-64 rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform duration-500" />
          <img src={img2} alt="Amazonía 2" className="w-full h-64 rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform duration-500" />
          <img src={img3} alt="Amazonía 3" className="w-full h-64 rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform duration-500" />
          <img src={img4} alt="Amazonía 4" className="w-full h-64 rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Información a la derecha */}
      <div className="flex flex-col items-center w-full">

        {/* Solo el título centrado */}
        <div className="flex justify-center items-center min-h-screen">
          <h2 className="text-6xl md:text-7xl font-extrabold text-green-100 mb-6 drop-shadow-lg animate-pulse text-center">
            Bienvenido a Amazonía Viva 🌿
          </h2>
        </div>

        {/* Bloques con más diseño */}
        <div className="space-y-6">
          <div className="bg-white/5 p-5 rounded-2xl shadow-lg border border-green-500/40 hover:scale-[1.02] transition-transform duration-300">
            <span className="text-green-100 text-lg">
              🌱 Explora el fascinante mundo de la Amazonía: descubre su diversidad de especies,
              navega en un mapa interactivo y aprende cómo cuidar nuestro planeta.
            </span>
          </div>

          <div className="bg-white/5 p-5 rounded-2xl shadow-lg border border-green-500/40 hover:scale-[1.02] transition-transform duration-300">
            <span className="text-green-100 text-lg">
              🌳 <strong>Amazonía Viva</strong> resalta la importancia de la Amazonía, considerada el
              <em> pulmón del planeta</em>, mostrando su riqueza natural y cultural.
            </span>
          </div>

          <div className="bg-white/5 p-5 rounded-2xl shadow-lg border border-green-500/40 hover:scale-[1.02] transition-transform duration-300">
            <span className="text-green-100 text-lg">
              📚 Descubre plantas y animales únicos de la región amazónica.
            </span>
          </div>

          <div className="bg-white/5 p-5 rounded-2xl shadow-lg border border-green-500/40 hover:scale-[1.02] transition-transform duration-300">
            <span className="text-green-100 text-lg">
              🗺️ Explora mapas interactivos para conocer su geografía y territorios.
            </span>
          </div>

          <div className="bg-white/5 p-5 rounded-2xl shadow-lg border border-green-500/40 hover:scale-[1.02] transition-transform duration-300">
            <span className="text-green-100 text-lg">
              🌍 Aprende sobre conservación y el impacto de nuestras acciones en el planeta.
            </span>
          </div>

          <div className="bg-white/5 p-5 rounded-2xl shadow-lg border border-green-500/40 hover:scale-[1.02] transition-transform duration-300">
            <span className="text-green-100 text-lg">
              🤝 Promueve la conciencia ambiental para cuidar este tesoro natural.
            </span>
          </div>
        </div>

        {/* Botón de exploración */}
        <div className="mt-6">
          <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-xl shadow-md hover:bg-green-400 transition">
            🌱 Comienza tu exploración
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
