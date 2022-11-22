import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((preValue) => preValue + 1);
  };

  const incrementTenHandler = (iteration = 1) => {
    setCount((preValue) => preValue + iteration);
  };

  const decrementHandler = () => {
    setCount((previousValue) => previousValue - 1);
  };

  const decrementTenHandler = (iteration) => {
    setCount((preVal) => preVal - iteration);
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Counnt : {count}</h2>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={() => incrementTenHandler(10)}>increment ten</button>
      <button onClick={decrementHandler}>decrement</button>
      <button
        onClick={() => decrementTenHandler(10)}
        disabled={count === -5 ? true : false}
      >
        decrement ten
      </button>
      <button onClick={resetHandler}>reset</button>
    </div>
  );
};

export default Counter;
