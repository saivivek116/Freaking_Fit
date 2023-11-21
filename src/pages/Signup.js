import React, { useState } from "react";
import AuthenticationScreenTemplate from "../components/authentication-template/AuthenticationScreenTemplate";
import TextInput from "../components/textbox/Textbox";
import { Link, useNavigate } from "react-router-dom";
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
                    <label htmlFor="username">Name</label>
                    <div className="input-container">
                        <TextInput
                            className="input-textbox"
                            required={true}
                            onChange={(e) => {
                                setName(e);
                            }}
                            placeholder="Example: John Doe"
                            value={name}
                            id="username"
                        />
                    </div>
                </div>

                <div className="textbox-container">
                    <label htmlFor="email">Email</label>
                    <div className="input-container">
                        <TextInput
                            className="input-textbox"
                            id="email"
                            required={true}
                            type="email"
                            placeholder="Example: John@gmail.com"
                            onChange={(e) => {
                                setEmail(e);
                            }}
                            value={email}
                        />
                    </div>
                </div>

                <div className="textbox-container">
                    <label htmlFor="password">Password</label>
                    <div className="password input-container">
                        <Password
                            className="input-textbox"
                            type="password"
                            id="password"
                            required={true}
                            onChange={(e) => {
                                setPassword(e);
                            }}
                            value={password}
                        />
                        <small>
                            Password should atleast contain 8 characters
                        </small>
                    </div>
                </div>

                <div className="textbox-container">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="password input-container">
                        <Password
                            id="confirmPassword"
                            className="input-textbox"
                            required={true}
                            type="password"
                            onChange={(e) => {
                                setConfirmPassword(e);
                            }}
                            value={confirmPassword}
                        />
                    </div>
                </div>
                <button className="signup-button" type="submit">
                    Sign Up
                </button>
            </form>
            <div className="buttons-container">
                <div className="item-button">
                    <p className="footer-text bold">
                        Already have an account?{" "}
                        <Link to="/signin" className="button-link">
                            Sign in!
                        </Link>
                    </p>
                </div>
            </div>
        </AuthenticationScreenTemplate>
    );
};

export default Signup;
