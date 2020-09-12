import React, { Fragment, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import LoginAndRegisterPage from './pages/login-register/LoginAndRegisterPage';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';


class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        }, () => {
          
          console.log(this.state);
        });
      });

      
    } else {
      this.setState({
        currentUser: null
      })
    }
  });
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <Fragment>
        <Header currentUser={ this.state.currentUser }/>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
          <Route path='/auth' component={ LoginAndRegisterPage } />
        </Switch>
      </Fragment>
    );
  }

}

export default App;
