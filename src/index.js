import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { loadTheme } from './components/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  // register service worker
  navigator.serviceWorker.register("service-worker.js");
}

loadTheme()
