import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import reportWebVitals from './reportWebVitals';
import LoadingApp from './LoadingApp';
import App from './App.jsx';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';



ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      {/* <LoadingApp /> */}
      <App/>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
