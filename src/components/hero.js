import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h2 className="h2 hero-title">
          {" "}
          Journey to Explore the World with Trailmark Adventures
        </h2>
        <p className="hero-text">
          At <strong>Trailmark Adventures</strong>, we are a modern travel
          community offering end-to-end travel packages across India and abroad.
          We specialize in crafting the best <strong>travel itineraries</strong>{" "}
          that encourage group travel among like-minded explorers. Our offerings
          include <strong>road trips</strong>,{" "}
          <strong>trekking expeditions</strong>,{" "}
          <strong>corporate tours</strong>, and
          <strong> custom travel packages</strong>.
        </p>
        <div className="btn-group">
          <a href="#contact" className="btn btn-primary">
            Learn more
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=7471173334"
            target="blank"
            className="btn btn-secondary"
          >
            Book now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
