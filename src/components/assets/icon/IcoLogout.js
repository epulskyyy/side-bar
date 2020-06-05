import React from 'react';
import PropTypes from 'prop-types';

export default function IcoLogout({ variant }) {
  return (
    <svg
      data-test="icoLg"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="18"
      viewBox="0 0 22 18"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0L24 0 24 24 0 24z" transform="translate(-2 -3)" />
        <path
          stroke="#FFF"
          strokeWidth="2"
          d="M14 8V6h0c0-1.105-.895-2-2-2H5h0c-1.105 0-2 .895-2 2 0 0 0 0 0 0v12h0c0 1.105.895 2 2 2h7c1.105 0 2-.895 2-2v-2"
          transform="translate(-2 -3)"
        />
        <path
          stroke="#FFF"
          strokeWidth="2"
          d="M7 12h14l-3-3m0 6l3-3"
          transform="translate(-2 -3)"
        />
      </g>
    </svg>
  );
}
IcoLogout.propTypes = {
  variant: PropTypes.string,
};
