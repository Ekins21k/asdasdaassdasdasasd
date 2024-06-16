import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Если вы хотите начать измерять производительность в своем приложении, передайте функцию
// для записи результатов в журнал (например: reportWebVitals(console.log))
// или отправьте в конечную точку аналитики. Подробнее: https://bit.ly/CRA-vitals
reportWebVitals();
