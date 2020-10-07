import React, { useState } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { Tween } from 'react-gsap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        type="button"
        className="navigation-toggle"
        onClick={toggleNavigation}
      >
        <div
          className={classNames(
            'navigation-toggle__bar navigation-toggle__bar--one',
            { 'is-open': isOpen },
          )}
        />
        <div
          className={classNames(
            'navigation-toggle__bar navigation-toggle__bar--two',
            { 'is-open': isOpen },
          )}
        />
        <div
          className={classNames(
            'navigation-toggle__bar navigation-toggle__bar--three',
            { 'is-open': isOpen },
          )}
        />
      </button>

      <nav className={classNames('navigation', { 'is-open': isOpen })}>
        <ul className="navigation__list">
          <Tween
            from={{ y: '-50', opacity: 0 }}
            ease="power1.out"
            stagger={0.2}
          >
            <li className="navigation__item">
              <Link
                to="/"
                className="navigation__link"
                activeClassName="navigation__link--active"
              >
                Home
              </Link>
            </li>

            <li className="navigation__item">
              <Link
                to="/about"
                className="navigation__link"
                activeClassName="navigation__link--active"
              >
                About
              </Link>
            </li>

            <li className="navigation__item">
              <Link
                to="/gallery"
                className="navigation__link"
                activeClassName="navigation__link--active"
              >
                Gallery
              </Link>
            </li>

            <li className="navigation__item">
              <Link
                to="/faq"
                className="navigation__link"
                activeClassName="navigation__link--active"
              >
                FAQ
              </Link>
            </li>

            <li className="navigation__item">
              <Link
                to="/contact"
                className="navigation__link"
                activeClassName="navigation__link--active"
              >
                Contact
              </Link>
            </li>
          </Tween>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
