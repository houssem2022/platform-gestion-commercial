import React, { Component,useState,useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import fire from './firebase';
import './scss/style.scss';
import Home from './home';
//import Login from '../src/views/pages/login/Login';
import TheLayout from '../src/containers/TheLayout';
import TheLayout_client from './containers/TheLayout_client';
//const TheLayout = React.lazy(() => import('../src/containers/TheLayout'));

import globalStore from './store/useglobalstate'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


// Containers
//const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));


const store=globalStore();



class App extends Component {
  
    render() {

      return (
        <HashRouter>
            <React.Suspense fallback={loading}>
              <Switch>
                <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
                <Route path="/" name="Home" render={props => <TheLayout store={store} is_admin={true}/>} />

              </Switch>
            </React.Suspense>
        </HashRouter>
  );}


}




export default App;
