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
    </React.Fragment>
);
