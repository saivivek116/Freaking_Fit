import React from 'react';
import './help.scss';

const Help = () => {
  return (
    <div className="help-and-documentation">
      <h2>Help and Documentation</h2>

      {/* Quick Start Guide */}
      <section className="section">
        <h3>Quick Start Guide</h3>
        <p>
          Welcome to the Virtual Fitness Trainer App! Follow these steps to get started:
        </p>
        <ol>
          <li>Create an account or log in if you already have one.</li>
          <li>Explore available workouts and fitness plans.</li>
          <li>Select a workout, follow the instructions, and start exercising.</li>
          <li>Track your progress in the dashboard and set fitness goals.</li>
        </ol>
      </section>

      {/* Diets Section */}
      <section className="section">
        <h3>Diets</h3>
        <p>
          Our app offers a variety of diet plans to help you achieve your fitness goals. Here's how to use the Diets section:
        </p>
        <ol>
          <li>Navigate to the "Diets" tab in the app.</li>
          <li>Browse and select a diet plan that suits your needs and goals.</li>
        </ol>
      </section>

      {/* Workouts Section */}
      <section className="section">
        <h3>Workouts</h3>
        <p>
          Access a wide range of workouts with detailed instructions and accompanying GIFs to help you replicate exercises correctly:
        </p>
        <ol>
          <li>Go to the "Workouts" section in the app.</li>
          <li>Explore the list of workouts available.</li>
        </ol>
      </section>

      {/* Communities Section */}
      <section className="section">
        <h3>Communities</h3>
        <p>
          Connect with fellow fitness enthusiasts in our Communities. Here's how to get involved:
        </p>
        <ol>
          <li>Visit the "Communities" page.</li>
          <li>Explore various communities based on interests, locations, or fitness goals.</li>
          {/* <li>Join a community, participate in discussions, and share your fitness journey.</li> */}
        </ol>
      </section>

      {/* Contact Support */}
      <section className="section">
        <h3>Contact Support</h3>
        <p>
          If you need further assistance or have any questions, feel free to contact our support team at support@freakingfit.com.
        </p>
      </section>
    </div>
  );
}

export default Help;
