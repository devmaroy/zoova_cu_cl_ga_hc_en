import React from 'react';
import PropTypes from 'prop-types';

// TODO: Change key to ID later.

const Gallery = ({ items }) => {
  return (
    <div className="gallery">
      {items.map(({ image, heading, headingHighlight }) => (
        <div key={image} className="gallery__item">
          <div className="gallery__image-wrapper">
            <img src={image} className="gallery__image" alt="Gallery item" />
          </div>

          <h4 className="gallery__heading">
            <span className="gallery__heading--highlight">
              {headingHighlight}{' '}
            </span>
            {heading}
          </h4>
        </div>
      ))}
    </div>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      heading: PropTypes.string,
      headingHighlight: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Gallery;
