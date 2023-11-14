import React from "react";
import WorkoutList from "./WorkoutList";

const Zones = () => {
	return (
		<div className="workouts">
			<h1 className="pt-1">Zones</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<WorkoutList src="images/zones/fairfax.jpeg" text="Visit our Fairfax-based workout center to enhance your physical fitness. While we're under construction, check out our workout section to learn more" label="Vienna" />
						<WorkoutList src="images/zones/vienna.jpeg" text="Vienna's workout center, under construction. Explore our workout section for fitness insights and updates." label="Fairfax" />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Zones;
