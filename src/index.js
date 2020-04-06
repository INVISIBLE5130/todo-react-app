import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './components/Navigation/Navigation';
import ToDoList from "./components/ToDoList/ToDoList";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <ToDoList />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
