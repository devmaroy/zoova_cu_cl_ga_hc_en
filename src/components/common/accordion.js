/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Accordion = ({ items }) => {
  const [activePanels, setActivePanels] = useState({});

  const revealText = (index) => {
    setActivePanels((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <dl className="accordion">
      {items.map(({ id, heading, text }, index) => (
        <React.Fragment key={id}>
          <dt
            className={classNames('accordion__heading', {
              active: activePanels[index],
            })}
            onClick={() => revealText(index)}
            onKeyDown={() => {}}
          >
            {heading}
          </dt>
          <dd
            className={classNames('accordion__text', {
              active: activePanels[index],
            })}
          >
            {text}
          </dd>
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
