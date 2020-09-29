import React from 'react';
import { Link } from 'gatsby';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__inner">
          <h1>Zoova Foundation</h1>

          <p>A grateful heart is a beginning of greatness.</p>

          <Link to="/gallery" className="button button--outline">
            View gallery
          </Link>
          <Link to="/gallery" className="button button--outline">
            View gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
