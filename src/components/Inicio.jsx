

import React from 'react';


const Inicio = () => {
    return (
        <>
            <main className="main d-sm-flex flex-md-column p-2 bg-secondary mb-2">
                <div className="container-ciculo col-auto  ">

                    <div className="ciculo-foto" ></div>
                    <div  id="circle1"></div> {/* Este div parece no tener un pseudo-elemento ::after definido en el CSS, pero lo mantengo por si lo usas más adelante */}
                    <div id="circle2"></div> {/* Este es el div que tiene el ::after para el círculo azul */}
                    <div className="anuncio border border-dark border-5" >
                        <h5 className="text-left ">Merlo San Luis</h5>
                        <p className="text-left">Tu combinación ideal de naturaleza, tranquilidad y actividades al aire libre. ¡Prepará las valijas y animate!". </p>
                        <a href="#"
                            className="text-right ">Reserva tu lugar</a>
                    </div>
                    <div id="circle3"></div>
                    <div id="circle4"></div>
                </div>

                <div className="anuncio-baner border border-dark border-5" >
                    <h5 className="text-center p-2">Merlo San Luis</h5>
                    <p className="text-left p-2">Tu combinación ideal de naturaleza, tranquilidad y actividades al aire libre. ¡Prepará las valijas y animate!". </p>
                    <div className="text-center p-2"> {/* Contenedor para centrar el botón */}
                        <button className="btn btn-primary border rounded-pill p-2">Reserva tu lugar</button>
                    </div>
                </div>

                <div className="container-card  d-flex justify-content-evenly ">


                    <div class="card">
                        <h2 class="title">
                            <a href="#">New York</a>
                        </h2>
                        <p class="text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae. Lorem.
                        </p>
                        <div class="imgBox">
                            <img src="https://images.unsplash.com/photo-1473167052083-3d31fa1f6776?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQwNzU4ODl8&ixlib=rb-4.0.3&q=85" alt="New York Photo" />
                            <div class="img-blur">
                                <a href="#">Visitar </a>
                            </div>
                        </div>

                    </div>
                    <div class="card">
                        <h2 class="title">
                            <a href="#">Tokyo</a>
                        </h2>
                        <p class="text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae. Lorem.
                        </p>
                        <div class="imgBox">
                            <img src="https://images.unsplash.com/photo-1604604994333-f1b0e9471186?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQwNzU5NzR8&ixlib=rb-4.0.3&q=85" alt="New York Photo" />
                            <div class="img-blur">
                                <a href="#">Visitar </a>
                            </div>
                        </div>

                    </div>

                    <div class="card">
                        <h2 class="title">
                            <a href="#">Tokyo</a>
                        </h2>
                        <p class="text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae. Lorem.
                        </p>
                        <div class="imgBox">
                            <img src="https://images.unsplash.com/photo-1604604994333-f1b0e9471186?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQwNzU5NzR8&ixlib=rb-4.0.3&q=85" alt="New York Photo" />
                            <div class="img-blur">
                                <a href="#">Visitar </a>
                            </div>
                        </div>

                    </div>

                </div>
            </main>


        </>
    );
};

export default Inicio;      
