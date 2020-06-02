import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {UserContextProvider} from './components/UserContext/UserContext';
ReactDOM.render(
  <UserContextProvider>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </UserContextProvider>
, document.getElementById('root'));
