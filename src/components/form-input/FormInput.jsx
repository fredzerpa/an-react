import React from 'react';
import './formInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="group">
            <input type="text" className="form-input" onChange={ handleChange } { ...otherProps }/>

            {
                label ?
                (
                <label className={ `${ otherProps.value.length ? 'shrink' : ''} form-input-label` } htmlFor={ otherProps.name }>
                    { label }
                </label>
                )
                : null
            }
        </div>
    )
}

export default FormInput;