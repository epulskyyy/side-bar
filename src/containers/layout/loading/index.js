import React from 'react';

const Loading = () => {
  return (
    <div data-test="loading">
      <div
        style={{
          zIndex: 9999,
          position: 'sticky',
          backgroundColor: '#0f0821',
          top: 0,
          left: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
        }}
      >
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + '/example-loading.gif'}
          alt="logo"
        />
      </div>
    </div>
  );
};
export default Loading;
