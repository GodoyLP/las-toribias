import React, { useState, useEffect } from 'react';


const SelectedImage = ({ imageUrl }) => {
  return (
    <div className="flex">
      <img className="img" src={imageUrl} alt="Selected from gallery" />
    </div>
  );
};

const Images = ({ images, selectedUrl, onImageSelect }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsToShow = isMobile ? 4 : 5;

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + itemsToShow < images.length) setStartIndex(startIndex + 1);
  };

  const visibleImages = images.slice(startIndex, startIndex + itemsToShow);

  return (
    <div className="flex">
      <button className="nav-arrow" onClick={handlePrev} disabled={startIndex === 0}>
        &#10094;
      </button>
      {visibleImages.map((data) => (
        <img
          className={`mini-img ${selectedUrl === data.url ? 'selected' : ''}`}
         
          key={data.url}
          src={data.url}
          alt="Gallery thumbnail"
          onClick={() => onImageSelect(data)}
        />
      ))}
      <button className="nav-arrow" onClick={handleNext} disabled={startIndex + itemsToShow >= images.length}>
        &#10095;
      </button>
    </div>
  );
};

const GaleriaCabaña = ({ title, images }) => {
  // Asegurarse de que hay imágenes antes de establecer el estado inicial
  const [selectedImg, setSelectedImg] = useState(images.length > 0 ? images[0] : null);

  if (!selectedImg) {
    return <div><h2>{title}</h2><p>No hay imágenes para mostrar.</p></div>;
  }

  return (
    <div>
      <h2>{title}</h2>
      <SelectedImage imageUrl={selectedImg.url} />
      <Images images={images} selectedUrl={selectedImg.url} onImageSelect={setSelectedImg} />
    </div>
  );
};

export default GaleriaCabaña;