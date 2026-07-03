import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">

        <p className="hero-tagline">India's Trusted Group Travel Community</p>

        <h1 className="hero-title">
          Travel. Explore. <span>Celebrate Life.</span>
        </h1>

        <p className="hero-text">
          Join like-minded explorers on curated group trips, treks and road
          expeditions across India and beyond — all planned end-to-end by
          Trailmark Adventures.
        </p>

        <div className="hero-badges">
          <p className="hero-badge">
            <ion-icon name="star"></ion-icon>
            <span>4.9 Rated on Google</span>
          </p>
          <p className="hero-badge">
            <ion-icon name="people"></ion-icon>
            <span>10,000+ Happy Travellers</span>
          </p>
          <p className="hero-badge">
            <ion-icon name="shield-checkmark"></ion-icon>
            <span>100% Safe & Secure</span>
          </p>
        </div>

        <div className="btn-group">
          <a href="#destination" className="btn btn-primary">
            Explore Trips
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=7471173334"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Talk to an Expert
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
