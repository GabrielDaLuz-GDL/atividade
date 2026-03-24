import React from 'react';
import ReactDOM from "react-dom/client";
import Router from './routes';
import { RouterProvider } from "react-router-dom";
import AgeProvider from './context/ageProvider';
import FooterProvider from './context/footerProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AgeProvider>
      <FooterProvider>
        <RouterProvider router ={Router}/>
      </FooterProvider>
    </AgeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
