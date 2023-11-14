import React from "react";
import DietItem from "./DietItem";

function Diet() {
	return (
		<>
			<div className="cards">
				<h1>Discover Your Path to Wellness: Explore Our Diet Plans</h1>
				<div className="cards__container">
					<div className="cards__wrapper">
						<ul className="cards__items">
							<DietItem
								path="/keto"
								src="images/keto.webp"
								text="The Keto Diet is a low-carb, high-fat diet that has been shown to help people lose weight. Join our Keto community to share recipes, meal plans, and success stories."
								label="Keto Diet"
							/>
							<DietItem
								path="/paleo"
								src="images/paleo.webp"
								text="The Paleo Diet focuses on eating foods that our ancestors would have consumed, such as lean meats, fish, fruits, and vegetables. Connect with fellow Paleolithic eaters and discover new recipes."
								label="Paleo Diet"
							/>
							<DietItem
								path="/vegan"
								src="images/vegan.webp"
								text="Vegans abstain from all animal products. If you follow a vegan lifestyle or are interested in transitioning, join our Vegan community for support, recipes, and tips."
								label="Vegan Diet"
							/>
						</ul>
						<ul className="cards__items">
							<DietItem
								path="/mediterranean"
								src="images/mediterranean.webp"
								text="The Mediterranean Diet emphasizes whole grains, fruits, vegetables, and healthy fats. Join our Mediterranean community to learn about this heart-healthy way of eating."
								label="Mediterranean Diet"
							/>
							<DietItem
								path="/intermittent"
								src="images/intermittent.webp"
								text="Intermittent Fasting involves cycling between periods of fasting and eating. Learn about different fasting protocols and share your experiences with our community."
								label="Intermittent Diet"
							/>
							<DietItem
								path="/vegetarian"
								src="images/vegetarian.webp"
								text="The Vegetarian Diet excludes meat but includes plant-based foods. Connect with fellow vegetarians and explore a variety of meatless recipes and meal plans."
								label="Vegetarian Diet"
							/>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Diet;
