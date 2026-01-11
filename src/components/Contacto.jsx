import { useState } from "react";

const mapa1 = "https://www.google.com/maps/d/embed?mid=1scLHVPTD-4yGy2-BxTSUUjRayKeJ6tc&ehbc=2E312F&noprof=1"
const mapa2 = "https://www.google.com/maps/d/embed?mid=1oo0dlM4UWhCpIV1ba3YCOj3hY4TCCgw&hl=es-419&ehbc=2E312F"



const Contacto = () => {
    const [enviado, setEnviado] = useState(false);
    const [mapaActual, setMapaActual] = useState(mapa1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const email = data.get("email");
        const nombre = data.get("nombre");
        const apellido = data.get("apellido");
        const telefono = data.get("phone");

        if (nombre.length > 15) {
            alert("El nombre no puede tener más de 15 caracteres.");
            return;
        }

        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
            alert("El nombre solo debe contener letras.");
            return;
        }

        if (apellido.length > 15) {
            alert("El apellido no puede tener más de 15 caracteres.");
            return;
        }

        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) {
            alert("El apellido solo debe contener letras.");
            return;
        }

        if (!/^\d{3}-\d{4}-\d{4}$/.test(telefono)) {
            alert("El número de teléfono debe tener el formato XXX-XXxX-XXXX.");
            return;
        }



        const dominiosValidos = ["@gmail.com", "@outlook.com", "@hotmail.com", "@yahoo.com"];

        if (!dominiosValidos.some(dominio => email.toLowerCase().endsWith(dominio))) {
            alert("Por favor, utiliza un correo electrónico válido.");
            return;
        }

        try {
            const response = await fetch("https://formspree.io/f/xnjjapko", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setEnviado(true);
                form.reset();
                setTimeout(() => {
                    setEnviado(false);
                }, 3000);
            }
        } catch (error) {
            console.error("Error al enviar:", error);
        }
    };

    const vermapa = (valor) => {
        if (valor === 1) {
            setMapaActual(mapa1);
        } else {
            setMapaActual(mapa2);
        }
    };

    return (
        <>

            <section className="contact section" id="contact">
                <h2 className="section-title" data-heading="Get in Touch">Contactame</h2>

                <div className="contact-container container grid">
                    <div className="contact-content ">
                        <div className="contact-info text-decoration-none">
                            <div className="contact-card">
                                <i className="uil uil-envelope-edit contact-card-icon"></i>
                                <h3 className="contact-card-title">Email</h3>
                                <span className="contact-card-data">user@gmail.com</span>
                                <span className="contact-button">Escribime <i className="uil uil-arrow-right contact-button-icon"></i></span>
                            </div>

                            <div className="contact-card">
                                <i className="uil uil-whatsapp contact-card-icon"></i>
                                <h3 className="contact-card-title">Whatsapp</h3>
                                <span className="contact-card-data">333-333-333</span>
                                <span className="contact-button">Escribime <i className="uil uil-arrow-right contact-button-icon"></i></span>
                            </div>

                            <div className="contact-card">
                                <i className="uil uil-facebook-messenger contact-card-icon"></i>
                                <h3 className="contact-card-title">@lastoribia</h3>
                                <span className="contact-card-data">user.ssss</span>
                                <span className="contact-button">Seguime <i className="uil uil-arrow-right contact-button-icon"></i></span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-content-form">
                        {enviado ? (
                            <div className="contact-form" style={{ textAlign: "center", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>¡Mensaje enviado!</h3>
                                <p>Gracias por contactarnos.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} action="https://formspree.io/f/xnjjapko" method="POST" className="contact-form" id="myForm">
                                <div className="input-container">
                                    <input className="form-control" id="fname" name="nombre" type="text" placeholder="Nombre" />
                                </div>
                                <div className="input-container">
                                    <input id="lname" name="apellido" type="text" placeholder="Apellido" className="form-control" />
                                </div>
                                <div className="input-container">
                                    <input id="email" name="email" type="email" placeholder="E-mail" className="form-control" />
                                </div>

                                <div className="input-container">
                                    <input id="phone" name="phone" type="tel" placeholder="Celular" className="form-control" />
                                </div>

                                <div className="input-container textarea">
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        placeholder="Hola Silvia, tendrias disponible la cabaña para los días ..."
                                        rows="7"
                                    ></textarea>
                                </div>

                                <button type="submit" className="button-contacto">
                                    <i className="uil uil-navigator button-icon"></i>
                                    Enviar mensaje
                                </button>
                            </form>
                        )}
                    </div>
                </div>
                <h3>Como llegar</h3>
                <div className="contact-container container grid">
                    
                    <div className="contact-content ">
                        <p>Elija donde quier llegar apretando el boton correspondiente</p>
                        <button className="btn btn-warning m-2" onClick={() => vermapa(1)}>Las Toribias I</button>
                        <button className="btn btn-warning m-2" onClick={() => vermapa(2)}>Las Toribias II</button>
                    </div>
                    
                    <div className="contact-content ">

                     

                        <iframe
                            src={mapaActual}
                            width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>


        </>
    );
}

export default Contacto;
