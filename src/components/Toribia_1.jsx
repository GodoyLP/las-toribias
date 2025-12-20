import React from 'react';
import GaleriaCabaña from './GaleriaCabaña';
import fachadaToribia1 from '../imagenes/toribia-1/fachada_T1.webp';
import bañoToribia1 from '../imagenes/Toribia-1/baño-T1.webp';
import cocina2Toribia1 from '../imagenes/Toribia-1/cocina-T1.webp';
import entradaToribia1 from '../imagenes/Toribia-1/entrada-T1.webp';
import dormitorioNiñoToribia1 from '../imagenes/Toribia-1/habitacion-niño-T1.webp';
import dormitorioAdultoToribia1 from '../imagenes/Toribia-1/habitacion-T1.webp';
import livingToribia1 from '../imagenes/Toribia-1/living-T1.webp';

const images = [
  {
    url: fachadaToribia1
  },
  {
    url: bañoToribia1
  } ,
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
    <main>
      <section>
        <h1>Cabaña Toribia I</h1>
        <p>
          Disfruta de la tranquilidad y el confort en nuestra segunda cabaña, equipada con todo lo necesario para una estadía inolvidable.
        </p>
      </section>
      <section>
        <GaleriaCabaña title="Galería Cabaña Toribia I" images={images} />
      </section>
    </main>
  );
};

export default Toribia_1;
