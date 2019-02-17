import React from 'react'

const Input = ({
    labelText,
    type,
    id,
    placeholder,
    value,
    onChange
}) => (
        <div>
            <label htmlFor={id}>{labelText}</label>
            <input
                className="input"
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )

export default Input;