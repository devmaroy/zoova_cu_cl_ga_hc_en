/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classNames from 'classnames';

const Card = ({
  featured,
  image,
  icon,
  heading,
  headingHighlight,
  children,
  buttonText = 'Learn more',
}) => {
  return (
    <div className={classNames('card', { 'card--featured': featured })}>
      <div className="card__wrapper">
        {image && (
          <div
            className="card__image"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}

        <div className="card__inner">
          {icon && (
            <div className="card__icon-wrapper">
              <div className="card__icon">
                <img src={icon} alt="Card icon" />
              </div>
            </div>
          )}

          <h3 className="card__heading">
            {headingHighlight && (
              <span className="card__heading--highlight">
                {headingHighlight}{' '}
              </span>
            )}

            {heading}
          </h3>

          <div className="card__text">{children}</div>

          <div className="card__meta">
            <Link to="/" className="card__button">
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  featured: PropTypes.bool,
  image: PropTypes.string,
  icon: PropTypes.string,
  heading: PropTypes.string.isRequired,
  headingHighlight: PropTypes.string,
  children: PropTypes.node.isRequired,
  buttonText: PropTypes.string,
};

export default Card;
