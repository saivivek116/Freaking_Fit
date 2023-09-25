import React from "react";
import WorkoutList from "./WorkoutList";

function Workouts() {
	return (
		<div className="workouts">
			<h1 className="pt-5">Workouts</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<WorkoutList src="images/workouts/chest.gif" text="Pump up your chest" label="Chest" path="/xhwar" />
						<WorkoutList src="images/workouts/triceps.gif" text="Grow your triceps" label="Triceps" path="/triceps" />

						<WorkoutList src="images/workouts/lats.gif" text="Shred your lats" label="Lats" path="/lats" />
						<WorkoutList src="images/workouts/biceps.gif" text="Gain your biceps" label="Biceps" path="/biceps" />
					</ul>
					<ul className="cards__items">
						<WorkoutList src="images/workouts/shoulder.gif" text="Flex your shoulder" label="Shoulder" path="/shoulder" />
						<WorkoutList src="images/workouts/legs.gif" text="Say no to chicken log" label="Legs" path="/legs" />
						<WorkoutList src="images/workouts/abs.gif" text="Lets gain some packs" label="Abs" path="/abs" />
						<WorkoutList src="images/workouts/yoga.gif" text="Namaste! check on Yoga" label="Yoga" path="/yoga" />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Workouts;
