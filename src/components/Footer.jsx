import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/stylefooter.css'; // Importamos los estilos del footer

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <p className="footer-links">
          <Link className="link-1" to="/">Inicio</Link>
          <Link to="/quienes-somos">Quienes somos</Link>
          <Link to="/toribia-1">Cabaña Toribia I</Link>
          <Link to="/toribia-2">Cabaña Toribia II</Link>
          <Link to="/contacto">Contacto</Link>
        </p>
        <p>Las Toribias &copy; 2024</p>
      </div>

      <div className="footer-right">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
      </div>
    </footer>
  );
};

export default Footer;