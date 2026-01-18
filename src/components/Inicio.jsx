
import fachadaToribia1 from '../imagenes/toribia-1/fachada_T1.webp';
import piletaParque from '../imagenes/parque/pileta-T1.webp';
import fachadaToribia2 from '../imagenes/toribia-2/fachada-T2.webp';
import arroyo1 from '../imagenes/fotos/arroyo1.webp';
import caminar from '../imagenes/fotos/caminar-merlo.webp';
import merloAtardercer from '../imagenes/fotos/cartelAtardecer_3.png';




const Inicio = () => {
    return (
        <>
            <main className="main d-sm-flex flex-md-column p-2  mb-2">
                <div className="container-ciculo col-auto  ">



                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={caminar} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={arroyo1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={merloAtardercer} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>


                        
                    </div>


                 
                 
                    <div className="anuncio border border-dark border-5" >
                        <h5 className="text-left ">Merlo San Luis</h5>
                        <p className="text-left">Tu combinación ideal de naturaleza, tranquilidad y actividades al aire libre. ¡Prepará las valijas y animate! </p>
                        <div className="text-center">
                            <button type="button" className="btn btn-outline-warning border rounded-pill p-2 btn-blink">Reserva tu lugar</button>
                        </div>
                    </div>
               
                </div>



                <div className="container-card  d-flex justify-content-evenly ">
                    <div className="card">
                        <h2 className="title">
                            <a href="#">Toribia I</a>
                        </h2>
                        <p className="text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae. Lorem.
                        </p>
                        <div className="imgBox">
                            <img src={fachadaToribia1} alt="Fachada canbaña toribia 1" />
                            <div className="img-blur">
                                <a href="/toribia-1">Visitar </a>
                            </div>
                        </div>

                    </div>
                    <div className="card">
                        <h2 className="title">
                            <a href="#">Jardin</a>
                        </h2>
                        <p className="text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae. Lorem.
                        </p>
                        <div className="imgBox">
                            <img src={piletaParque} alt="Pileta jardin" />
                            <div className="img-blur">
                                <a href="#">Visitar </a>
                            </div>
                        </div>

                    </div>

                    <div className="card">
                        <h2 className="title">
                            <a href="#">Toribia II </a>
                        </h2>
                        <div className="bg-gray-500"></div>
                        <p className="text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repudiandae. Lorem.
                        </p>
                        <div className="imgBox">
                            <img src={fachadaToribia2} alt="Fachada canbaña toribia 2" />
                            <div className="img-blur">
                                <a href="/toribia-2">Visitar </a>
                            </div>
                        </div>

                    </div>

                </div>
            </main>


        </>
    );
};

export default Inicio;      
