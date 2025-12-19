import React, { useState } from 'react';
import '../styles/styleToribia.css';

const SelectedImage = ({ imageUrl }) => {
  return (
    <div className="flex">
      <img className="img" src={imageUrl} alt="Selected from gallery" />
    </div>
  );
};

const Images = ({ images, selectedUrl, onImageSelect }) => {
  return (
    <div className="flex">
      {images.map((data) => (
        <img
          style={{ borderBottom: selectedUrl === data.url ? '8px solid #B388FF' : '' }}
          className="mini-img"
          key={data.url}
          src={data.url}
          alt="Gallery thumbnail"
          onClick={() => onImageSelect(data)}
        />
      ))}
    </div>
  );
};

const GaleriaCabaña = ({ title, images }) => {
  // Asegurarse de que hay imágenes antes de establecer el estado inicial
  const [selectedImg, setSelectedImg] = useState(images.length > 0 ? images[0] : null);

  if (!selectedImg) {
    return <div><h1>{title}</h1><p>No hay imágenes para mostrar.</p></div>;
  }

  return (
    <div>
      <h1>{title}</h1>
      <SelectedImage imageUrl={selectedImg.url} />
      <Images images={images} selectedUrl={selectedImg.url} onImageSelect={setSelectedImg} />
    </div>
  );
};

export default GaleriaCabaña;