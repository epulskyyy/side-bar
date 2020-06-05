import React from 'react';
import PropsType from 'prop-types';

export default function CheckBoxPanel({ onCheckedHandler, checked }) {
  return (
    <div className="row">
      <div className="col-6 checkbox-label-container">
        <label className="checkbox-label">
          Remember me
          <input
            type="checkbox"
            onChange={(e) => {
              onCheckedHandler(e);
            }}
            defaultChecked={checked === true ? true : false}
          />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="col-6">
        <a
          className="checkbox-label float-right"
          href="https://developers.bri.co.id/user/password"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  );
}

CheckBoxPanel.propsType = {
  onCheckedHandler: PropsType.func,
};
