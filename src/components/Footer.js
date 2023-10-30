import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import { Link } from "react-router-dom";
import "../Footer.scss";

function Footer() {
    return (
        <div className="footer-container">
            {/* <div className="footer-link-wrapper">
                
            </div> */}
            <div className="footer-logo">
                <img src="/images/logo-fit.png" alt="Logo" />
            </div>
            <div className="contact-us">
                <h2>
                    <FontAwesomeIcon icon={faPhone} /> Contact Us
                </h2>
                <p>+157147837490</p>
                <p>+157122837490</p>
            </div>
            <div>
                <small className="color-white">Fitness Freak © 2023</small>
            </div>
        </div>
    );
}

export default Footer;
