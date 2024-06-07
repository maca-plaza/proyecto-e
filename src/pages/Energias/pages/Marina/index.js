import React from "react";

const Marina = () => {
  return (

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px' }}>
            <h1>Explorador Marino</h1>
            <div style={{ 
                position: 'relative', 
                width: '100%', 
                maxWidth: '800px', 
                paddingBottom: '56.25%', /* 16:9 ratio */ 
                border: '2px solid #ccc', /* Bordes */
                borderRadius: '8px', /* Esquinas redondeadas */
                overflow: 'hidden' /* Asegura que el contenido no se salga del contenedor */
            }}>
                <iframe 
                    src="https://marino.minenergia.cl/" 
                    title="Embedded Video" 
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


export default Marina;

