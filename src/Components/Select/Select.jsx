import React, { useState } from 'react';
import MultiSelect from 'react-multi-select-component';

const Select = ({ name, label, options, preselected,validationError, onSelectChange }) => {
    const [selected, setSelected] = useState(preselected || []);

    const onChange = (selectedElements) => {
        setSelected(selectedElements);
        onSelectChange('genres', selectedElements.map((el) => el.value));
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
                <span className="error-message">{validationError}</span>
        </div>
    );
}

export default Select
