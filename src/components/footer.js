import React from 'react';
import Logo from '../images/logo.png';

function Footer() {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="contact-title">
              {/* <img src={Logo} alt="Tourly logo" /> */}
              About Us
            </a>
            <p className="footer-text">
            On our trips, we ensure hassle-free traveling, top-notch accommodation and guided sightseeing that too in a budget that won't burn a hole in your pocket. Just give us your dates and be ready to experience traveling like never before.Experience seamless travel, luxury stays, and expert-guided exploration within budget.
            </p>
          </div>
          <div className="footer-contact">
            <h4 className="contact-title">Contact Us</h4>
            <p className="contact-text">Feel free to contact us !!</p>
            <ul>
            <li className="contact-item">
                <ion-icon name="person-outline"></ion-icon>
                <a className="contact-link">Prince Jain</a>
              </li>
              <li className="contact-item">
                <ion-icon name="call-outline"></ion-icon>
                <a href="tel:91 7471173334" className="contact-link">+91 7471173334</a>
              </li>
              <li className="contact-item">
                <ion-icon name="call-outline"></ion-icon>
                <a href="tel:91 7471173334" className="contact-link">+91 9039843339</a>
              </li>
              <li className="contact-item">
                <ion-icon name="mail-outline"></ion-icon>
                <a href="mailto:" className="contact-link">trailmarkadventures@gmail.com</a>
              </li>
              <li className="contact-item">
                <ion-icon name="location-outline"></ion-icon>
                <address> M.P. India</address>
              </li>
            </ul>
          </div>
          <div className="footer-form">
            <p className="form-text">Subscribe our newsletter for more update & news !!</p>
            <form action="" className="form-wrapper">
              <input type="email" name="email" className="input-field" placeholder="Enter Your Email" required />
              <button type="submit" className="btn btn-secondary">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 <a href="https://ro-hit-portfolio.vercel.app/" target='blank' >RO-HIT</a>. All rights reserved
          </p>
          <ul className="footer-bottom-list">
            <li>
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="footer-bottom-link">Term & Condition</a>
            </li>
            <li>
              <a href="#" className="footer-bottom-link">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
