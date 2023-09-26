import React, { useState } from "react";
import { Link /*useLocation*/ } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const navigate = useNavigate();
    // const [activeNav, setActiveNav] = useState("home");

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    // const location = useLocation();
    // const pathname = location.pathname;
    // if (pathname === "/signin" || pathname === "/signup") {
    //     return null;
    // }

    const logout = async () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <small className="logo-text">Freaking fit</small>
                    {/* <Link to="/" onClick={closeMobileMenu}>
                        <img
                            src="/images/logo-fit.png"
                            alt="Logo"
                            className="navbar-logo"
                        />
                    </Link> */}
                    <div
                        className="menu-icon"
                        role="button"
                        tabIndex="0"
                        onClick={handleClick}
                    >
                        {click ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="currentColor"
                                className="bi bi-x color-white"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="currentColor"
                                className="bi bi-list color-white"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                />
                            </svg>
                        )}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/workouts"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Workouts
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/diet"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Diet
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/community"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Community
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/help"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Help
                            </Link>
                        </li>
                        {isLoggedIn ? (
                            <li>
                                <a
                                    onClick={logout}
                                    className="nav-links"
                                    href="/"
                                >
                                    Logout
                                </a>
                            </li>
                        ) : (
                            <li>
                                <Link
                                    to="/signin"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
