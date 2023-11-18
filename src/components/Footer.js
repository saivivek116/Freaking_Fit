import React from "react";
// import { Link } fr
import "../Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="vertical-footer">
                <div className="footer-column">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" className="footer-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/workouts" className="footer-link">
                                Workouts
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/zones" className="footer-link">
                                Zones
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/diet" className="footer-link">
                                Diet
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/community" className="footer-link">
                                Community
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/help" className="footer-link">
                                Help
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul className="nav-list">
                        <h3>Social Media</h3>
                        <li className="nav-item pt-1">
                            <Link
                                to="https://facebook.com"
                                className="footer-link"
                            >
                                Facebook
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="https://twitter.com"
                                className="footer-link"
                            >
                                Twitter
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="https://instagram.com"
                                className="footer-link"
                            >
                                Instagram
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact</h3>
                    <p className="pt-1">123 Street Name</p>
                    <p>City, State, ZIP</p>
                    <p>Email: example@email.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
            </div>
            <small>Fitness Freak © 2023</small>
        </footer>
    );
}

export default Footer;
