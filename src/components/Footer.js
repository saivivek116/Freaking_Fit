import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<>
			<div className="footer-container">
				<div className="footer-links">
					<div className="footer-link-wrapper">
						<div className="footer-link-items">
							<Link to="/">
								<img src="/images/logo-fit.png" className="footer-logo" alt="Logo" />
							</Link>
						</div>

						<div className="footer-link-items">
							<h2>About Us</h2>
						</div>
						<div className="footer-link-items">
							<h2>Contact Us</h2>
						</div>
						<div className="footer-link-items">
							<h2>Social Media</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-container">
				<div className="footer-links">
					<div className="footer-link-wrapper">
						<div className="footer-link-items">
							<small className="color-white">Fitness Freak © 2023</small>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
