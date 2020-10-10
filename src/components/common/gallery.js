import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Reveal, Tween } from 'react-gsap';

const Gallery = ({ items }) => {
  const triggerAnimationRef = useRef();

  return (
    <div className="gallery" ref={triggerAnimationRef}>
      <Reveal trigger={triggerAnimationRef.current}>
        <Tween
          from={{ autoAlpha: 0, y: -50, opacity: 0 }}
          ease="power1.out"
          stagger={0.2}
        >
          {items.map(({ image, heading, headingHighlight }) => (
            <div key={heading} className="gallery__item">
              <div className="gallery__image-wrapper">
                <Img
                  fluid={image}
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
      image: PropTypes.shape({
        aspectRatio: PropTypes.number.isRequired,
        base64: PropTypes.string.isRequired,
        sizes: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        srcSet: PropTypes.string.isRequired,
      }).isRequired,
      heading: PropTypes.string,
      headingHighlight: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Gallery;
