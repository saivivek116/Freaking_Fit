import React from "react";
import WorkoutList from "./WorkoutList";

function Workouts() {
	return (
		<div className="workouts">
			<h1 className="pt-5">Workouts</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<WorkoutList src="images/workouts/chest.gif" text="Diverse chest exercises, like bench presses and push-ups, ensure comprehensive chest muscle development" label="Chest" path="/xhwar" />
						<WorkoutList src="images/workouts/triceps.gif" text="Incorporate tricep dips, skull crushers, and tricep pushdowns for a complete triceps workout routine." label="Triceps" path="/triceps" />
						<WorkoutList src="images/workouts/lats.gif" text="Engage your back and lats with exercises like pull-ups, rows, and lat pulldowns for a balanced upper body workout." label="Back/Lats" path="/lats" />
					</ul>
					<ul className="cards__items">
						<WorkoutList src="images/workouts/biceps.gif" text="Include exercises like bicep curls, hammer curls, and chin-ups for a well-rounded biceps workout." label="Biceps" path="/biceps" />
						<WorkoutList src="images/workouts/shoulder.gif" text="Develop strong shoulders by incorporating overhead presses, lateral raises, and front raises into your workout routine." label="Shoulder" path="/shoulder" />
						<WorkoutList src="images/workouts/legs.gif" text="Strengthen your legs with squats, lunges, and leg presses to build overall lower-body strength." label="Legs" path="/legs" />
					</ul>
					<ul className="cards__items">
						<WorkoutList src="images/workouts/abs.gif" text="Achieve toned abs through exercises like planks, crunches, and leg raises for a well-defined core." label="Abs" path="/abs" />
						<WorkoutList src="images/workouts/yoga.gif" text="Experience inner peace and flexibility by embracing yoga, a practice that combines mindfulness, stretching, and deep breathing for holistic well-being." label="Yoga" path="/yoga" />
						<WorkoutList src="images/workouts/treadmill.gif" text="Cardio boosts heart health and weight management through activities like running and cycling that elevate your heart rate." label="Cardio" path="/cardio" />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Workouts;
