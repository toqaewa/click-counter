import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [randCriteria, setRandCriteria] = useState<number>(0);
  const [alert, setAlert] = useState<boolean>(false);

  const handleClick = () => {
    setAlert(false);
    setCount(prevCount => prevCount + 1);
    const newCriteria = Math.floor(Math.random() * 11);
    setRandCriteria(newCriteria);
    newCriteria > 5 && setAlert(true);
    console.log(randCriteria, alert);
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCount(0);
    setAlert(false);
  };

  return (
    <div className="app" onClick={handleClick}>
      <div className="counter-display">
        <h1>Счетчик кликов</h1>
        <p>Кликов: {count}</p>
        <button onClick={handleReset}>Сбросить счетчик</button>
        {
          alert && <div style={{ color: "red" }}>ALERT!!!</div>
        }
      </div>
    </div>
  );
};

export default App;