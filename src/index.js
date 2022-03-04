import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WebFont from "webfontloader";

WebFont.load({
  google: {
      families: ['Poppins', "Courier New:700","Roboto:400,700","Tangerine:700","Lato:400"]
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback ={<div>Loading... </div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
