import React from 'react';
import PropTypes from 'prop-types';

export default function IcoArrowUpS({ variant }) {
  variant = '#39CA74';
  return (
    <svg
      data-test="icoArrUS"
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="12"
      viewBox="0 0 10 12"
    >
      <path
        fill={variant}
        d="M433 9L434.41 10.41 437 7.83 437 16 439 16 439 7.83 441.58 10.42 443 9 438 4z"
        transform="translate(-433 -4)"
      />
    </svg>
  );
}
IcoArrowUpS.propTypes = {
  variant: PropTypes.string,
};
