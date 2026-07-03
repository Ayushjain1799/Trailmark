import React from 'react';
import useReveal from '../hooks/useReveal';

function ContactSection() {
  useReveal();

  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-content" data-reveal>
          <p className="section-subtitle">Plan Your Trip</p>
          <h2 className="h2 section-title">
            Ready For An <em>Unforgettable</em> Journey?
          </h2>
          <p className="section-text">
            Talk to our travel experts and get a customised itinerary within
            minutes — treks, road trips, corporate tours and more.
          </p>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=7471173334"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
          data-reveal
        >
          <ion-icon name="logo-whatsapp"></ion-icon>
          <span>Chat With Us</span>
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
