import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/Homepage';

const HatsPage = () => (
  <div>
    <h1> HATS page</h1>
  </div>
);

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/hats' component={ HatsPage } />
      </Switch>
    </Fragment>
  );
}

export default App;
