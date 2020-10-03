import React from 'react';
import { Link } from 'gatsby';
import Social from '../common/social';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__info">
            <div className="footer__copyright">
              <p>
                Copyright © {new Date().getFullYear()}{' '}
                <Link to="/" className="footer__link">
                  Zoova
                </Link>
                . All rights reserved.
              </p>
            </div>

            <div className="footer__author">
              <p>
                Made with <span className="footer__highlight">love</span> by{' '}
                <a href="https://marekmatejovic.com/" className="footer__link">
                  devmaroy
                </a>
              </p>
            </div>
          </div>

          <div className="footer__social">
            <Social />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
