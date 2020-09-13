import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, type, label, value }) => {
    return (
        <>
            <label htmlFor={name}>
                {label}
                <input type={type} className="input" value={value} />
            </label>
        </>
    );
}

Input.propTypes = {
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default Input