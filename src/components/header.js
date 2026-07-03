import Logo from '../images/logo.png';
import React, { useEffect } from 'react';

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("[data-header]");
      const goTopBtn = document.querySelector("[data-go-top]");

      if (!header || !goTopBtn) return;

      if (window.scrollY >= 60) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }

      if (window.scrollY >= 400) {
        goTopBtn.classList.add("active");
      } else {
        goTopBtn.classList.remove("active");
      }
    };

    const navOpenBtn = document.querySelector("[data-nav-open-btn]");
    const navbar = document.querySelector("[data-navbar]");
    const navCloseBtn = document.querySelector("[data-nav-close-btn]");
    const overlay = document.querySelector("[data-overlay]");
    const navLinks = document.querySelectorAll("[data-nav-link]");

    const handleNavClick = () => {
      if (navbar && overlay) {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
      }
    };

    const navToggleEvent = (elemList) => {
      if (!elemList) return;

      elemList.forEach((elem) => {
        if (!elem) return;

        elem.addEventListener("click", () => {
          navbar?.classList.toggle("active");
          overlay?.classList.toggle("active");
        });
      });
    };

    window.addEventListener("scroll", handleScroll);
    navToggleEvent([navOpenBtn, navCloseBtn, overlay]);
    navLinks.forEach((link) => link.addEventListener("click", handleNavClick));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleNavClick)
      );
    };
  }, []);

  return (
    <header className="header" data-header>
      <div className="overlay" data-overlay></div>

      <div className="container">

        <a href="/" className="logo">
          <img src={Logo} alt="Trailmark Adventures logo" />
        </a>

        <nav className="navbar" data-navbar>
          <div className="navbar-top">
            <a href="/" className="logo">
              <img src={Logo} alt="Trailmark Adventures logo" />
            </a>

            <button
              className="nav-close-btn"
              aria-label="Close Menu"
              data-nav-close-btn
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">
            <li><a href="#home" className="navbar-link" data-nav-link>home</a></li>
            <li><a href="#destination" className="navbar-link" data-nav-link>destinations</a></li>
            <li><a href="#planner" className="navbar-link" data-nav-link>trip planner</a></li>
            <li><a href="#package" className="navbar-link" data-nav-link>packages</a></li>
            <li><a href="#gallery" className="navbar-link" data-nav-link>gallery</a></li>
            <li><a href="#contact" className="navbar-link" data-nav-link>contact us</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="tel:+917471173334" className="header-phone">
            <ion-icon name="call"></ion-icon>
            <span>+91 74711 73334</span>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=7471173334"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary header-cta"
          >
            Book Now
          </a>

          <button
            className="nav-open-btn"
            aria-label="Open Menu"
            data-nav-open-btn
          >
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;
