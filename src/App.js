import React, { Fragment, Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import LoginAndRegisterPage from './pages/login-register/LoginAndRegisterPage';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/UserActions';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        });
      });
      
    } else {
      setCurrentUser(null);
    }
  });
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
          <Route 
            exact 
            path='/auth' 
            render={() => 
              this.props.currentUser ? (
              <Redirect to="/" />
              ) : (
              <LoginAndRegisterPage />
              )} />
        </Switch>
      </Fragment>
    );
  }
};

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
