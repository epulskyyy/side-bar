import React from 'react';
import PropTypes from 'prop-types';
export default function IconNextPage({ variant }) {
  return (
    <svg
      data-test="icoNP"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={variant}
      width="24px"
      height="24px"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M10.02 18l6-6-6-6-1.41 1.41L13.19 12l-4.58 4.59z" />
    </svg>
  );
}
IconNextPage.propTypes = {
  variant: PropTypes.string,
};