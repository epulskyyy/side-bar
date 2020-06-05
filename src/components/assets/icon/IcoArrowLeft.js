import React from 'react';
import PropTypes from 'prop-types';

export default function IcoArrowLeft({ variant }) {
  return (
    <svg
      data-test="icoArrL"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="10"
      viewBox="0 0 15 10"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0L24 0 24 24 0 24z" transform="translate(-4 -7)" />
        <path
          className="ico"
          stroke={variant}
          strokeWidth="2"
          d="M5 12L19 12M5 12L9 16M5 12L9 8"
          transform="translate(-4 -7)"
        />
      </g>
    </svg>
  );
}

IcoArrowLeft.propTypes = {
  variant: PropTypes.string,
};
