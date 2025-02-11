import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/cheriedavislogo.png"; // Adjust path if needed

const Header = () => {
  return (
    <header className="bg-dark text-white">
      {/* Top Bar with Logo */}
      <div className="container py-2 d-flex justify-content-between align-items-center">
        <img src={logo} alt="Logo" className="img-fluid" style={{ height: "50px" }} />
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
        <div className="container">
          <div className="navbar-nav mx-auto">
            <NavLink className="nav-link px-3" to="/">Home</NavLink>
            <NavLink className="nav-link px-3" to="/about">About Me</NavLink>
            <NavLink className="nav-link px-3" to="/portfolio">Portfolio</NavLink>
            <NavLink className="nav-link px-3" to="/resume">Resume</NavLink>
            <NavLink className="nav-link px-3" to="/contact">Contact</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
