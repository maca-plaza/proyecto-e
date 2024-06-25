import React from 'react';

const AppetizeEmulator = ({ url }) => {
  return (
    <iframe
      src={url}
      width="300px"
      height="600px"
      title="Appetize Emulator"
    ></iframe>
  );
};

export default AppetizeEmulator;
