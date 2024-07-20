// src/components/Loader.js
import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={loaderStyle}>
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="loading-indicator"
        radius="1"
        visible={true}
      />
    </div>
  );
};

const loaderStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  position: 'fixed',
  width: '100%',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  zIndex: 1000,
};

export default Loader;
