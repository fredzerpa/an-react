import React from 'react';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';
import './loginAndRegisterPage.scss';

const LoginAndRegisterPage = () => {
    return (
        <div className="login-register">
            <Login />
            <Register />
        </div>
    )
}

export default LoginAndRegisterPage;
