import React from "react";
import Project from "../components/Project"; // ✅ Import the correct component
import project1 from "../assets/PortfolioItem1.png";
import project2 from "../assets/PortfolioItem2.png";
import project3 from "../assets/PortfolioItem3.png";
import "../styles/Portfolio.css"; // ✅ Ensure styling is correct

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">My Projects</h1>
      <div className="portfolio-grid">
        <Project
          title="Programify"
          image={project1}
          github="https://github.com/celeste-hayes/programify"
          collaborators="Team Members"
          description="A full-stack PERN application for tracking coding projects."
        />
        <Project
          title="HydroHype"
          image={project2}
          github="https://github.com/Habichuela0/Water-Tracker-Webapp"
          collaborators="Team Members"
          description="A hydration tracker to help users stay hydrated."
        />
        <Project
          title="ReadMe Generator"
          image={project3}
          github="https://github.com/cdavis126/Cherie-Davis-ReadMe-07HW"
          collaborators="Solo Project"
          description="A CLI tool for generating README.md files using Node.js."
        />
      </div>
    </div>
  );
};

export default Portfolio;

