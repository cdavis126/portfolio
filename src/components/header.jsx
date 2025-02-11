import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>
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
