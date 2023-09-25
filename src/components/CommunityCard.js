import React from "react";
import CardItem from "./CardItem";

// const communities = [
// 	{
// 	  id: 1,
// 	  name: 'Weightlifting Warriors',
// 	  imageSrc: 'weightlifting.jpg',
// 	  description: 'Join our weightlifting community to discuss lifting techniques, share workout plans, and track your progress.',
// 	},
// 	{
// 	  id: 2,
// 	  name: 'Cardio Crew',
// 	  imageSrc: 'cardio.jpg',
// 	  description: 'Cardio enthusiasts, this is the place for you! Share your favorite running routes, cycling tips, and more.',
// 	},
// 	// Add more communities as needed
//   ];

// function CommunityItem({ name, imageSrc, description }) {
// 	return (
// 	  <div className="community">
// 		{/* <img src={require(`images/${imageSrc}`).default} alt={name} /> */}
// 		<h3>{name}</h3>
// 		<p>{description}</p>
// 	  </div>
// 	);
//   }

function CommunityCard() {
    return (
        <div className="cards" id="checkOut">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/weight.webp"
                            text="Welcome to the Weightlifting Warriors community! Whether you are a seasoned lifter or just starting out, this is the place for you. Share your favorite lifting techniques, discuss workout plans, and track your progress with fellow warriors."
                            label="Weightlifting Warriors"
                        />
                        <CardItem
                            src="images/HIIT.webp"
                            text="Welcome to HIIT Heroes! High-Intensity Interval Training is the name of the game here. Join us to discover intense workouts, exchange HIIT routines, and get inspired to push your limits."
                            label="HIIT Heroes"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/cardio.webp"
                            text="Cardio enthusiasts, this is the place for you! Share your favorite running routes, cycling tips, and more.. Cardio community to perform activities such as treadmill and cycling"
                            label="Cardio Crew"
                        />
                        <CardItem
                            src="images/yoga.webp"
                            text="Welcome to the Yoga Enthusiasts community! Find your inner peace and flexibility with us. Share yoga poses, meditation techniques, and connect with fellow yogis on your journey to mindfulness."
                            label="Yoga Enthusiasts"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CommunityCard;
