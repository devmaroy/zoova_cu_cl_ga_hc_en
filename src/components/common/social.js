import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Reveal, Tween } from 'react-gsap';
import SocialIcon from './socialIcon';

// Query
const query = graphql`
  query Social {
    site {
      siteMetadata {
        socialMedia {
          facebook
          twitter
          instagram
          dribbble
          linkedin
        }
      }
    }
  }
`;

const Social = ({ fixedWidth = false }) => {
  const triggerAnimationRef = useRef();
  const data = useStaticQuery(query);
  const socialLinks = data.site.siteMetadata.socialMedia;

  return (
    <ul className="social">
      <Reveal trigger={triggerAnimationRef.current}>
        <Tween
          from={{ autoAlpha: 0, y: -50, opacity: 0 }}
          ease="power1.out"
          stagger={0.2}
        >
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
