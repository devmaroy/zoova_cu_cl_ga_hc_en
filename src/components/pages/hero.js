import React from 'react';
import { Link } from 'gatsby';
import { Tween } from 'react-gsap';
import heroBg from '../../images/pages/hero/hero-bg-2.jpg';

const Hero = () => {
  return (
    <div
      className="banner-area banner-area--top banner-area--large hero"
      style={{ backgroundImage: `url( ${heroBg} )` }}
    >
      <div className="banner-area__inner hero__inner container">
        <Tween from={{ y: '-50', opacity: 0 }} ease="power1.out" stagger={0.2}>
          <h1 className="hero__heading">Zoova Foundation</h1>

          <div className="hero__text">
            <p>A grateful heart is a beginning of greatness.</p>
          </div>
        </Tween>

        <Tween from={{ opacity: 0 }} ease="power1.out" stagger={0.2}>
          <div className="hero__meta">
            <Link to="/" className="button button--primary">
              View gallery
            </Link>

            <Link to="/" className="button button--link">
              Contact us
            </Link>
          </div>
        </Tween>
      </div>
    </div>
  );
};

export default Hero;
