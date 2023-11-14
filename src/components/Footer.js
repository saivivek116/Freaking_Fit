import React from "react";
// import { Link } fr
import "../Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="vertical-footer">
			<div className="footer-column">
				<ul className="nav-list">
					<li className="nav-item">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link to="/workouts">Workouts</Link>
					</li>
					<li className="nav-item">
						<Link to="/zones">Zones</Link>
					</li>
					<li className="nav-item">
						<Link to="/diet">Diet</Link>
					</li>
					<li className="nav-item">
						<Link to="/community">Community</Link>
					</li>
					<li className="nav-item">
						<Link to="/help">Help</Link>
					</li>
				</ul>
			</div>
			<div className="footer-column">
				<ul className="nav-list">
					<h3>Social Media</h3>
					<li className="nav-item pt-1">
						<Link to="https://facebook.com">Facebook</Link>
					</li>
					<li className="nav-item">
						<Link to="https://twitter.com">Twitter</Link>
					</li>
					<li className="nav-item">
						<Link to="https://instagram.com">Instagram</Link>
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
		</footer>
	);
}

export default Footer;
