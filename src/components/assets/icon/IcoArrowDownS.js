import React from 'react';
import PropTypes from 'prop-types';

export default function IcoArrowDownS({ variant }) {
  variant = '#F1453D';
  return (
    <svg
      data-test="icoArrDS"
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="12"
      viewBox="0 0 10 12"
    >
      <path
        fill={variant}
        d="M440 9L441.41 10.41 444 7.83 444 16 446 16 446 7.83 448.58 10.42 450 9 445 4z"
        transform="matrix(1 0 0 -1 -440 16)"
      />
    </svg>
  );
}
IcoArrowDownS.propTypes = {
  variant: PropTypes.string,
};
