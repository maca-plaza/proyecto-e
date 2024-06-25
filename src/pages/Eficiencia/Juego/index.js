import React from 'react';

const Juego = () => {
    const emulatorUrl = 'https://appetize.io/embed/your-appetize-id?device=nexus5&scale=75&autoplay=false&orientation=portrait&deviceColor=black';

    return (
      <div className="app-container">
        <h1>Emulador de Android</h1>
        <iframe
          title="Emulador de Android"
          width="100%"
          height="600"
          src={emulatorUrl}
        />
      </div>
    );
};

export default Juego;