import React, { useState, useEffect } from "react";

const TimerCounter = () => {
  const [Count, setCount] = useState(0);

  let timer;
  const startCount = () => {
    setCount((prev) => prev + 1);
  };
  const stopCount = () => {
    clearTimeout(timer);
  };

  const resetTimer = () => {
    setCount(0);
    clearTimeout(timer);
  };
  useEffect(() => {
    if (Count) {
      timer = setTimeout(startCount, 1000);
    }
  }, [Count]);
  return (
    <div>
      <h1>Count : {Count}</h1>
      <button onClick={startCount}>Start</button>
      <button onClick={stopCount}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default TimerCounter;
