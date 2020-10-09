import React from 'react';
import { Link } from 'gatsby';
import { Tween } from 'react-gsap';

const Logo = () => {
  return (
    <Tween from={{ autoAlpha: 0, y: '-50', opacity: 0 }} ease="power1.out">
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__highlight">Zoova</span> Foundation
        </Link>
      </div>
    </Tween>
  );
};

export default Logo;
