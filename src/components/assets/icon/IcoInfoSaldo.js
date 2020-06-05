import React from 'react';
import PropTypes from 'prop-types';

export default function IcoInfoSaldo({ variant }) {
  variant = '#3384F3';
  return (
    <svg
      data-test="icoIS"
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <path
          id="prefix__c"
          d="M3 1h15c1.105 0 2 .895 2 2v3.11l.927-.034C22.031 6.036 22.958 6.898 23 8l.001.073V21c0 1.105-.895 2-2 2H3c-1.105 0-2-.895-2-2V3c0-1.105.895-2 2-2zm0 6l1 1h17v13H3V7zm1.5-4H18v3H4.5C3.672 6 3 5.328 3 4.5S3.672 3 4.5 3zM15 11h6v8h-6c-2.21 0-4-1.79-4-4s1.79-4 4-4zm0 2h6v4h-6c-1.105 0-2-.895-2-2s.895-2 2-2zm0 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <mask id="prefix__d" fill="#fff">
          <use href="#prefix__c" />
        </mask>
        <use fill={variant} href="#prefix__c" />
        <path
          fill={variant}
          className="ico"
          d="M0 0H24V24H0z"
          mask="url(#prefix__d)"
        />
      </g>
    </svg>
  );
}
IcoInfoSaldo.propTypes = {
  variant: PropTypes.string,
};
