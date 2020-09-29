import React, { useState } from 'react';
import MultiSelect from 'react-multi-select-component';
import './style.css';

const Select = ({ name, label, options, preselected }) => {
    const [selected, setSelected] = useState(preselected || []);

    const onChange = (selectedElements) => {
        setSelected(selectedElements);
    };

    return (
        <div className="input__container">
            <label htmlFor={name} className="label">
                {label}
            </label>
            <MultiSelect
                name={name}
                options={options}
                value={selected}
                onChange={onChange}
                disableSearch={true}
                hasSelectAll={false} 
                overrideStrings={{"selectSomeItems": "Select Genre"}}/>
        </div>
    );
}

export default Select
