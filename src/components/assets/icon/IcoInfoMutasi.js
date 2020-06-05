import React from 'react';
import PropTypes from 'prop-types';

export default function IcoInfoMutasi({ variant }) {
  return (
    <svg
      data-test="icoIM"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <path
          id="prefix__2"
          d="M4 3h2v16h13v3c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V5c0-1.105.895-2 2-2zm0 2h2v14h11v3H4V5z"
        />
        <path
          id="prefix__mutasi"
          d="M5.293 2.707L7.707.293C7.895.105 8.15 0 8.414 0H20c1.105 0 2 .895 2 2v17c0 1.105-.895 2-2 2H7c-1.105 0-2-.895-2-2V3.414c0-.265.105-.52.293-.707zM20 2v17H7V5h3V2h10zM9 2v2H7l2-2zm4 3h5v2h-5V5zM9 8h9v2H9V8zm0 3h2v2H9v-2zm3 0h6v2h-6v-2zm-3 3h3v2H9v-2zm4 0h5v2h-5v-2z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <use fill="#002B5D" href="#prefix__2" />
        <mask id="prefix__mutasi2" fill="#fff">
          <use href="#prefix__mutasi" />
        </mask>
        <use fill="#002B5D" href="#prefix__mutasi" />
        <path fill="#FFF" d="M0 0H24V24H0z" mask="url(#prefix__mutasi2)" />
      </g>
    </svg>
  );
}
IcoInfoMutasi.propTypes = {
  variant: PropTypes.string,
};
