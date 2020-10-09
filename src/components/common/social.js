import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Reveal, Tween } from 'react-gsap';
import SocialIcon from './socialIcon';

const socialLinks = {
  facebook: 'https://facebook.com/',
  twitter: 'https://twitter.com/',
  instagram: 'https://instagram.com/',
  linkedin: 'https://linkedin.com/in/',
};

const Social = ({ fixedWidth = false }) => {
  const triggerAnimationRef = useRef();

  return (
    <ul className="social">
      <Reveal trigger={triggerAnimationRef.current}>
        <Tween from={{ y: -50, opacity: 0 }} ease="power1.out" stagger={0.2}>
          {Object.entries(socialLinks).map(([name, url]) => (
            <li key={name} className="social__item">
              <a href={url} target="__blank" className="social__link">
                <SocialIcon icon={name} fixedWidth={fixedWidth} />
              </a>
            </li>
          ))}
        </Tween>
      </Reveal>
    </ul>
  );
};

Social.propTypes = {
  fixedWidth: PropTypes.bool,
};

export default Social;
