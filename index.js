import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Chai from './Chai';

const root = ReactDOM.createRoot(document.getElementById('root'));
//react creates its own dom has method create root
//above we search  root (by using js) root is present in index.
//inex.html and our app is load inside that html file
//virtual dom reference stored inside rooot variable

root.render(   //render below app through virtual dom
 <>
    <App />
    <Chai/>
  </>
);
