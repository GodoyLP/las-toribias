import { Link } from 'react-router-dom';
import telefonoGif from '../image/call-phone-hover-phone-ring.gif';
import watsappGif from '../image/whatsapp-hover-pinch.gif';


const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link className="navbar-brand mx-auto" to="/">
                        <h1 className="parisienne-regular text-dark text-center ms-3 mt-3">Las Toribias</h1>
                    </Link>
                    
                    
                    {/* Contenedor para los íconos y el teléfono. Se centra en móvil y se alinea a la derecha en desktop. */}
                    <div className="d-flex flex-row align-items-center ms-auto ms-lg-0 order-lg-3">
                        <a className="text-decoration-none text-dark" href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">
                            <img src={watsappGif} className="theme-colors-second" alt="WhatsApp" width="60" height="60"/>
                        </a>
                        <a className="text-decoration-none text-dark" href="tel:+541112345678">
                            <img src={telefonoGif} className="theme-colors-second" alt="Llamar por teléfono" width="40" height="40"/>
                        </a>
                        <a href="tel:+541112345678" className="text-decoration-none text-dark ms-lg-2 d-none d-sm-block">
                            +54 11 1234 5678
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* Usamos me-auto para alinear los links a la izquierda en pantallas grandes (lg) */}
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/quienes-somos">Quienes somos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/toribia-1">Cabaña Toribia I</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/toribia-2">Cabaña Toribia II</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
