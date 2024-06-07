import React from "react";

const Solar = () => {
  return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px' }}>
          <h1>Calculadora Solar</h1>
          <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' /* 16:9 ratio */ }}>
              <iframe 
                  src="https://calculadora-ahorro.web.app/#/" 
                  title="Calculadora Paneles" 
                  style={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none'
                  }}
                  allowFullScreen
              />
          </div>
      </div>
  );
}

export default Solar;