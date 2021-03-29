import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);