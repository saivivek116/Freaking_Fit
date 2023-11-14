import React from "react";
import { Link } from "react-router-dom";

function DietItem(item) {
	const { path, label, src, text } = item;
	return (
		<>
			<li className="cards__item">
				<Link className="cards__item__link" to={path}>
					<figure className="cards__item__pic-wrap" data-category={label}>
						<img className="cards__item__img" alt="Fitness Freak" src={src} />
					</figure>
					<div className="cards__item__info">
						<h5 className="cards__item__text">{text}</h5>
					</div>
				</Link>
			</li>
		</>
	);
}

export default DietItem;
