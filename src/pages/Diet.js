import React from "react";
import "./diet.scss";

const dietPlans = [
    {
        id: 1,
        name: "Keto Diet",
        imageSrc: "keto.webp",
        description:
            "The Keto Diet is a low-carb, high-fat diet that has been shown to help people lose weight. Join our Keto community to share recipes, meal plans, and success stories.",
    },
    {
        id: 2,
        name: "Paleo Diet",
        imageSrc: "paleo.webp",
        description:
            "The Paleo Diet focuses on eating foods that our ancestors would have consumed, such as lean meats, fish, fruits, and vegetables. Connect with fellow Paleolithic eaters and discover new recipes.",
    },
    {
        id: 3,
        name: "Vegan Diet",
        imageSrc: "vegan.webp",
        description:
            "Vegans abstain from all animal products. If you follow a vegan lifestyle or are interested in transitioning, join our Vegan community for support, recipes, and tips.",
    },
    {
        id: 4,
        name: "Mediterranean Diet",
        imageSrc: "mediterranean.webp",
        description:
            "The Mediterranean Diet emphasizes whole grains, fruits, vegetables, and healthy fats. Join our Mediterranean community to learn about this heart-healthy way of eating.",
    },
    {
        id: 5,
        name: "Intermittent Fasting",
        imageSrc: "intermittent.webp",
        description:
            "Intermittent Fasting involves cycling between periods of fasting and eating. Learn about different fasting protocols and share your experiences with our community.",
    },
    {
        id: 6,
        name: "Vegetarian Diet",
        imageSrc: "vegetarian.webp",
        description:
            "The Vegetarian Diet excludes meat but includes plant-based foods. Connect with fellow vegetarians and explore a variety of meatless recipes and meal plans.",
    },
    // Add more diet plans as needed
];

function DietItem({ name, imageSrc, description }) {
    return (
        <li className="diet-plan-item">
            {/* <div className="diet-image"> */}
            <img src={`images/${imageSrc}`} alt={name} />
            {/* </div> */}
            <div className="diet-plan-info">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </li>
    );
}

function Diet() {
    return (
        <div className="diet-page pt-5">
            <section id="diet">
                <h1>Discover Your Path to Wellness: Explore Our Diet Plans</h1>
                <div className="diet-plan-list">
                    {dietPlans.map((dietPlan) => (
                        <DietItem key={dietPlan.id} {...dietPlan} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Diet;
