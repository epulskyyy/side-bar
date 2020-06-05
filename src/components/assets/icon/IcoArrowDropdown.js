import React from 'react';
import PropTypes from 'prop-types';
export default function IcoArrowDropdown({ variant }) {
  if (variant == null) {
    variant = '#3384F3';
  }
  return (
    <svg
      data-test="icoArrDD"
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="4"
      viewBox="0 0 8 4"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0L18 0 18 18 0 18z" transform="translate(-5 -8)" />
        <path
          fill={variant}
          fillRule="nonzero"
          d="M5 8L9 12 13 8z"
          transform="translate(-5 -8)"
        />
      </g>
    </svg>
  );
}

IcoArrowDropdown.propTypes = {
  variant: PropTypes.string,
};
