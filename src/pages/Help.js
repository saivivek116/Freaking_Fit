import React from "react";
import "./help.scss";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

const Help = () => {
	return (
		<>
			<div className="help-and-documentation">
				<h2 className="text-center">Help and Documentation</h2>

				{/* Quick Start Guide */}
				<section className="section">
					<h3 className="cards__item__text">Quick Start Guide</h3>
					<p className="cards__item__text">Welcome to the Virtual Fitness Trainer App! Follow these steps to get started:</p>
					<ol>
						<li className="cards__item__text">Create an account or log in if you already have one.</li>
						<li className="cards__item__text">Explore available workouts and fitness plans.</li>
						<li className="cards__item__text">Select a workout, follow the instructions, and start exercising.</li>
						<li className="cards__item__text">Track your progress in the dashboard and set fitness goals.</li>
					</ol>
				</section>

				{/* Diets Section */}
				<section className="section">
					<h3>Diets</h3>
					<p className="cards__item__text">Our app offers a variety of diet plans to help you achieve your fitness goals. Here's how to use the Diets section:</p>
					<ol>
						<li className="cards__item__text">
							Navigate to the{" "}
							<Link to="/diet" className="footer-link">
								Diet
							</Link>{" "}
							tab in the app.
						</li>
						<li className="cards__item__text">Browse and select a diet plan that suits your needs and goals.</li>
					</ol>
				</section>

				{/* Workouts Section */}
				<section className="section">
					<h3>Workouts</h3>
					<p className="cards__item__text">Access a wide range of workouts with detailed instructions and accompanying GIFs to help you replicate exercises correctly:</p>
					<ol>
						<li className="cards__item__text">
							Go to the{" "}
							<Link to="/workouts" className="footer-link">
								Workouts
							</Link>{" "}
							section in the app.
						</li>
						<li className="cards__item__text">Explore the list of workouts available.</li>
					</ol>
				</section>

				{/* Communities Section */}
				<section className="section">
					<h3>Communities</h3>
					<p className="cards__item__text">Connect with fellow fitness enthusiasts in our Communities. Here's how to get involved:</p>
					<ol>
						<li className="cards__item__text">
							Visit the{" "}
							<Link to="/community" className="footer-link">
								Community
							</Link>{" "}
							page.
						</li>
						<li className="cards__item__text">Explore various communities based on interests, locations, or fitness goals.</li>
						{/* <li>Join a community, participate in discussions, and share your fitness journey.</li> */}
					</ol>
				</section>

				{/* Contact Support */}
				<section className="section">
					<h3>Contact Support</h3>
					<p className="cards__item__text">
						If you need further assistance or have any questions, feel free to contact our support team at <a href="mailto:support@freakingfit.com">support@freakingfit.com</a>.
					</p>
				</section>
			</div>
			<div className="pb-2">
				<ContactForm />
			</div>
		</>
	);
};

export default Help;
