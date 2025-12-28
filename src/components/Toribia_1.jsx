import React from 'react';
import GaleriaCabaña from './GaleriaCabaña';
import fachadaToribia1 from '../imagenes/toribia-1/fachada_T1.webp';
import bañoToribia1 from '../imagenes/Toribia-1/baño-T1.webp';
import cocina2Toribia1 from '../imagenes/Toribia-1/cocina-T1.webp';
import entradaToribia1 from '../imagenes/Toribia-1/entrada-T1.webp';
import dormitorioNiñoToribia1 from '../imagenes/Toribia-1/habitacion-niño-T1.webp';
import dormitorioAdultoToribia1 from '../imagenes/Toribia-1/habitacion-T1.webp';
import livingToribia1 from '../imagenes/Toribia-1/living-T1.webp';

import Wiffi from '../imagenes/iconos/gif/wifi-hover-flicker.gif';
import Pisina from '../imagenes/iconos/gif/swimming-hover-pinch.gif';
import Tv from '../imagenes/iconos/gif/smart-tv-layout.gif';
import aire_acondicionado from '../imagenes/iconos/gif/aireacondicionado.gif';
import Cocina from '../imagenes/iconos/gif/cocina-sin-fondo.gif';
import parrilla from '../imagenes/iconos/gif/parrilla.gif';
import estacionamiento from '../imagenes/iconos/gif/garage_blanco.gif';
import toalla from '../imagenes/iconos/gif/toallas-toallon.gif';
import alarma from '../imagenes/iconos/gif/alarma_blanca.gif';
import silla_jardin from '../imagenes/iconos/gif/silla_jardin.gif';

