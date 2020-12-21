import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App';
import Counter from './Counter';
import Feventhandler from './Feventhandler';
import Ceventhandler from './Ceventhandler';
import Renderlists from './Renderlists';
import Todolist from './Todolist';
import Lifecyclehooks from './Lifecyclehooks';
import Ajaxdemo from './Ajaxdemo';
 */
import reportWebVitals from './reportWebVitals';
import Form from './Form';




ReactDOM.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  