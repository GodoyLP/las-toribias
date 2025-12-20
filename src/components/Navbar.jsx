import { Link, NavLink } from 'react-router-dom';
import telefonoGif from '../imagenes/iconos/call-phone-hover-phone-ring.gif';
import watsappGif from '../imagenes/iconos/whatsapp-hover-pinch.gif';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <h1 className="parisienne-regular text-dark">Las Toribias</h1>
                    </Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
 
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* Usamos mx-auto para centrar los links */}
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/" end>Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/quienes-somos">Quienes somos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/toribia-1">Cabaña Toribia I</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/toribia-2">Cabaña Toribia II</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
                            </li>
                        </ul>

                        {/* Contenedor para los íconos y el teléfono. Se alinea a la derecha. */}
                        <div className="d-flex flex-row align-items-center">
                            <a className="text-decoration-none text-dark" href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">
                                <img src={watsappGif} className="theme-colors-second" alt="WhatsApp" width="50" height="50"/>
                            </a>
                            <a className="text-decoration-none text-dark ms-2" href="tel:+541112345678">
                                <img src={telefonoGif} className="theme-colors-second" alt="Llamar por teléfono" width="35" height="35"/>
                            </a>
                            <a href="tel:+541112345678" className="text-decoration-none text-dark ms-2 d-none d-lg-block">
                                +54 11 1234 5678
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Navbar;
