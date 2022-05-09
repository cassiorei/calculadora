import React from 'react';
import ReactDOM from 'react-dom/client';
import { register } from 'register-service-worker';
import './index.css';
import Calculator from './main/Calculator';

 ReactDOM.render(
  <div>
      <h1> calculadora</h1>
      <Calculator/>
  </div>
 
 , document.getElementById('root'));
register();