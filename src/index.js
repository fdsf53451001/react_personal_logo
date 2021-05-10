import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import reportWebVitals from './js/reportWebVitals';
import PersonalLogo from './js/PersonalLogo';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <PersonalLogo source='https://api.github.com/users/fdsf53451001'/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
