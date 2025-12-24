import React from 'react';
import GaleriaCabaña from './GaleriaCabaña';
import fachadaToribia1 from '../imagenes/toribia-1/fachada_T1.webp';
import bañoToribia1 from '../imagenes/Toribia-1/baño-T1.webp';
import cocina2Toribia1 from '../imagenes/Toribia-1/cocina-T1.webp';
import entradaToribia1 from '../imagenes/Toribia-1/entrada-T1.webp';
import dormitorioNiñoToribia1 from '../imagenes/Toribia-1/habitacion-niño-T1.webp';
import dormitorioAdultoToribia1 from '../imagenes/Toribia-1/habitacion-T1.webp';
import livingToribia1 from '../imagenes/Toribia-1/living-T1.webp';

import Wiffi from '../imagenes/iconos/wifi-hover-flicker.gif';
import Pisina from '../imagenes/iconos/swimming-hover-pinch.gif';
import Tv from '../imagenes/iconos/smart-tv-layout.gif';
import aire_acondicionado from '../imagenes/iconos/aireacondicionado.gif';
import Cocina from '../imagenes/iconos/cocina-sin-fondo.gif';
import parrilla from '../imagenes/iconos/parrilla.gif';
import estacionamiento from '../imagenes/iconos/estacion-de-bomberos.gif';

const images = [
  {
    url: fachadaToribia1
  },
  {
    url: bañoToribia1
  },
  {
    url: cocina2Toribia1
  },
  {
    url: entradaToribia1
  },
  {
    url: dormitorioNiñoToribia1
  },
  {
    url: dormitorioAdultoToribia1
  },
  {
    url: livingToribia1
  }
];

