import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../components/textbox/Textbox";
import { toast } from "react-toastify";
import AuthenticationScreenTemplate from "../components/authentication-template/AuthenticationScreenTemplate";

const ForgotPassword = (props) => {
    const [email, setEmail] = useState("");
    // const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success(
            "A link has been sent to your mail to reset your password.",
            {
                position: toast.POSITION.BOTTOM_RIGHT,
            }
        );
        setEmail("");
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
                <form onSubmit={handleSubmit}>
                    <div className="textbox-container">
                        <label htmlFor="email">Email</label>
                        <div className="input-container">
                            <TextInput
                                id="email"
                                className="forgot-password-input-textbox"
                                onChange={(e) => {
                                    setEmail(e);
                                }}
                                placeholder="username@gmail.com"
                                value={email}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="forgot-password-item-button">
                        <button
                            type="submit"
                            className="forgot-password-button forgot-password-signup-button"
                        >
                            Send Email
                        </button>
                    </div>
                    <Link to="/signin" className="button-link">
                        Back to Login
                    </Link>
                </form>
            </div>
        </AuthenticationScreenTemplate>
    );
};

export default ForgotPassword;
