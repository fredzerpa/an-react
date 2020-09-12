import React from 'react';
import './customButton.scss';

const CustomButton = ({ children, isGoogleAuth, ...otherProps }) => {
    return (
        <div>
            <button className={`${isGoogleAuth ? 'google-sign-in' : ''} custom-button`} { ...otherProps }>
                { children }
            </button>
        </div>
    )
}

export default CustomButton;
