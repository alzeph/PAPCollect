import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './Components/Pages/Index';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Importe le service worker


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
serviceWorkerRegistration.register()

