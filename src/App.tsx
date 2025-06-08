import React, { useState } from 'react';
import './App.css';

const ALERTS = [
  "КРУТО!",
  "ВАУ!",
  "ПРОДОЛЖАЙ КЛИКАТЬ!",
  "ВОТ ЭТО РЕЗУЛЬТАТ!",
  "КРУТО!",
  "ВАУ!",
  "ПРОДОЛЖАЙ КЛИКАТЬ!",
  "ВОТ ЭТО РЕЗУЛЬТАТ!",
  "КРУТО!",
  "ВАУ!",
  "ПРОДОЛЖАЙ КЛИКАТЬ!",
]

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
      <h1>Счетчик кликов</h1>
      <p>Кликов: {count} {count === 69 && 'NICE'}</p>
      <button onClick={handleReset}>Сбросить счетчик</button>
      <div style={{ height: "1px" }}>
      {
        alert && <div className='alert'>{ALERTS[Math.floor(Math.random() * 11)]}</div>
      }
      </div>
    </div>
  );
};

export default App;