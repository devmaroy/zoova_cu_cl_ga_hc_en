/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ items }) => {
  return (
    <dl className="accordion">
      {items.map(({ id, heading, text }) => (
        <React.Fragment key={id}>
          <dt className="accordion__heading">{heading}</dt>
          <dd className="accordion__text">{text}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      text: PropTypes.node.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Accordion;
