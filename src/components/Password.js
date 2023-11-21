import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const Password = (props) => {
    const {
        placeholder,
        className,
        required,
        value,
        onChange,
        onBlur,
        onClick,
        ...delegate
    } = props;
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(faEye);
    const changeType = () => {
        setType(type === "password" ? "text" : "password");
    };

    return (
        <>
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
                {...delegate}
            />
            {
                <FontAwesomeIcon
                    icon={icon}
                    className="password-icon"
                    title={type === "password" ? "Show" : "Hide"}
                    onClick={() => {
                        changeType();
                        setIcon(icon === faEye ? faEyeSlash : faEye);
                    }}
                />
            }
        </>
    );
};

export default Password;
