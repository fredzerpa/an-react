import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils';
import './register.scss';

export default class Register extends Component {

    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            // Clear the form
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            const errorCode    = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
                alert(`The password is too weak, ${errorMessage.toLowerCase()}`);
            } else if(errorCode === 'auth/email-already-in-use') {
                alert('This email is already in use');
            }
        }
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({[name]: value});
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state

        return (
            <div className="register">
                <h2 className="title">I don't have an account</h2>
                <span>Register with an email and password</span>

                <form className="register-form" onSubmit={ this.handleSubmit }>
                    <FormInput
                        type='text'
                        name="displayName"
                        value={ displayName }
                        onChange={ this.handleChange }
                        label='Display name'
                        required
                    />

                    <FormInput
                        type='email'
                        name="email"
                        value={ email }
                        onChange={ this.handleChange }
                        label='Email'
                        required
                    />

                    <FormInput
                        type='password'
                        name="password"
                        value={ password }
                        onChange={ this.handleChange }
                        label='Password'
                        required
                    />

                    <FormInput
                        type='password'
                        name="confirmPassword"
                        value={ confirmPassword }
                        onChange={ this.handleChange }
                        label='Confirm password'
                        required
                    />

                    <CustomButton type="submit">Register</CustomButton>
                </form>
            </div>
        )
    }
};
