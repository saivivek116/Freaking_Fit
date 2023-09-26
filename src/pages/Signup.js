import React, { useState } from "react";
import AuthenticationScreenTemplate from "../components/authentication-template/AuthenticationScreenTemplate";
import TextInput from "../components/textbox/Textbox";
import { useNavigate } from "react-router-dom";
import credentails from "../credentials";
import Password from "../components/Password";

const Signup = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match, please give matching passwords");
            return;
        }
        if (password.length <= 8) {
            alert("Password should be atleast 8 characters long");
            return;
        }
        credentails.push({ username: email, password });
        navigate("/signin");
    };

    return (
        <AuthenticationScreenTemplate>
            <div className="header-text-container">
                <div className="title-text">
                    <div className="title">Welcome!</div>
                </div>
                <div className="sub-title">Please create your account</div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="textbox-container">
                    <div>Name</div>
                    <TextInput
                        className="input-textbox"
                        required={true}
                        onChange={(e) => {
                            setName(e);
                        }}
                        value={name}
                    />
                </div>

                <div className="textbox-container">
                    <div>Email</div>
                    <TextInput
                        className="input-textbox"
                        required={true}
                        type="email"
                        onChange={(e) => {
                            setEmail(e);
                        }}
                        value={email}
                    />
                </div>

                <div className="textbox-container">
                    <div>Password</div>
                    <Password
                        className="input-textbox"
                        type="password"
                        required={true}
                        onChange={(e) => {
                            setPassword(e);
                        }}
                        value={password}
                    />
                    <div>
                        <small>
                            Password should atleast contain 8 characters
                        </small>
                    </div>
                </div>

                <div className="textbox-container">
                    <div>Confirm Password</div>
                    <Password
                        className="input-textbox"
                        required={true}
                        type="password"
                        onChange={(e) => {
                            setConfirmPassword(e);
                        }}
                        value={confirmPassword}
                    />
                </div>
                <button className="signup-button" type="submit">
                    Sign Up
                </button>
            </form>
            <div className="buttons-container">
                <div className="item-button">
                    <div
                        className="footer-text bold"
                        onClick={() => {
                            navigate("/signin");
                        }}
                    >
                        Already have an account? Sign in!
                    </div>
                </div>
            </div>
        </AuthenticationScreenTemplate>
    );
};

export default Signup;
