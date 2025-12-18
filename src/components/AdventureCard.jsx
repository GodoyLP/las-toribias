import React from 'react';

const AdventureCard = ({ title, description, imageSrc, imageAlt, delay }) => {
  // Si no se proporciona una imagen, se renderiza un div con clases para un fondo.
  const imageElement = imageSrc ? (
    <img
      className="u-border-9 u-border-palette-3-base u-image u-image-circle u-preserve-proportions"
      alt={imageAlt}
      src={imageSrc}
    />
  ) : (
    <div
      className="u-border-9 u-border-palette-3-base u-image u-image-circle u-preserve-proportions"
    ></div>
  );

  return (
    <div className="u-container-align-center u-container-style u-list-item u-radius-32 u-repeater-item u-shape-round u-white">
      <div className="u-container-layout u-similar-container u-valign-top">
        <h4 className="u-align-center u-text u-text-default">{title}</h4>
        <p className="u-align-center u-text u-text-default">{description}</p>
        <div className="u-align-center u-border-3 u-border-grey-30 u-line u-line-horizontal u-opacity u-opacity-45"></div>
        {imageElement}
      </div>
    </div>
  );
};

export default AdventureCard;