const Toribia_1 = () => {
  return (


    <div class="mt-5 pt-5 d-flex flex-column mb-3">
      <div class="p-2">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 text-center">
              <img className="img-toribia" src={fachadaToribia1} alt="Fachada cabaña Toribia 1" />
            </div>
            <div class="text-toribia col-sm-3">
              Disfruta de la tranquilidad y el confort en nuestra segunda cabaña, equipada con todo lo necesario para una estadía inolvidable.
            </div>
            <div class="text-toribia col-sm-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nostrum quo veritatis delectus repellat. Vel veritatis labore deleniti,
              beatae distinctio explicabo hic consequuntur amet! Doloribus soluta,
              facere porro obcaecati culpa nam!

            </div>
            <div>
              <div id="circle5"></div>
            </div>
          </div>
        </div>



        <div class="p-2 mt-4">

          <div class="row">
            <div className='text-toribia-titulo'><h2>¿Que ofrece la cabaña las toribia I ? </h2></div>
            <div class="text-toribia col-sm-6">

              <ul>
                <li><img src={Wiffi} className="theme-colors-second" alt="wiffi" width="50" height="50" /> Wiffi</li>
                <li><img src={Pisina} className="theme-colors-second" alt="Pileta" width="50" height="50" />  Piscina</li>
                <li><img src={Tv} className="theme-colors-second" alt="smart tv" width="50" height="50" />  SmartTV</li>
                <li><img src={aire_acondicionado} className="theme-colors-second" alt="aire acondicionado" width="50" height="50" /> Aire acondicionado</li>
                <li><img src={Cocina} className="theme-colors-second" alt="cocina equipada" width="60" height="60" /> Cocina equipada</li>

                {/*<img src={Tvgif} className="theme-colors-second" alt="WhatsApp" width="50" height="50" />*/}
              </ul>
            </div>
            <div class="text-toribia col-sm-6">
              <ul>
                <li><img src={parrilla} className="theme-colors-second" alt="parilla exterior" width="60" height="60" /> Parrilla y espacio exterior</li>
                <li><img src={estacionamiento} className="theme-colors-second" alt="estacionamiento" width="60" height="60" /> Estacionamiento gratuito en las instalaciones</li>
                <li>Juego de blanqueria</li>
                <li>Sistema alarma de seguridad</li>
                <li>Mobiliario exterior</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-3">
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalServicios">ver 52 servicios</button>
          </div>


          {/* Modal de Servicios */}
          <div className="modal fade" id="modalServicios" tabIndex="-1" aria-labelledby="modalServiciosLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title text-dark" id="modalServiciosLabel">Todos los servicios</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body text-dark">
                  {/* Contenido del modal */}
                  <div className="text-toribia col-sm-9">
                    <div><h5 className="text-dark text-md-start text-start">Entretenimiento</h5> </div>                     
                      <ul>
                        <li className="text-dark text-md-start text-start fs-6">Wiffi</li>
                        <li className="text-dark text-md-start text-start fs-6">Smart TV</li>
                      </ul>
                  </div>
                  <div className="text-toribia col-sm-9">
                    <div><h5 className="text-dark text-md-start text-start">Calefacción y refrigeración</h5> </div>                     
                      <ul>
                        <li className="text-dark text-md-start text-start fs-6">Aire acondicionado frio - calor</li>
                        <li className="text-dark text-md-start text-start fs-6">Estufa a gas</li>
                        <li className="text-dark text-md-start text-start fs-6">Ventiladores portátiles</li>
                        
                      </ul>
                  </div>
                  <div className="text-toribia col-sm-9">
                    <div><h5 className="text-dark text-md-start text-start">Cocina y comedor</h5> </div>                     
                      <ul>
                        <li className="text-dark text-md-start text-start fs-6">Microondas</li>
                        <li className="text-dark text-md-start text-start fs-6">Utensilios básicos de cocina</li>
                        <li className="text-dark text-md-start text-start fs-6">Vajilla y cubiertos</li>
                        <li className="text-dark text-md-start text-start fs-6">Cocina y Horno a gas</li>
                        <li className="text-dark text-md-start text-start fs-6">Pava eléctrica</li>
                        <li className="text-dark text-md-start text-start fs-6">Heladera con frezzer</li>
                        <li className="text-dark text-md-start text-start fs-6">Los huéspedes pueden comer cocinar en este espacio</li>
                      </ul>
                  </div>
                  <div className="text-toribia col-sm-9">
                    <div><h5 className="text-dark text-md-start text-start">Dormitorio</h5> </div>                     
                      <ul>
                        <li className="text-dark text-md-start text-start fs-6">Toallas, sábanas </li>
                        <li className="text-dark text-md-start text-start fs-6">Perchas</li>
                        <li className="text-dark text-md-start text-start fs-6">Almohadas y mantas adicionales</li>
                        <li className="text-dark text-md-start text-start fs-6">Persianas o cortinas blackout</li>
                        <li className="text-dark text-md-start text-start fs-6">Espacio para guardar ropa: placard</li>
                        <li className="text-dark text-md-start text-start fs-6">Mosquitero</li>
                      </ul>
                  </div>
                  <div className="text-toribia col-sm-9">
                    <div><h5 className="text-dark text-md-start text-start">Baño</h5> </div>                     
                      <ul>
                        <li className="text-dark text-md-start text-start fs-6">Agua caliente</li>
                        <li className="text-dark text-md-start text-start fs-6">Ducha exterior</li>
                        <li className="text-dark text-md-start text-start fs-6">Bidé</li>
                        <li className="text-dark text-md-start text-start fs-6">jabón y papel higiénico</li>      
                      </ul>
                  </div> 
                  <div className="text-toribia col-sm-9">
                    <div><h5 className="text-dark text-md-start text-start">Al aire libre</h5> </div>                     
                      <ul>
                        <li className="text-dark text-md-start text-start fs-6">Pileta</li>
                        <li className="text-dark text-md-start text-start fs-6">Zona para comer al aire libre</li>
                        <li className="text-dark text-md-start text-start fs-6">Parrilla privada: a carbón</li>
                        <li className="text-dark text-md-start text-start fs-6">Utensilios para la parrilla</li>
                        <li className="text-dark text-md-start text-start fs-6">Muebles de exterior</li>
                        <li className="text-dark text-md-start text-start fs-6">Reposeras</li>
                        <li className="text-dark text-md-start text-start fs-6">Mobiliario exterior</li>
                        <li className="text-dark text-md-start text-start fs-6">Terraza</li>
                      </ul>
                  </div>
                  <div className="text-toribia col-sm-9">
                    <div><h5 className="text-dark text-md-start text-start">Estacionamiento e instalaciones</h5> </div>                     
                      <ul>
                        <li className="text-dark text-md-start text-start fs-6">Estacionamiento gratis en la propiedad</li>
                        <li className="text-dark text-md-start text-start fs-6"></li>
                        
                      </ul>
                  </div>                  
                  <div className="text-toribia col-sm-9">
                    <div><h5 className="text-dark text-md-start text-start">Servicios</h5> </div>                     
                      <ul>
                        <li className="text-dark text-md-start text-start fs-6">El anfitrión te va a recibir</li>
                        <li className="text-dark text-md-start text-start fs-6">Se permiten mascotas</li>
                        <li className="text-dark text-md-start text-start fs-6">Ténder para ropa</li>
                        
                      </ul>
                  </div>
                  <div className="text-toribia col-sm-9">
                    <div><h5 className="text-dark text-md-start text-start">Seguridad en el hogar</h5> </div>                     
                      <ul>
                        <li className="text-dark text-md-start text-start fs-6">Botiquín</li>
                        <li className="text-dark text-md-start text-start fs-6">Extintor de incendios</li>
                        <li className="text-dark text-md-start text-start fs-6">Alarma de seguridad en el cabaña</li>
                      </ul>
                  </div>
                  <div className="text-toribia col-sm-9">
                    <div><h5 className="text-dark text-md-start text-start">No incluidos</h5> </div>                     
                      <ul>
                        <li className="text-dark text-md-start text-start fs-6">Lavarropas</li>
                        <li className="text-dark text-md-start text-start fs-6">Secador de pelo</li>
                        <li className="text-dark text-md-start text-start fs-6">Chimenea interior</li>
                        <li className="text-dark text-md-start text-start fs-6">Ventilador de techo</li>
                        <li className="text-dark text-md-start text-start fs-6">Sistema alarma de seguridad</li>
                        <li className="text-dark text-md-start text-start fs-6">Mobiliario exterior</li>
                      </ul>
                  </div>

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>


          <div className='carrusel-toribia'>
            <GaleriaCabaña images={images} />

          </div>
        </div>
      </div>
    </div>



  );
};

export default Toribia_1;
