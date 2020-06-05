import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function RecaptchaLogin({ onChangeRecaptha }) {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div className="g-recaptcha">
        <ReCAPTCHA
          sitekey="6Lc2t_8UAAAAACCfy5WvMhRbvxa3Z3xNnG4UWWb8"
          onChange={onChangeRecaptha}
          onExpired={onChangeRecaptha}
          onErrored={() => onChangeRecaptha(false)}
        />
      </div>
    </div>
  );
}
