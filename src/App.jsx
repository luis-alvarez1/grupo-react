/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
// Se importa la imágen
import logo from './logo.svg';
import './App.css';

// Los componentes se declaran como funciones
function App() {
  // Aquí podría ir más JS con lógica
  return (
    <div className='App'>
      {/* El jsx se define el return de la función */}
      {/* Todo lo que hay aqui es HTML convertido en JSX */}
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Se exportan para poder utilizarlos
export default App;
