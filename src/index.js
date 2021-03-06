import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './views/App';

// import coreui/react style
import '@coreui/coreui/dist/js/coreui.bundle';
import '@coreui/coreui/dist/css/coreui.min.css';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
      <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
