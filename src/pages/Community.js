import React from "react";
import CommunityCard from "../components/CommunityCard";
import Footer from "../components/Footer";
import "./community.scss";
function Community() {
    return (
        <div className="community pt-5">
            <h1>Welcome to Gym Communities!</h1>
            <CommunityCard />
            <Footer />
        </div>
    );
}
export default Community;
