import React from 'react';

function ContactSection() {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-content">
          <p className="section-subtitle">Call To Action</p>
          <h2 className="h2 section-title">Ready For Unforgatable Travel. Remember Us!</h2>
          <p className="section-text">
          Escape to adventure with Trailmark Adventures
          </p>
        </div>
        <a href="https://api.whatsapp.com/send?phone=7471173334" target='blank' className="contact btn-secondary">
          <ion-icon name="logo-whatsapp"></ion-icon>
          <span>Contact Us</span>
        </a>
        
      </div>
    </section>
  );
}

export default ContactSection;
