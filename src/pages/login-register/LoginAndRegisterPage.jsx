import React from 'react';
import './loginAndRegisterPage.scss';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';

const LoginAndRegisterPage = () => {
    return (
        <div className="login-register">
            <Login />
            <Register />
        </div>
    )
}

export default LoginAndRegisterPage;
