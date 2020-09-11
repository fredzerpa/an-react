import React, { Component } from 'react';
import './login.scss';
import FormInput from '../form-input/FormInput';

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
                    <FormInput 
                        type="email"
                        name="email"
                        value={ this.state.email }
                        label="Email"
                        handleChange={ this.handleChange }
                        required
                    />

                    <FormInput 
                        type="password"
                        name="password"
                        value={ this.state.password }
                        label="Password"
                        handleChange={ this.handleChange }
                        required
                    />

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
};