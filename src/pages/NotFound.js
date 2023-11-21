import React from "react";
import { Link } from "react-router-dom";
import "./notfound.scss";

const NotFound = () => {
    return (
        <div className="notfound">
            <h3>OOPS! The page you are looking for isn't available.</h3>
            <br />
            <p>It might be under development or have been removed.</p>
            <p>We're sorry for any inconvenience!"</p>
            Please go back to
            <br />
            <Link to={"/"}>Home</Link>
        </div>
    );
};

export default NotFound;
