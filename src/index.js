import React from 'react';
import ReactDOM from 'react-dom';
import './base/index.css';
import Home from './base/Home';
import reportWebVitals from './reportWebVitals';
import Recommend from './base/Recommend';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('Home')
);

ReactDOM.render(
  <React.StrictMode>
    <Recommend />
  </React.StrictMode>,
  document.getElementById('Recommend')
);

reportWebVitals();
