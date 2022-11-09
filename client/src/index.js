/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { RouterProvider, Route} from 'react-router-dom';

/*========== INTERNAL MODULES ==========*/
import App from './pages/App.jsx';
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