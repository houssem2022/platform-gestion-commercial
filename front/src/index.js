import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React, {  Suspense } from 'react';import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';


import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import store from './store'




React.icons = icons

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    
  <Provider store={store}>
    <App/>
  </Provider>
  </Suspense>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
