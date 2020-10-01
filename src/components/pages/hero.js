import React from 'react';
import { Link } from 'gatsby';
import HeroBg from '../../images/pages/hero/hero-bg-2.jpg';

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url( ${HeroBg} )` }}>
      <div className="hero__overlay">
        <div className="hero__inner container">
          <h1 className="hero__heading">Zoova Foundation</h1>

          <div className="hero__text">
            <p>A grateful heart is a beginning of greatness.</p>
          </div>

          <div className="hero__meta">
            <Link to="/" className="button button--primary">
              View gallery
            </Link>

            <Link to="/" className="button button--link">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
