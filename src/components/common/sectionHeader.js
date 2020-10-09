import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Reveal, Tween } from 'react-gsap';

const SectionHeader = ({
  heading,
  headinClass = '',
  textClass = '',
  children,
}) => {
  const triggerAnimationRef = useRef();

  return (
    <div className="section-header" ref={triggerAnimationRef}>
      <Reveal trigger={triggerAnimationRef.current}>
        <Tween
          from={{ autoAlpha: 0, y: -50, opacity: 0 }}
          ease="power1.out"
          stagger={0.2}
        >
          <h2 className={`section-header__heading ${headinClass}`}>
            {heading}
          </h2>

          <div className={`section-header__text ${textClass}`}>{children}</div>
        </Tween>
      </Reveal>
    </div>
  );
};

SectionHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  headinClass: PropTypes.string,
  textClass: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SectionHeader;
