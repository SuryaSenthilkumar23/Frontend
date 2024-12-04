import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css'; // Make sure the path is correct
import App from './App'; // Import the App component

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
