import React from 'react';
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Main Content Component */}
      <Hero />

      <TourSearch />
      <PopularDestination />
      <PackageSection />
      <GallerySection />
      <ContactSection />

      {/* Footer Component */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=7471173334"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <ion-icon name="logo-whatsapp"></ion-icon>
      </a>

      {/* Go to Top Button */}
      <button className="go-top" onClick={scrollToTop} data-go-top aria-label="Go to top">
        <ion-icon name="chevron-up-outline"></ion-icon>
      </button>
    </div>
  );
}

export default App;
