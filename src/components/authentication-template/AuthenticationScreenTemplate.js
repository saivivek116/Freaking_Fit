import React from "react";
import "./authentication-screen-template.scss";

const AuthenticationScreenTemplate = (props) => {
    const { children } = props;
    return (
        <div className="authentication-page-container">
            <div className="left-container">
                <p className="logo">Freaking </p>
                <p className="logo"> Fit</p>
            </div>
            <div className="right-container">
                <div className="right-content-container">{children}</div>
            </div>
        </div>
    );
};

export default AuthenticationScreenTemplate;
