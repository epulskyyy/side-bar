import React from 'react';
import PropTypes from 'prop-types';
export default function IcoDashboardActive({ variant }) {
  return (
    <svg
      data-test="icoDA"
      className="icon-active"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <path
          id="prefix__0"
          d="M9 15c1.105 0 2 .895 2 2v4c0 1.105-.895 2-2 2H3c-1.105 0-2-.895-2-2v-4c0-1.105.895-2 2-2h6zm12-4c1.105 0 2 .895 2 2v8c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2v-8c0-1.105.895-2 2-2h6zM9 1c1.105 0 2 .895 2 2v8c0 1.105-.895 2-2 2H3c-1.105 0-2-.895-2-2V3c0-1.105.895-2 2-2h6zm12 0c1.105 0 2 .895 2 2v4c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2V3c0-1.105.895-2 2-2h6z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <mask id="prefix__dashboard-active" fill="#fff">
          <use href="#prefix__0" />
        </mask>
        <use fill="#002b5d" href="#prefix__0" />
        <path
          fill={variant}
          className="ico-active"
          d="M0 0H24V24H0z"
          mask="url(#prefix__dashboard-active)"
        />
      </g>
    </svg>
  );
}

IcoDashboardActive.propTypes = {
  variant: PropTypes.string,
};
