import { useState } from 'react';

export const useCounter = (defaultCounter) => {
  const [counter, setCounter] = useState(defaultCounter);
  const decrease = () => setCounter(counter - 1);
  const reset = () => setCounter(defaultCounter);
  const increment = () => setCounter(counter + 1);

  return {
    counter,
    decrease,
    increment,
    reset,
  };
};
