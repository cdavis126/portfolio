import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/headereader';
import Footer from './components/footer';
import Home from './pages/home';
import AboutMe from './pages/aboutme';
import Portfolio from './pages/portfolio';
import Resume from './pages/Resume';
import Contact from './pages/contactontact';
import './styles/global.css'; // Optional global styles

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
