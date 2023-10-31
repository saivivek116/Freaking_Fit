import React from "react";
import WorkoutList from "./WorkoutList";

const Zones = () => {
    return (
        <div className="workouts">
            <h1 className="pt-5">Zones</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <WorkoutList
                            src="images/zones/fullbody.gif"
                            text="It typically includes a variety of exercises such as squats, lunges, push-ups, and rows, aiming to improve strength, endurance, and overall fitness."
                            label="Full Body"
                            path="/fullbody"
                        />
                        <WorkoutList
                            src="images/zones/hips.gif"
                            text="A hip-focused workout can help improve stability, enhance lower body strength, and contribute to better overall posture and balance."
                            label="Hips"
                            path="/hips"
                        />
                        <WorkoutList
                            src="images/zones/trapezius.gif"
                            text="Strengthening the trapezius muscles can help improve posture, reduce neck and shoulder tension, and enhance upper body strength and stability."
                            label="Trapezius"
                            path="/trapezius"
                        />
                    </ul>
                    <ul className="cards__items">
                        <WorkoutList
                            src="images/zones/forearms.gif"
                            text="A forearm-focused routine can help enhance grip strength, improve wrist stability, and contribute to overall arm strength and functionality. "
                            label="Forearms"
                            path="/forearms"
                        />
                        <WorkoutList
                            src="images/zones/calfs.gif"
                            text="A calf workout helps improve lower leg strength, stability, and endurance, which can be beneficial for activities such as running, walking, and jumping."
                            label="Calf"
                            path="/calf"
                        />
                        <WorkoutList
                            src="images/zones/core.gif"
                            text="Common exercises in a core workout include planks, crunches, leg raises, Russian twists, and bicycle crunches. A strong core is essential for stability, balance, and overall functional fitness."
                            label="Core"
                            path="/core"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Zones;
