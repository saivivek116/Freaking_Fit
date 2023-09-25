import React from "react";
import CommunityCard from "../components/CommunityCard";
import Footer from "../components/Footer";
import "./community.scss";
function Community() {
    return (
        <div>
            <header>
                <h1>Welcome to Gym Communities!</h1>
            </header>
            <CommunityCard />
            <Footer />
        </div>
    );
}
export default Community;
