import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Navbar.scss";
import { faCircleQuestion, faHouse, faLocationDot, faDumbbell, faPeopleGroup, faUtensils, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.scss";

const TABS = [
	{
		name: "Home",
		path: "/",
		iconName: faHouse,
	},
	{
		name: "Workouts",
		path: "/workouts",
		iconName: faDumbbell,
		isDropdown: true,
		dropdownItems: [
			{
				name: "Workouts",
				path: "/workouts",
			},
			{
				name: "Yoga",
				path: "/workouts#yoga",
			},
			{
				name: "Cardio",
				path: "/workouts#cardio",
			},
		],
	},
	{
		name: "Zones",
		path: "/zones",
		iconName: faLocationDot,
	},
	{
		name: "Diet",
		path: "/diet",
		iconName: faUtensils,
	},
	{
		name: "Community",
		path: "/community",
		iconName: faPeopleGroup,
	},
	{
		name: "Help",
		path: "/help",
		iconName: faCircleQuestion,
	},
	{
		name: "Profile",
		path: "/profile",
		iconName: faUser,
	},
];

function Navbar() {
	const [click, setClick] = useState(false);
	// const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const navigate = useNavigate();

	const [activeNav, setActiveNav] = useState("home");

	const isLoggedIn = localStorage.getItem("isLoggedIn");
	const location = useLocation();
	// const pathname = location.pathname;
	// if (pathname === "/signin" || pathname === "/signup") {
	//     return null;
	// }

	const logout = async () => {
		localStorage.removeItem("isLoggedIn");
		navigate("/");
	};

	const handleNavChange = (activeNav) => {
		setActiveNav(activeNav);
		closeMobileMenu();
	};

	useEffect(() => {
		// Update the active nav based on the current path
		const currentPath = location.pathname.substring(1);
		// console.log(currentPath);
		setActiveNav(currentPath);
	}, [location]);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/">
						<img src="/images/logo-fit.png" alt="Logo" className="navbar-logo" />
					</Link>
					<small className="logo-text">Freaking fit</small>

					<div className="menu-icon" role="button" tabIndex="0" onClick={handleClick}>
						{click ? (
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x color-white" viewBox="0 0 16 16">
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
							</svg>
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list color-white" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
							</svg>
						)}
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						{TABS.map((tab) => (
							<li className={`nav-item ${activeNav === tab.path.substring(1) ? "active" : ""} ${tab.isDropdown ? "dropdown" : ""}`} key={tab.name}>
								{tab.isDropdown ? (
									<div className="nav-links dropdown">
										<FontAwesomeIcon icon={tab.iconName} />
										<div className="dropdown-content">
											{tab.dropdownItems.map((item) => (
												<Link to={item.path} key={item.name} className="dropdown-item" onClick={() => (item.onClick ? item.onClick() : handleNavChange(item.name.toLowerCase()))}>
													{item.name}
												</Link>
											))}
										</div>
									</div>
								) : (
									<Link to={tab.path} className="nav-links" onClick={() => handleNavChange(tab.name.toLowerCase())}>
										<FontAwesomeIcon icon={tab.iconName} /> {/* {tab.name} */}
									</Link>
								)}
							</li>
						))}
					</ul>
					{isLoggedIn ? (
						<>
							<a onClick={logout} className="nav-links" href="/">
								Logout
							</a>
						</>
					) : (
						<>
							<Link to="/signin" className="nav-links" onClick={closeMobileMenu}>
								Login
							</Link>
						</>
					)}
				</div>
			</nav>
		</>
	);
}

export default Navbar;
