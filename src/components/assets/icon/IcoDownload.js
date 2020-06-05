import React from 'react';
import PropTypes from 'prop-types';

export default function IcoDownload({ variant }) {
  variant = '#3384F3';
  return (
    <svg
      data-test="icoDl"
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0L24 0 24 24 0 24z" transform="translate(-3 -3)" />
        <path
          stroke={variant}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 17v2c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2v-2M7 11L12 16 17 11M12 4L12 16"
          transform="translate(-3 -3)"
        />
      </g>
    </svg>
  );
}
IcoDownload.propTypes = {
  variant: PropTypes.string,
};
