import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import classNames from 'classnames';
import { Tween } from 'react-gsap';

// Data
const navigation = [
  {
    id: '969d5312-0a47-11eb-adc1-0242ac120002',
    name: 'Home',
    url: '/',
  },
  {
    id: '86af04a0-0a47-11eb-adc1-0242ac120002',
    name: 'About',
    url: '/#about',
  },
  {
    id: '92e50f3a-0a47-11eb-adc1-0242ac120002',
    name: 'Gallery',
    url: '/#events',
  },
  {
    id: '8eb3e490-0a47-11eb-adc1-0242ac120002',
    name: 'FAQ',
    url: '/#faq',
  },
  {
    id: '8b30e9f8-0a47-11eb-adc1-0242ac120002',
    name: 'Contact',
    url: '/#contact',
  },
];

// Query

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
            from={{ autoAlpha: 0, y: '-50', opacity: 0 }}
            ease="power1.out"
            stagger={0.2}
          >
            {navigation.map(({ id, name, url }) => (
              <li key={id} className="navigation__item">
                {url === '/' ? (
                  <Link
                    to={url}
                    className="navigation__link"
                    activeClassName="navigation__link--active"
                    onClick={toggleNavigation}
                  >
                    {name}
                  </Link>
                ) : (
                  <ScrollLink
                    to={url.replace('/#', '')}
                    smooth
                    offset={-50}
                    className="navigation__link"
                    onClick={toggleNavigation}
                  >
                    {name}
                  </ScrollLink>
                )}
              </li>
            ))}
          </Tween>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
