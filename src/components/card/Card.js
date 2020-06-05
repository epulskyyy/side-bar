import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ className, width, height, children }) => {
  return (
    <div
      data-test="card"
      className={'Card ' + className}
      style={{ width: width, height: height }}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.any,
};

export default Card;
