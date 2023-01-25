/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

/*========== INTERNAL MODULES ==========*/
import { router } from './utils/routes.js';
import { AuthProvider } from './contexts/AuthContext.js';
import { UserProvider } from './contexts/UserContext.js';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

/*========== EXPORTS ==========*/
root.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);