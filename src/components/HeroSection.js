import React from "react";
function HeroSection() {
    return (
        <div
            className="hero-container"
            style={{
                background: `url("/images/hero-fitness.webp") center center/cover no-repeat`,
            }}
        >
            <h1>GO BEYOND</h1>
            <p>What are you waiting for?</p>
            <p>GET STARTED</p>
            {/* <div className="pt-5">
				<Link to="/community">
					<button className="btn--outline">GET STARTED</button>
				</Link>
			</div> */}
        </div>
    );
}

export default HeroSection;
