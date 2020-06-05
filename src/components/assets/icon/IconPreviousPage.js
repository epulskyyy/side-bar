import React from 'react';
import PropTypes from 'prop-types';
export default function IconPreviousPage({ variant }) {
  return (
    <div>
      <svg
        data-test="icoPP"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        fill={variant}
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
      </svg>
    </div>
  );
}

IconPreviousPage.propTypes = {
  variant: PropTypes.string,
};
