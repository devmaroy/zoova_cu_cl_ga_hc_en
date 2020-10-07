import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Reveal, Tween } from 'react-gsap';

const SectionHeader = ({ heading, children }) => {
  const triggerAnimationRef = useRef();

  return (
    <div className="section-header" ref={triggerAnimationRef}>
      <Reveal trigger={triggerAnimationRef.current}>
        <Tween from={{ y: -50, opacity: 0 }} ease="power1.out" stagger={0.2}>
          <h2 className="section-header__heading">{heading}</h2>

          <div className="section-header__text">{children}</div>
        </Tween>
      </Reveal>
    </div>
  );
};

SectionHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionHeader;
