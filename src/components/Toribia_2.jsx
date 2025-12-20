import React from 'react';
import GaleriaCabaña from './GaleriaCabaña';
import fachadaToribia2 from '../imagenes/Toribia-2/fachada-T2.webp';
import bañoToribia2 from '../imagenes/Toribia-2/baño-T2.webp';
import cocina2Toribia2 from '../imagenes/Toribia-2/cocina-2-T2.webp';
import dormitorio1Toribia2 from '../imagenes/Toribia-2/habitacion-Adulto-T2.webp';
import dormitorio2Toribia2 from '../imagenes/Toribia-2/habitacion-niño-T2.webp';
import livingToribia2 from '../imagenes/Toribia-2/living-1-T2.webp';

const images = [
  {
    url: fachadaToribia2
  },
  {
    url: bañoToribia2
  } ,
  {
    url: cocina2Toribia2
  },
  {
    url: dormitorio1Toribia2
  },
  {
    url: dormitorio2Toribia2
  },
  {
    url: livingToribia2
  }   
];

const Toribia_2 = () => {
  return (
    <main>
      <section>
        <h1>Cabaña Toribia II</h1>
        <p>
          Disfruta de la tranquilidad y el confort en nuestra segunda cabaña, equipada con todo lo necesario para una estadía inolvidable.
        </p>
      </section>
      <section>
        <GaleriaCabaña title="Galería Cabaña Toribia II" images={images} />
      </section>
    </main>
  );
};

export default Toribia_2;
