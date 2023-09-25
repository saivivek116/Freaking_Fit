import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

    if (!isAuthenticated) {
        alert("You need to login first");
        return <Navigate to="/signin" />;
    }
    return children;
};

export default PrivateRoute;
