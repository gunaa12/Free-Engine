import React from 'react';
import ReactDOM from 'react-dom';
import './base/index.css';
import Home from './base/Home';
import reportWebVitals from './reportWebVitals';
import Suggestions from './base/Suggestions';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('Home')
);

ReactDOM.render(
  <React.StrictMode>
    <Suggestions />
  </React.StrictMode>,
  document.getElementById('Suggestions')
);

reportWebVitals();
