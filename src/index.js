import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
