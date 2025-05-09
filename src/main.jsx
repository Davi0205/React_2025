// import { StrictMode } from 'react';

// import { createRoot } from 'react-dom/client'

// const root = createRoot(document.getElementById('root'))
// root.render( 
//   <StrictMode>
//     <button>Hola mundonp</button>
//   </StrictMode>
// )

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
      <button>Hola Mundo1</button>
      <button>Hola Mundo3</button>
      <button>Hola Mundo2</button>
      <button>Hola Mundo4</button>
      <button>Hola Mundo6</button>


    </React.Fragment>
);
