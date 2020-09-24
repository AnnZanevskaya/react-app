import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, type, label, value, placeholder }) => {
    return (
        <div className="input__container">
            <label className="label" htmlFor={name}>
                {label}
            </label>
            <input className="input" type={type} value={value} placeholder={placeholder}/>
        </div>
    );
}

Input.propTypes = {
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default Input