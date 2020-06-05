import React from 'react';
import PropTypes from 'prop-types';

export default function IcoSearch({ variant }) {
  variant = '#CACFD9';
  return (
    <svg
      data-test="icoSrc"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <g fill="none" fillRule="evenodd" transform="translate(-2 -2)">
        <path d="M0 0L24 0 24 24 0 24z" />
        <circle
          cx="10"
          cy="10"
          r="7"
          stroke={variant}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          stroke={variant}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21L15 15"
        />
      </g>
    </svg>
  );
}
IcoSearch.propTypes = {
  variant: PropTypes.string,
};
