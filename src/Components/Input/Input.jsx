import React from 'react';

const Input = ({ name, type, label, value, placeholder, onChange }) => {
    return (
        <div className="input__container">
            <label className="label">
                {label}
                <input id={name} className="input" type={type} value={value} placeholder={placeholder} onChange={onChange} />
            </label>
        </div>
    );
}

export default Input
