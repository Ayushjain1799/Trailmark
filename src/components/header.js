import Logo from '../images/logo.png';
import React, { useEffect } from 'react';

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("[data-header]");
      const goTopBtn = document.querySelector("[data-go-top]");

      if (!header || !goTopBtn) return;

      if (window.scrollY >= 200) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
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

      <div className="header-top">
        <div className="container">

          <a
            href="tel:+917471173334"
            className="helpline-box"
          >
            <div className="icon-box">
              <ion-icon name="call-outline"></ion-icon>
            </div>

            <div className="wrapper">
              <p className="helpline-title">For Further Inquiries:</p>
              <p className="helpline-number">+91 7471173334</p>
              <p className="helpline-number">+91 9039843339</p>
            </div>
          </a>

          <a href="/" className="logo">
            <img src={Logo} alt="Trailmark logo" />
          </a>

          <div className="header-btn-group">
            <button className="search-btn" aria-label="Search">
              <ion-icon name="search"></ion-icon>
            </button>

            <button
              className="nav-open-btn"
              aria-label="Open Menu"
              data-nav-open-btn
            >
              <ion-icon name="menu-outline"></ion-icon>
            </button>
          </div>

        </div>
      </div>

      <div className="header-bottom">
        <div className="container">

          <ul className="social-list">
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=7471173334"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <ion-icon name="logo-whatsapp"></ion-icon>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/trailmarkadventures?igsh=a3RhbWc5aGZyeHBs"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a
                href="mailto:trailmarkadventures@gmail.com"
                className="social-link"
              >
                <ion-icon name="mail-outline"></ion-icon>
              </a>
            </li>
          </ul>

          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <a href="/" className="logo">
                <img src={Logo} alt="Trailmark logo" />
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
              <li><a href="#footer" className="navbar-link" data-nav-link>about us</a></li>
              <li><a href="#destination" className="navbar-link" data-nav-link>destination</a></li>
              <li><a href="#package" className="navbar-link" data-nav-link>packages</a></li>
              <li><a href="#gallery" className="navbar-link" data-nav-link>gallery</a></li>
              <li><a href="#contact" className="navbar-link" data-nav-link>contact us</a></li>
            </ul>
          </nav>

          <a
            href="https://api.whatsapp.com/send?phone=7471173334"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book Now
          </a>

        </div>
      </div>
    </header>
  );
}

export default Header;