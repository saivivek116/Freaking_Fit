import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/textbox/Textbox";
import AuthenticationScreenTemplate from "../components/authentication-template/AuthenticationScreenTemplate";

const ForgotPassword = (props) => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <AuthenticationScreenTemplate>
            <div className="forgot-password-content">
                <div className="forgot-password-title-text">
                    <div className="forgot-password-title">
                        Forgot Password?
                    </div>
                </div>
                <div className="forgot-password-sub-title">
                    We’ll send you a password reset link.
                </div>

                <div className="forgot-password-textbox-container">
                    <div>Email</div>
                    <TextInput
                        className="forgot-password-input-textbox"
                        onChange={(e) => {
                            setEmail(e);
                        }}
                        value={email}
                    />
                </div>

                <div className="forgot-password-item-button">
                    <div
                        className="forgot-password-signup-button"
                        onClick={handleSubmit}
                    >
                        Submit
                    </div>
                </div>

                <div
                    className="forgot-password-footer-text"
                    onClick={() => {
                        navigate("/signin");
                    }}
                >
                    Back to Login
                </div>
            </div>
        </AuthenticationScreenTemplate>
    );
};

export default ForgotPassword;
