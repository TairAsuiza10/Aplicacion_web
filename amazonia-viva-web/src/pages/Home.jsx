import React, { useState } from "react";
import fondoImg from "../assets/images/fondo.jpg";
import img2 from "../assets/images/img2.jpg";

function Home() {
  const [imagenActual, setImagenActual] = useState(fondoImg);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-700 p-10 flex justify-center items-center">
      
      {/* Contenedor principal */}
      
      <div className="flex flex-col md:flex-row items-start gap-10 max-w-7xl w-full text-white">
                           5 

        {/* Imagen a la izquierda */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-green-600">
            <img
              src={imagenActual}
              alt="Amazonía"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Botón de cambiar imagen */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() =>
                setImagenActual(imagenActual === fondoImg ? img2 : fondoImg)
              }
              className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition"
            >
              🔄 Cambiar imagen
            </button>
          </div>
        </div>

        {/* Información a la derecha */}
        <div className="md:w-1/2 flex flex-col text-left space-y-6">
          <h2 className="text-4xl font-extrabold text-green-100 mb-4 drop-shadow-lg">
            Bienvenido a Amazonía Viva 🌿
          </h2>

          {/* Bloques translúcidos */}
          <div className="space-y-4">
            <div className="bg-green-950/70 p-6 rounded-2xl shadow-lg border-l-4 border-green-400">
              <p className="text-gray-200">
                Explora el fascinante mundo de la Amazonía: descubre su diversidad de especies, 
                navega en un mapa interactivo y aprende cómo cuidar nuestro planeta.
              </p>
            </div>
            <div className="bg-green-950/70 p-6 rounded-2xl shadow-lg border-l-4 border-green-400">
              <p className="text-gray-200">
                <strong>Amazonía Viva</strong> resalta la importancia de la Amazonía, considerada el 
                <em> pulmón del planeta</em>, mostrando su riqueza natural y cultural.
              </p>
            </div>
            <div className="bg-green-950/70 p-6 rounded-2xl shadow-lg border-l-4 border-green-400">
              <p className="text-gray-200">📚 Descubre plantas y animales únicos de la región amazónica.</p>
            </div>
            <div className="bg-green-950/70 p-6 rounded-2xl shadow-lg border-l-4 border-green-400">
              <p className="text-gray-200">🗺️ Explora mapas interactivos para conocer su geografía y territorios.</p>
            </div>
            <div className="bg-green-950/70 p-6 rounded-2xl shadow-lg border-l-4 border-green-400">
              <p className="text-gray-200">🌍 Aprende sobre conservación y el impacto de nuestras acciones en el planeta.</p>
            </div>
            <div className="bg-green-950/70 p-6 rounded-2xl shadow-lg border-l-4 border-green-400">
              <p className="text-gray-200">🤝 Promueve la conciencia ambiental para cuidar este tesoro natural.</p>
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
    </div>
  );
}

export default Home;
