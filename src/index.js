import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './components/Navigation';
import Tasks from "./components/Tasks";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Tasks />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
