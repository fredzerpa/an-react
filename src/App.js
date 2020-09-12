import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import LoginLogoutPage from './pages/login-logout/LoginLogoutPage';


function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/shop' component={ ShopPage } />
        <Route path='/auth' component={ LoginLogoutPage } />
      </Switch>
    </Fragment>
  );
}

export default App;
