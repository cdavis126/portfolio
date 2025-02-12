import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/cheriedavislogo.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Top Bar (Logo) */}
      <div className="top-bar">
        <img src={logo} alt="Cherie Davis Logo" className="logo" />
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="bottom-bar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;






