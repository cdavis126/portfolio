import React from "react";
import ProfileBox from "../components/ProfileBox";
import ContactBox from "../components/ContactBox";
import "../styles/About.css"; 

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