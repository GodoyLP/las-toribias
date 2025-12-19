import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx"
import Inicio from "./components/Inicio.jsx"
import Footer from "./components/Footer.jsx"
import Toribia_1 from "./components/Toribia_1.jsx"
import Toribia_2 from "./components/Toribia_2.jsx"
import QuienesSomos from "./components/QuienesSomos.jsx"
import Contacto from "./components/Contacto.jsx"
import './App.css'

function App() {
  return (
    
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/toribia-1" element={<Toribia_1 />} />
          <Route path="/toribia-2" element={<Toribia_2 />} />
          {/* Rutas provisionales. Deberás crear estos componentes. */}
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contacto" element={<Contacto/>} />
        </Routes>
        <Footer />
      </>
      );
}

      export default App;