import React from 'react';

export default function NavLogin() {
  return (
    <div className="nav__login">
      <img
        height="28px"
        src={process.env.PUBLIC_URL + '/logo.png'}
        alt="logo"
      />
    </div>
  );
}
