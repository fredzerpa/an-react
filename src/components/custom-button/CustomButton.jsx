import React from 'react';
import './customButton.scss';

const CustomButton = ({ children, isGoogleAuth, inverted, ...otherProps }) => {
    return (
        <div>
            <button className={`${inverted ? 'inverted' : ''} ${isGoogleAuth ? 'google-sign-in' : ''} custom-button`} { ...otherProps }>
                { children }
            </button>
        </div>
    )
}

export default CustomButton;
