import React from 'react';
import PropsTypes from 'prop-types';

export default function Status({ children, status }) {
  return (
    <span data-test="statusRate" className={`badge badge_${status}`}>
      {children}
    </span>
  );
}

Status.propTypes = {
  status: PropsTypes.string.isRequired,
  children: PropsTypes.string,
};

Status.defaultProps = {
  status: 'Success',
};
