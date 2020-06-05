import React from 'react';
import PropTypes from 'prop-types';

export default function IconFirstPage({ variant }) {
  return (
    <svg
      data-test="icoFP"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={variant}
      width="24px"
      height="24px"
    >
      <path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
      <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z" />
    </svg>
  );
}

IconFirstPage.propTypes = {
  variant: PropTypes.string,
};
