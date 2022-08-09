/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';

/*========== INTERNAL MODULES ==========*/
import App from './components/App.jsx';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

/*========== EXPORTS ==========*/
root.render(<App />);