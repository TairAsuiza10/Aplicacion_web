import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Mapa from "./pages/Mapa";
import Conciencia from "./pages/Conciencia";


function App() {
  return (
    <Router>
      <Navbar />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/conciencia" element={<Conciencia />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
