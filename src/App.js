import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import TourSearch from './components/tourSearch';
import PackageSection from './components/package'
import GallerySection from './components/gallery'
import Footer from './components/footer';
import PopularDestination from './components/popular';
import ContactSection from './components/contactUs';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Header Component */}
      <Header isNavOpen={isNavOpen} toggleNav={toggleNav} closeNav={closeNav} />

      {/* Main Content Component */}
      <Hero/>
      
      <TourSearch/>
      <PopularDestination/>
      <PackageSection/>
      <GallerySection/>
      <ContactSection/>

      {/* Footer Component */}
      <Footer />

      {/* Go to Top Button */}
      <button className="go-top" onClick={scrollToTop} data-go-top>
        <ion-icon name="chevron-up-outline"></ion-icon>
      </button>
    </div>
  );
}

export default App;
