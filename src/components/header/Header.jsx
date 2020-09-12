import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase-utils';

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>

            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/shop" className="option">CONTACT</Link>

                {
                    currentUser ? <div className="option" onClick={() => auth.signOut() }>LOGOUT</div> 
                    
                    : <Link to="/auth" className="option">LOGIN</Link>

                }
            </div>
        </div>
    )
}

export default Header;
