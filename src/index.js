import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Importando createRoot corretamente
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Usando createRoot do react-dom/client

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
