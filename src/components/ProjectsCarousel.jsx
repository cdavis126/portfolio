import { Carousel } from "@material-tailwind/react";
import '../styles/home.css';
import project1 from '../assets/Portfolio Item 1.png';
import project2 from '../assets/Portfolio Item 2.png';
import project3 from '../assets/Portfolio Item 3.png';

const ProjectsCarousel = () => {
  return (
    <section className="projects-carousel">
      <h2>My Projects</h2>
      <Carousel className="rounded-xl shadow-lg">
        {/* Project 1 - Programify */}
        <div className="relative w-full">
          <img src={project1} alt="Programify" className="h-full w-full object-cover rounded-xl" />
          <div className="carousel-text">
            <h3>Programify</h3>
            <p>PERN stack application developed as project 2 with group members.</p>
          </div>
        </div>

        {/* Project 2 - HydroHype */}
        <div className="relative w-full">
          <img src={project2} alt="HydroHype" className="h-full w-full object-cover rounded-xl" />
          <div className="carousel-text">
            <h3>HydroHype</h3>
            <p>Water tracker and hydration calculation developed as project 1 with group members.</p>
          </div>
        </div>

        {/* Project 3 - ReadMe Generator */}
        <div className="relative w-full">
          <img src={project3} alt="ReadMe Generator" className="h-full w-full object-cover rounded-xl" />
          <div className="carousel-text">
            <h3>ReadMe Generator</h3>
            <p>Create your own ReadMe file for any web application or coding project using TypeScript.</p>
          </div>
        </div>
      </Carousel>
      <a href="/portfolio" className="view-more">View More</a>
    </section>
  );
};

export default ProjectsCarousel;

