import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalogo from "./pages/Explora";
import Mapa from "./pages/Mapa";
import Conciencia from "./pages/Conciencia";
import Explora from "./pages/Explora";

function App() {
  return (
    <Router>
      <Navbar />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explora" element={<Explora />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/conciencia" element={<Conciencia />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
