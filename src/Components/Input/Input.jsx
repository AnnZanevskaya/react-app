import React from 'react';

const Input = ({ name, type, label, value, placeholder, validationError, onChange }) => {
    if (!onChange)
        onChange = () => { };
    return (
        <div className="input__container">
            <label className="label">
                {label}
                <input id={name} className="input" type={type} value={value} placeholder={placeholder} onChange={onChange} />
                <span className="error-message">{validationError}</span>
            </label>
        </div>
    );
}

export default Input
