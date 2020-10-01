import React from 'react';
import PropTypes from 'prop-types';

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image) => (
        <div className="gallery__item" key={image}>
          <img src={image} alt="" className="gallery__image" />

          <h4 className="gallery__heading">Zoova Marathon</h4>
        </div>
      ))}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Gallery;
