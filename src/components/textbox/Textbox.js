import React from "react";

const TextInput = (props) => {
    const {
        placeholder,
        className,
        required,
        value,
        type = "text",
        onChange,
        onBlur,
        onClick,
    } = props;
    return (
        <input
            value={value}
            required={required}
            placeholder={placeholder}
            className={`input-style ${className || ""}`}
            maxLength={props?.maxLength}
            minLength={props?.minLength}
            type={type}
            onChange={(event) => onChange(event?.target?.value)}
            onBlur={(event) => onBlur && onBlur(event?.target?.value)}
            onClick={() => onClick && onClick()}
        />
    );
};

export default TextInput;
