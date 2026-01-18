import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import telefonoGif from '../imagenes/iconos/gif/call-phone-hover-phone-ring.gif';


const Navbar = () => {
    const handleCall = () => {
        Swal.fire({
            title: "¿Deseas llamar por teléfono?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#F2B705",
            cancelButtonColor: "#d33",
            confirmButtonText: "Llamar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "tel:+54-11-6291-3773";
            }
        });
    };

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
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-nowrap">
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
                                <NavLink className="nav-link" to="/preguntas-frecuentes">Preguntas Frecuentes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
                            </li>
                        </ul>

                        {/* Contenedor para los íconos y el teléfono. Se alinea a la derecha. */}
                        <div className="d-flex flex-row align-items-center">

                            <button className="telefono btn p-0 border-0 bg-transparent ms-2" onClick={handleCall}>
                                <img src={telefonoGif} className="theme-colors-second" alt="Llamar por teléfono" width="35" height="35" />
                            </button>
                            <button className="telefono btn p-0 border-0 bg-transparent text-decoration-none text-dark ms-2 d-none d-lg-block" onClick={handleCall}>
                                +54 11 6291-3773
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Navbar;
