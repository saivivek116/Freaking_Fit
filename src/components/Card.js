import React from "react";
import CardItem from "./CardItem";

function Cards() {
	return (
		<div className="cards">
			<h1>Check out!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem src="images/popular-workouts.webp" text="Popular workouts include HIIT, weightlifting, yoga, and running." label="Workouts" path="/workouts" />
						<CardItem src="images/diet.webp" text="A balanced gym diet fuels workouts, promotes muscle growth and recovery" label="Diet" path="/diet" />
					</ul>
					<ul className="cards__items">
						<CardItem src="images/zones.webp" text="Gym zones categorize workout areas for efficient use" label="Zones" path="/zones" />
						<CardItem src="images/community.webp" text="Gym communities offer support and motivation for fitness goals" label="Community" path="/community" />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
