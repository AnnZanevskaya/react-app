import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, type, label, value, placeholder }) => {
    return (
        <div className="input__container">
            <label className="label" htmlFor={name}>
                {label}
                <input id={name} className="input" type={type} value={value} placeholder={placeholder} />
            </label>
        </div>
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default Input