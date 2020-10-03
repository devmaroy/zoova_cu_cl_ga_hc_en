import React from 'react';
import PropTypes from 'prop-types';
import SocialIcon from './socialIcon';

const socialLinks = {
  facebook: 'https://facebook.com/',
  twitter: 'https://twitter.com/',
  instagram: 'https://instagram.com/',
  linkedin: 'https://linkedin.com/in/',
};

const Social = ({ fixedWidth = false }) => {
  return (
    <ul className="social">
      {Object.entries(socialLinks).map(([name, url]) => (
        <li key={name} className="social__item">
          <a href={url} target="__blank" className="social__link">
            <SocialIcon icon={name} fixedWidth={fixedWidth} />
          </a>
        </li>
      ))}
    </ul>
  );
};

Social.propTypes = {
  fixedWidth: PropTypes.bool,
};

export default Social;
