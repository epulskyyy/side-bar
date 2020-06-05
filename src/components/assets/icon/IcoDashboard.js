import React from 'react';
import PropTypes from 'prop-types';
export default function IcoDashboard({ variant }) {
  return (
    <svg
      data-test="icoD"
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <path
          id="prefix__1"
          d="M9 15c1.105 0 2 .895 2 2v4c0 1.105-.895 2-2 2H3c-1.105 0-2-.895-2-2v-4c0-1.105.895-2 2-2h6zm12-4c1.105 0 2 .895 2 2v8c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2v-8c0-1.105.895-2 2-2h6zM9 1c1.105 0 2 .895 2 2v8c0 1.105-.895 2-2 2H3c-1.105 0-2-.895-2-2V3c0-1.105.895-2 2-2h6zm12 0c1.105 0 2 .895 2 2v4c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2V3c0-1.105.895-2 2-2h6zm-6 12h6v8h-6v-8zm0-10h6v4h-6V3zM3 3h6v8H3V3zm0 14h6v4H3v-4z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <mask id="prefix__dashboard" fill="#fff">
          <use href="#prefix__1" />
        </mask>
        <use fill="#FFF" href="#prefix__1" />
        <path
          fill={variant}
          className="ico"
          d="M0 0H24V24H0z"
          mask="url(#prefix__dashboard)"
        />
      </g>
    </svg>
  );
}

IcoDashboard.propTypes = {
  variant: PropTypes.string,
};
