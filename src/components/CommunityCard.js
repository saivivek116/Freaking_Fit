import React from "react";
import CardItem from "./CardItem";

function CommunityCard() {
	return (
		<div className="cards" id="checkOut">
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem src="images/weight.jpg" text="Lifters, share your favorite lifting techniques, discuss workout plans, and track your progress with fellow warriors." label="Weightlifting Warriors" />
						<CardItem src="images/HIIT.jpg" text="High-Intensity Interval Training! Discover intense workouts, exchange routines, and get inspired to push your limits." label="HIIT Heroes" />
					</ul>
					<ul className="cards__items">
						<CardItem src="images/cardio.jpg" text="Cardio enthusiasts, this is the place for you! Share your favorite running routes, cycling tips, and more!" label="Cardio Crew" />
						<CardItem src="images/yoga.jpg" text="Find your inner peace and flexibility with us. Share yoga poses, meditation techniques, and connect with fellow yogis." label="Yoga Enthusiasts" />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default CommunityCard;
