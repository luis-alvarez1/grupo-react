import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

export const Counter = (props) => {
  const { defaultCounter } = props;
  const [counter, setCounter] = useState(defaultCounter);
  const decrease = () => setCounter(counter - 1);
  const reset = () => setCounter(defaultCounter);
  const increment = () => setCounter(counter + 1);

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
