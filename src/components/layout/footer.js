import React, { useRef } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Reveal, Tween } from 'react-gsap';
import Social from '../common/social';

// Query
const query = graphql`
  query Footer {
    site {
      siteMetadata {
        author
        copyright {
          name
          rights
          author
          authorUrl
        }
      }
    }
  }
`;

const Footer = () => {
  const triggerAnimationRef = useRef();
  const data = useStaticQuery(query);
  const { author, copyright } = data.site.siteMetadata;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <Reveal trigger={triggerAnimationRef.current}>
            <Tween from={{ autoAlpha: 0, opacity: 0 }} ease="power1.out">
              <div className="footer__info">
                <div className="footer__copyright">
                  <p>
                    Copyright © {new Date().getFullYear()}{' '}
                    <Link to="/" className="footer__link">
                      {copyright.name}
                    </Link>
                    . {copyright.rights}
                  </p>
                </div>

                <div className="footer__author">
                  <p>
                    Made with <span className="footer__highlight">love</span> by{' '}
                    <a href={copyright.authorUrl} className="footer__link">
                      {author}
                    </a>
                  </p>
                </div>
              </div>
            </Tween>

            <div className="footer__social">
              <Social />
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
