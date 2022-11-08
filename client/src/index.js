/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';

/*========== INTERNAL MODULES ==========*/
import App from './pages/App.jsx';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

/*========== EXPORTS ==========*/
root.render(
  <Router>
    <App/>
  </Router>
);