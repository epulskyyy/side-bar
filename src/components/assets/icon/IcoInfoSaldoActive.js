import React from 'react';
import PropTypes from 'prop-types';

export default function IcoInfoSaldoActive({ variant }) {
  return (
    <svg
      data-test="icoISA"
      className="icon-active"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <path
          id="prefix__a"
          d="M18 1c1.105 0 2 .895 2 2v3.11l.927-.034C22.031 6.036 22.958 6.898 23 8l.001.073V21c0 1.105-.895 2-2 2H3c-1.105 0-2-.895-2-2V3c0-1.105.895-2 2-2h15zM4.5 3H18v3H4.5C3.672 6 3 5.328 3 4.5S3.672 3 4.5 3zm9.5 9h7v6h-7c-1.657 0-3-1.343-3-3s1.343-3 3-3zm1 4c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <mask id="prefix__b" fill="#fff">
          <use href="#prefix__a" />
        </mask>
        <use fill="#002B5D" href="#prefix__a" />
        <path fill="#002B5D" d="M0 0H24V24H0z" mask="url(#prefix__b)" />
      </g>
    </svg>
  );
}
IcoInfoSaldoActive.propTypes = {
  variant: PropTypes.string,
};
