import React from "react";
import { Link } from "react-router-dom";
import "./notfound.scss";

const NotFound = () => {
    return (
        <>
            <h2 className="notfound">
                404 Page Not Found!
                <Link to={"/"}>Home</Link>
            </h2>
        </>
    );
};

export default NotFound;
