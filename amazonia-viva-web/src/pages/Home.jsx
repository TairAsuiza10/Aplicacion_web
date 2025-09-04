import { useState } from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import Hero from "../components/Hero";

function Home() {
  const [imagenActual, setImagenActual] = useState(img1);

  return (
    <div className="relative min-h-screen w-screen bg-gradient-to-b from-green-900 via-green-800 to-green-700">

      <Hero />

      {/* Contenedor general: dos columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto p-10">

        {/* Columna izquierda → Galería */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {[img1, img2, img3, img4].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Amazonía ${idx + 1}`}
              className="w-full h-64 rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform duration-500"
            />
          ))}
        </div>

        {/* Columna derecha → Información */}
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Título */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-green-100 drop-shadow-lg animate-pulse">
            Bienvenido a Amazonía Viva 🌿
          </h2>

          {/* Bloques de información */}
          <div className="space-y-4 w-full">
            {[
              "🌱 Explora el fascinante mundo de la Amazonía: descubre su diversidad de especies, navega en un mapa interactivo y aprende cómo cuidar nuestro planeta.",
              "🌳 Amazonía Viva resalta la importancia de la Amazonía, considerada el pulmón del planeta, mostrando su riqueza natural y cultural.",
              "📚 Descubre plantas y animales únicos de la región amazónica.",
              "🗺️ Explora mapas interactivos para conocer su geografía y territorios.",
              "🌍 Aprende sobre conservación y el impacto de nuestras acciones en el planeta.",
              "🤝 Promueve la conciencia ambiental para cuidar este tesoro natural."
            ].map((text, idx) => (
              <div
                key={idx}
                className="bg-white/5 p-5 rounded-2xl shadow-lg border border-green-500/40 hover:scale-[1.02] transition-transform duration-300"
              >
                <span className="text-green-100 text-lg">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
