import React from 'react';
import PropTypes from 'prop-types';
export default function IconLastPage({ variant }) {
  return (
    <svg
      data-test="icoLP"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={variant}
      width="24px"
      height="24px"
    >
      <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
      <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z" />
    </svg>
  );
}
IconLastPage.propTypes = {
  variant: PropTypes.string,
};
