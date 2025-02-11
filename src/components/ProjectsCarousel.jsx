import { Carousel, CarouselItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import project1 from "../assets/PortfolioItem1.png";
import project2 from "../assets/PortfolioItem2.png";
import project3 from "../assets/PortfolioItem3.png";

const ProjectsCarousel = () => {
  return (
    <section className="container text-center my-4">
      <h2 className="mb-4">My Projects</h2>
      <Carousel className="shadow-lg rounded">
        <CarouselItem>
          <img src={project1} className="d-block w-100 rounded" alt="Programify" />
          <Carousel.Caption>
            <h3>Programify</h3>
            <p>PERN stack application developed as project 2 with group members.</p>
          </Carousel.Caption>
        </CarouselItem>

        <CarouselItem>
          <img src={project2} className="d-block w-100 rounded" alt="HydroHype" />
          <Carousel.Caption>
            <h3>HydroHype</h3>
            <p>Water tracker and hydration calculation developed as project 1 with group members.</p>
          </Carousel.Caption>
        </CarouselItem>

        <CarouselItem>
          <img src={project3} className="d-block w-100 rounded" alt="ReadMe Generator" />
          <Carousel.Caption>
            <h3>ReadMe Generator</h3>
            <p>Create your own ReadMe file for any web application or coding project using TypeScript.</p>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
      
      <a href="/portfolio" className="btn btn-primary mt-3">View More</a>
    </section>
  );
};

export default ProjectsCarousel;


