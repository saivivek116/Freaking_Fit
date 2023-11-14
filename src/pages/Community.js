import React from "react";
import CommunityCard from "../components/CommunityCard";
// import Footer from "../components/Footer";
import "./community.scss";
function Community() {
	return (
		<div className="community">
			<h1 className="pt-1">Welcome to Gym Communities!</h1>
			<CommunityCard />
		</div>
	);
}
export default Community;
