import React, { Component } from 'react';
import './login.scss';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({
            email: '',
            password: ''
        });
    };

    handleChange = e => {
        e.preventDefault();

        const { value, name } = e.target

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="login">
                <h2>I already have an account</h2>
                <span>Login with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <input 
                        type="email"
                        name="email"
                        value={ this.state.email }
                        onChange={ this.handleChange }
                        required
                    />
                    <label htmlFor="email">Email</label>

                    <input 
                        type="password"
                        name="password"
                        value={ this.state.password }
                        onChange={ this.handleChange }
                        required
                    />
                    <label htmlFor="password">Password</label>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
};
