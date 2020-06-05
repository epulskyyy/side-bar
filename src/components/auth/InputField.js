import React from 'react';
import PropsType from 'prop-types';

export default function InputField({ user, handleInputChange }) {
  return (
    <>
      {user.isEmail && user.email === '' ? (
        <label className="inValid animated FadeIn">
          Username or e-mail address field is required.
        </label>
      ) : null}
      <div className="form-group">
        <input
          value={user.email}
          onChange={handleInputChange}
          name="email"
          type="text"
          required
        />
        <label className="label-input">Email atau username</label>
      </div>
      {user.isPw && user.password === '' ? (
        <label className="inValid">Password field is required.</label>
      ) : null}
      <div className="form-group">
        <input
          value={user.password}
          onChange={handleInputChange}
          type="password"
          name="password"
          required
        />
        <label className="label-input">Password</label>
      </div>
    </>
  );
}
InputField.propsType = {
  user: PropsType.object,
  handleInputChange: PropsType.func,
};
