import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { inject } from '@vercel/analytics';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

inject();
