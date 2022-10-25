import React from 'react';
import PropTypes from 'prop-types';
import { useCounter } from '../../hooks/useCounter';
import './Counter.css';

export const Counter = ({ defaultCounter }) => {
  const { counter, decrease, reset, increment } = useCounter(defaultCounter);

  return (
    <div className='app'>
      <h1>Counter</h1>
      <h3>Current value: {counter} </h3>
      <div className='actions'>
        <button onClick={decrease} className='actions__button'>
          -1
        </button>
        <button onClick={reset} className='actions__button'>
          Reset
        </button>
        <button onClick={increment} className='actions__button'>
          +1
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  defaultCounter: PropTypes.number.isRequired,
};
