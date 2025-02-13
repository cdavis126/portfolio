import ProfileBox from '../components/profilebox';
import ContactBox from '../components/contactbox';
import CareerSnapshot from '../components/CareerSnapshot';
import StatusBox from '../components/statusbox';
import ProjectsCarousel from '../components/ProjectsCarousel';
import AboutMeSnippet from '../components/AboutMeSnippet';
import '../styles/Home.css';


const Home = () => {
  return (
    <main className="home">
      <div className="left-column">
        <ProfileBox />
        <ContactBox />
        <CareerSnapshot />
      </div>
      <div className="right-column">
        <StatusBox />
        <ProjectsCarousel />
        <AboutMeSnippet />
      </div>
    </main>
  );
};

export default Home;
