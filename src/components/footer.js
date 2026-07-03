import React from 'react';
import Logo from '../images/logo.png';

function Footer() {
  return (
    <footer className="footer" id="footer">

      <div className="footer-top">
        <div className="container">

          <div className="footer-brand">
            <a href="/" className="logo">
              <img src={Logo} alt="Trailmark Adventures logo" style={{ height: 56, width: 'auto', marginBottom: 16 }} />
            </a>
            <p className="footer-text">
              Explore the world with Trailmark Adventures — curated group
              trips, treks and expeditions across India and beyond. Your
              journey begins here.
            </p>
          </div>

          <div className="footer-links">

            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#destination">Destinations</a></li>
              <li><a href="#package">Packages</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

          </div>

          <div className="footer-contact">

            <h4>Contact</h4>

            <p>
              <a href="tel:+917471173334">
                +91 74711 73334
              </a>
            </p>

            <p>
              <a href="tel:+919039843339">
                +91 90398 43339
              </a>
            </p>

            <p>
              <a href="mailto:trailmarkadventures@gmail.com">
                trailmarkadventures@gmail.com
              </a>
            </p>

          </div>

          <div className="footer-social">

            <h4>Follow Us</h4>

            <a
              href="https://api.whatsapp.com/send?phone=7471173334"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/trailmarkadventures"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Trailmark Adventures. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;
