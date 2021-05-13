import React from 'react';
import ReactDOM from 'react-dom';
// Se cargan los estilos
import './index.css';
// Se importa el componente
import App from './App';

// Esto se encarga de renderizar el componente
ReactDOM.render(
  <React.StrictMode>
    {/* Esto es un componente de React */}
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
