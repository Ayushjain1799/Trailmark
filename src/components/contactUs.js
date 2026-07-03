import React from 'react';

function ContactSection() {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-content">
          <p className="section-subtitle">Plan Your Trip</p>
          <h2 className="h2 section-title">Ready For An Unforgettable Journey?</h2>
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
        >
          <ion-icon name="logo-whatsapp"></ion-icon>
          <span>Chat With Us</span>
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
