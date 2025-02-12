import React from "react";
import ProfileBox from "../ProfileBox";
import ContactBox from "../ContactBox";
import "../styles/AboutMe.css"; // ✅ Ensure this CSS file exists

const AboutMe = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <ProfileBox />
        <ContactBox />
      </div>
    </div>
  );
};

export default AboutMe;

