import telefonoGif from '../image/call-phone-hover-phone-ring.gif';
import watsappGif from '../image/whatsapp-hover-pinch.gif';


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Centramos el brand con mx-auto */}
                    <a className="navbar-brand mx-auto " href="/"> <h1 class="parisienne-regular tex-dark text-aling-center ms-3 mt-3"> Las Toribias </h1></a>
                    
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
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Quienes somos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cabaña Toribia I</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cabaña Toribia II</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