import wifiPNG from '../imagenes/iconos/png/wifi.png';
import tvPNG from '../imagenes/iconos/png/television-retro.png';
import comedroPNG from '../imagenes/iconos/png/comedor.png';
import congeladorPNG from '../imagenes/iconos/png/congelador.png';
import hornoPNG from '../imagenes/iconos/png/horno.png';
import juegococinaPNG from '../imagenes/iconos/png/juego-de-cocina.png';
import airePNG from '../imagenes/iconos/png/aire-acondicionado.png';
import quemadorPNG from '../imagenes/iconos/png/quemador-de-fuego.png';
import ventilador_portatilPNG from '../imagenes/iconos/png/ventilador_electrico.png';
import MicroondasPNG from '../imagenes/iconos/png/microonda.png';
import cubiertosPNG from '../imagenes/iconos/png/cubiertos.png';
import pavaElectricaPNG from '../imagenes/iconos/png/pava.png';
import toallaPNG from '../imagenes/iconos/png/toalla.png';
import sabanaPNG from '../imagenes/iconos/png/almohada-de-colchon.png';
import perchaPNG from '../imagenes/iconos/png/percha.png';
import mantaPNG from '../imagenes/iconos/png/frazada.png';
import persianaPNG from '../imagenes/iconos/png/persianas-levantadas.png';
import guardaropaPNG from '../imagenes/iconos/png/perchero-para-ropa.png';
import mosquiteroPNG from '../imagenes/iconos/png/mosquitero.png';
import aguaCalientePNG from '../imagenes/iconos/png/grifo-de-agua.png';
import duchaPNG from '../imagenes/iconos/png/ducha.png';
import bidePNG from '../imagenes/iconos/png/bide.png';
import jabonPNG from '../imagenes/iconos/png/jabon.png';






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
                <li><img src={Cocina} className="theme-colors-second" alt="cocina equipada" width="70" height="70" /> Cocina equipada</li>

                {/*<img src={Tvgif} className="theme-colors-second" alt="WhatsApp" width="50" height="50" />*/}
              </ul>
            </div>
            <div class="text-toribia col-sm-6">
              <ul>
                <li><img src={parrilla} className="theme-colors-second" alt="parilla exterior" width="60" height="60" /> Parrilla y espacio exterior</li>
                <li><img src={estacionamiento} className="theme-colors-second" alt="estacionamiento" width="60" height="60" /> Estacionamiento gratuito en las instalaciones</li>
                <li><img src={toalla} className="theme-colors-second" alt="Toalla toallon" width="60" height="60" />Juego de blanqueria</li>
                <li><img src={alarma} className="theme-colors-second" alt="Toalla toallon" width="60" height="60" /> Sistema alarma de seguridad</li>

                <li><img src={silla_jardin} className="theme-colors-second" alt="Silla de jardín" width="70" height="70" /> Mobiliario exterior</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-3">
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalServicios">Ver 38 servicios</button>
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
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={wifiPNG} className="theme-colors-second" alt="Silla de jardín" width="30" height="30" />  Wiffi</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={tvPNG} className="theme-colors-second" alt="Silla de jardín" width="30" height="30" />  Smart TV</li>       
                    </ul>
                  </div>
                  <div className="text-toribia col-sm-9">
                    <div><h5 className="text-dark text-md-start text-start">Calefacción y refrigeración</h5> </div>
                    <ul>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={airePNG} className="theme-colors-second" alt="aire acondicionado" width="30" height="30" />  Aire acondicionado frio - calor</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={quemadorPNG} className="theme-colors-second" alt="estufa a gas natural" width="30" height="30" />   Estufa a gas</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />   Ventiladores portátiles</li>

                    </ul>
                  </div>
                  <div className="text-toribia col-sm-9">
                    <div><h5 className="text-dark text-md-start text-start">Cocina y comedor</h5> </div>
                    <ul>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={MicroondasPNG} className="theme-colors-second" alt="Microondas" width="30" height="30" />  Microondas</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={juegococinaPNG} className="theme-colors-second" alt="utensillos de cocina" width="30" height="30" />  Utensilios básicos de cocina</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={cubiertosPNG} className="theme-colors-second" alt="Vajilla y cubiertos" width="30" height="30" />  Vajilla y cubiertos</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={hornoPNG} className="theme-colors-second" alt="cocina con horno a gas" width="30" height="30" />  Cocina y Horno a gas</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={pavaElectricaPNG} className="theme-colors-second" alt="Pava eléctrica" width="30" height="30" />  Pava eléctrica</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={congeladorPNG} className="theme-colors-second" alt="Heladera con frezzer" width="30" height="30" />  Heladera con frezzer</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={comedroPNG} className="theme-colors-second" alt="Comerdor cocina" width="30" height="30" />  Los huéspedes pueden comer cocinar en este espacio</li>
                    </ul>
                  </div>
                  <div className="text-toribia col-sm-9">
                    <div><h5 className="text-dark text-md-start text-start">Dormitorio</h5> </div>
                    <ul>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={toallaPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />  Toallas </li>
                        <li className="text-dark text-md-start text-start fs-6">
                        <img src={sabanaPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />  Sábanas </li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={perchaPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />  Perchas</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={mantaPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />  Almohadas y mantas adicionales</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={persianaPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />  Persianas o cortinas blackout</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={guardaropaPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />  Espacio para guardar ropa: placard</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={mosquiteroPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />  Mosquitero</li>
                    </ul>
                  </div>
                  <div className="text-toribia col-sm-9">
                    <div><h5 className="text-dark text-md-start text-start">Baño</h5> </div>
                    <ul>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={aguaCalientePNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />  Agua caliente</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={duchaPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />  Ducha masajeador</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={bidePNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />  Bidé</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={jabonPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />  jabón y papel higiénico</li>
                    </ul>
                  </div>
                  <div className="text-toribia col-sm-9">
                    <div><h5 className="text-dark text-md-start text-start">Al aire libre</h5> </div>
                    <ul>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        Pileta</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        Zona para comer al aire libre</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        Parrilla privada: a carbón</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        Utensilios para la parrilla</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        Muebles de exterior</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        Reposeras</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        Mobiliario exterior</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        Terraza</li>
                    </ul>
                  </div>
                  <div className="text-toribia col-sm-9">
                    <div><h5 className="text-dark text-md-start text-start">Estacionamiento e instalaciones</h5> </div>
                    <ul>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        Estacionamiento gratis en la propiedad</li>
                      <li className="text-dark text-md-start text-start fs-6"></li>

                    </ul>
                  </div>
                  <div className="text-toribia col-sm-9">
                    <div><h5 className="text-dark text-md-start text-start">Servicios</h5> </div>
                    <ul>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        El anfitrión te va a recibir</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        Se permiten mascotas</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        Ténder para ropa</li>

                    </ul>
                  </div>
                  <div className="text-toribia col-sm-9">
                    <div><h5 className="text-dark text-md-start text-start">Seguridad en el hogar</h5> </div>
                    <ul>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        Botiquín</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        Extintor de incendios</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        Alarma de seguridad en el cabaña</li>
                    </ul>
                  </div>
                  <div className="text-toribia col-sm-9">
                    <div><h5 className="text-dark text-md-start text-start">No incluidos</h5> </div>
                    <ul>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                      Lavarropas</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        Secador de pelo</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        Chimenea interior</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        Ventilador de techo</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        Sistema alarma de seguridad</li>
                      <li className="text-dark text-md-start text-start fs-6">
                        <img src={ventilador_portatilPNG} className="theme-colors-second" alt="ventilador portatil" width="30" height="30" />
                        Mobiliario exterior</li>
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
