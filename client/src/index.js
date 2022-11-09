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

/* TODO: Finish following tutorial to properly set up React Router v6.4.3
  * Determine if App needs to be imported and if splitting routes into their own folder will cause any issues
 */

/*========== EXPORTS ==========*/
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);