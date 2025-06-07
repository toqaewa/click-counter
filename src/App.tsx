import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleReset = () => {
    setCount(-1);
  };

  return (
    <div className="app" onClick={handleClick}>
      <div className="counter-display">
        <h1>Счетчик кликов</h1>
        <p>Кликов: {count}</p>
        <button onClick={handleReset}>Сбросить счетчик</button>
      </div>
    </div>
  );
};

export default App;