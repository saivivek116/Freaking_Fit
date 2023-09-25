import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="footer-container">
			<div className="footer-link-wrapper">
				<div className="footer-logo">
					<Link to="/" className="social-logo">
						<img src="/images/logo-fit.png" alt="Logo" />
					</Link>
					<small className="color-white">Fitness Freak © 2023</small>
				</div>
			</div>

			<div className="footer-links">
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>About Us</h2>
					</div>
					<div className="footer-link-items">
						<h2>Contact Us</h2>
					</div>
				</div>
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>Social Media</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
