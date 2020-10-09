import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Reveal, Tween } from 'react-gsap';

const Gallery = ({ items }) => {
  const triggerAnimationRef = useRef();

  return (
    <div className="gallery" ref={triggerAnimationRef}>
      <Reveal trigger={triggerAnimationRef.current}>
        <Tween from={{ y: -50, opacity: 0 }} ease="power1.out" stagger={0.2}>
          {items.map(({ image, heading, headingHighlight }) => (
            <div key={image} className="gallery__item">
              <div className="gallery__image-wrapper">
                <img
                  src={image}
                  className="gallery__image"
                  alt="Gallery item"
                />
              </div>

              <h4 className="gallery__heading">
                <span className="gallery__heading--highlight">
                  {headingHighlight}{' '}
                </span>

                {heading}
              </h4>
            </div>
          ))}
        </Tween>
      </Reveal>
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
