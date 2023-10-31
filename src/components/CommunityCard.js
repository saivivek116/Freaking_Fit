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
                            src="images/weight.jpg"
                            text="Lifters, share your favorite lifting techniques, discuss workout plans, and track your progress with fellow warriors."
                            label="Weightlifting Warriors"
                        />
                        <CardItem
                            src="images/HIIT.jpg"
                            text="High-Intensity Interval Training! Discover intense workouts, exchange routines, and get inspired to push your limits."
                            label="HIIT Heroes"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/cardio.jpg"
                            text="Cardio enthusiasts, this is the place for you! Share your favorite running routes, cycling tips, and more!"
                            label="Cardio Crew"
                        />
                        <CardItem
                            src="images/yoga.jpg"
                            text="Find your inner peace and flexibility with us. Share yoga poses, meditation techniques, and connect with fellow yogis."
                            label="Yoga Enthusiasts"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CommunityCard;
