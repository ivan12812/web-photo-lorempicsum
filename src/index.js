import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function ErrMessage () {
  return (
    <h1>Error</h1>
  )
}

// function SuksesMessage () {
//  return(
//   <h1>sukses</h1>
//  )
// }

function Kondisi () {
  const status = "perempuan"
  if(status === "perempuan") {
    return (
      <App />
    )
  } else if(status === "Laki-laki") {
    return (
      <ErrMessage />
    )
  } else {
    return (
      <h1>woyy salah woy salah </h1>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Kondisi />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
