import React from 'react';
import PropTypes from 'prop-types';

export default function IcoArrowUpB({ variant }) {
  variant = '#39CA74';
  return (
    <svg
      data-test="icoArrUB"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="18"
      viewBox="0 0 14 18"
    >
      <path
        fill={variant}
        d="M440 72L441.41 73.41 446 68.83 446 83 448 83 448 68.83 452.58 73.42 454 72 447 65z"
        transform="translate(-440 -65)"
      />
    </svg>
  );
}
IcoArrowUpB.propTypes = {
  variant: PropTypes.string,
};
