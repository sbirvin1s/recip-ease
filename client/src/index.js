/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

/*========== INTERNAL MODULES ==========*/
import { router } from './utils/routes.js';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

/*========== EXPORTS ==========*/
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);