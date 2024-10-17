import React from "react";
import "../../styles/homePage.css"; // Import your CSS file

const HomePage = () => {
  return (
    <div className="homePage">
      <h1 className="title">Welcome to Organize IT</h1>
      <div className="description">
        <p>
          Organize IT is a powerful and user-friendly solution designed to
          simplify the appointment scheduling process for businesses and their
          clients. With a focus on enhancing productivity and improving client
          interactions, our app caters to the unique needs of admins,
          pre-admins, users, and guests.
        </p>
        <h2 className="subTitle">Key Features</h2>
        <div className="featuresGrid">
          <div className="featureCard">
            <h3>Admin Dashboard</h3>
            <p>
              Gain complete control over the application with an intuitive
              dashboard, allowing you to manage pre-admins, users, and guests
              effortlessly.
            </p>
          </div>
          <div className="featureCard">
            <h3>Pre-Admin Functionality</h3>
            <p>
              Pre-admins can efficiently manage client relations by creating,
              assigning, and tracking tasks and appointments.
            </p>
          </div>
          <div className="featureCard">
            <h3>User Experience</h3>
            <p>
              Users enjoy a streamlined interface for tracking and scheduling
              appointments, ensuring they stay organized and informed.
            </p>
          </div>
          <div className="featureCard">
            <h3>Guest Scheduling</h3>
            <p>
              Guests can schedule appointments without the need for an account,
              enhancing accessibility and convenience.
            </p>
          </div>
          <div className="featureCard">
            <h3>Comprehensive Tracking</h3>
            <p>
              Robust tracking tools allow users to monitor tasks and
              appointments with filters for better management.
            </p>
          </div>
          <div className="featureCard">
            <h3>Intuitive Design</h3>
            <p>
              Designed with user experience in mind, our app offers a clean,
              responsive layout that adapts to various devices.
            </p>
          </div>
        </div>
        <h2 className="subTitle">Why Choose Organize IT?</h2>
        <p>
          Our app is tailored to meet the needs of businesses of all sizes, from
          small startups to large enterprises. By consolidating appointment
          management and task tracking into one platform, the Appointment
          Tracker App streamlines operations and boosts productivity.
        </p>
        <p>
          Join us today in transforming how you manage appointments and tasks.
          Experience the Appointment Tracker App and take your business to the
          next level!
        </p>
      </div>
      <div className="intended">
        <p>
          Designed with you in mind—experience effortless appointment tracking!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
