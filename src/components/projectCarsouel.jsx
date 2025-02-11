import '../styles/home.css';

const ProjectsCarousel = () => {
  return (
    <section className="projects-carousel">
      <h2>My Projects</h2>
      <div className="carousel">
        <img src="/project1.jpg" alt="Project 1" />
        <img src="/project2.jpg" alt="Project 2" />
        <img src="/project3.jpg" alt="Project 3" />
      </div>
      <a href="/portfolio" className="view-more">View More</a>
    </section>
  );
};

export default ProjectsCarousel;
