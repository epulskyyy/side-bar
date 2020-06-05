import React from 'react';
import PropTypes from 'prop-types';

export default function IcoArrowDownB({ variant }) {
  variant = '#F1453D';
  return (
    <svg
      data-test="icoArrDB"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="18"
      viewBox="0 0 14 18"
    >
      <path
        fill={variant}
        d="M434 72L435.41 73.41 440 68.83 440 83 442 83 442 68.83 446.58 73.42 448 72 441 65z"
        transform="matrix(1 0 0 -1 -434 83)"
      />
    </svg>
  );
}
IcoArrowDownB.propTypes = {
  variant: PropTypes.string,
};
