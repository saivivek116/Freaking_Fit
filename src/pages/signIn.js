import React, { useEffect, useState } from "react";

import TextInput from "../components/textbox/Textbox";
import AuthenticationScreenTemplate from "../components/authentication-template/AuthenticationScreenTemplate";
import { useNavigate } from "react-router-dom";
import credentails from "../credentials";
import Password from "../components/Password";

const SignIn = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const errors = {
        uname: "Invalid Username",
        pass: "Invalid Password",
    };

    const rememberCredentials = () => {
        if (remember) {
            localStorage.setItem("username", email);
            localStorage.setItem("password", password);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Find user login info
        console.log(credentails);
        const userData = credentails.find((user) => user.username === email);
        // Compare user info
        if (userData) {
            if (userData.password !== password) {
                // Invalid password
                setError({ name: "pass", message: errors.pass });
            } else {
                localStorage.setItem("isLoggedIn", true);
                rememberCredentials();
                alert("Login successful");
                navigate("/");
            }
        } else {
            // Username not found
            setError({ name: "uname", message: errors.uname });
        }
    };

    useEffect(() => {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        if (username && password) {
            setEmail(username);
            setPassword(password);
            setRemember(true);
        }
    }, []);

    return (
        <AuthenticationScreenTemplate>
            <div className="header-text-container">
                <div className="title-text">
                    <div className="title">Welcome back!</div>
                </div>
                <div className="sub-title">Please login to your account</div>
            </div>
            <form onSubmit={handleSubmit}>
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
                        required={true}
                        type="password"
                        onChange={(e) => {
                            setPassword(e);
                        }}
                        value={password}
                    />
                </div>
                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        checked={remember}
                        onChange={() => setRemember(!remember)}
                    />
                    <span className="checkbox-text">Remember me</span>
                </div>
                {error.name || error.message ? (
                    <div className="error-message">{error.message}</div>
                ) : null}
                <div>
                    <button className="signup-button" type="submit">
                        LOGIN
                    </button>
                </div>
            </form>
            <div className="buttons-container">
                <div className="item-button">
                    <div
                        className="footer-text"
                        onClick={() => {
                            navigate("/forget-password");
                        }}
                    >
                        Forgot Password?
                    </div>
                    <div
                        className="footer-text bold"
                        onClick={() => {
                            navigate("/signup");
                        }}
                    >
                        Not a member yet? Sign up now!
                    </div>
                </div>
            </div>
        </AuthenticationScreenTemplate>
    );
};

export default SignIn;
