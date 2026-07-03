import React, { useState } from "react";
import popular1 from "../images/popular-1.png";
import popular2 from "../images/popular-2.png";
import popular3 from "../images/popular-3.png";
import popular4 from "../images/popular-4.png";
import popular5 from "../images/popular-5.png";
import popular6 from "../images/popular-6.png";
import popular7 from "../images/popular-7.png";
import popular8 from "../images/popular-8.png";
import popular9 from "../images/popular-9.jpg";
import popular10 from "../images/popular-10.jpg";
import popular11 from "../images/popular-11.jpg";


const popular = [
  { place: "Leh Ladakh", price: "₹21,999", image: popular1 },
  { place: "Spiti Valley", price: "₹17,999", image: popular2 },
  { place: "Manali", price: "₹6,200", image: popular3 },
  { place: "Tirthan", price: "₹7,999", image: popular4 },
  { place: "Shimla", price: "₹12,999", image: popular5 },
  { place: "Kashmir", price: "₹21,999", image: popular6 },
  { place: "Rajasthan", price: "₹12,999", image: popular7 },
  { place: "Pachmarhi", price: "₹4,200", image: popular8 },
  { place: "Sar Pass Trek", price: "₹6,999", image: popular9 },
  { place: "Manali Kasol Couple Package", price: "₹14,999", image: popular10 },
  { place: "Chopta Chandrashila", price: "₹7,500", image: popular11 },
];

const PopularDestination = () => {
  const [showAll, setShowAll] = useState(false);

  const moreDestination = () => {
    setShowAll(!showAll);
  };

  const displayedDestinations = showAll ? popular : popular.slice(0, 6);

  return (
    <section className="popular" id="destination">
      <div className="container">
        <p className="section-subtitle">Trending Now</p>
        <h2 className="h2 section-title">Popular Destinations</h2>
        <p className="section-text">
          Explore breathtaking destinations and unlock unforgettable adventures
          with us! Discover India's most sought-after travel spots today.
        </p>
        <ul className="popular-list">
          {displayedDestinations.map((destination, index) => (
            <li key={index}>
              <div className="popular-card">
                <figure className="card-img">
                  <img
                    src={destination.image}
                    alt={destination.place}
                    loading="lazy"
                  />
                  <p className="card-chip">
                    <ion-icon name="flame"></ion-icon>
                    <span>Trending</span>
                  </p>
                </figure>
                <div className="card-content">
                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <span>5.0</span>
                  </div>
                  <h3 className="h3 card-title">
                    <a
                      href="https://api.whatsapp.com/send?phone=7471173334"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {destination.place}
                    </a>
                  </h3>
                  <div className="card-meta">
                    <p className="card-meta-item">
                      <ion-icon name="location"></ion-icon>
                      <span>India</span>
                    </p>
                    <p className="card-meta-item">
                      <ion-icon name="people"></ion-icon>
                      <span>Group Trip</span>
                    </p>
                  </div>
                </div>
                <div className="card-price-row">
                  <div>
                    <p className="price-label">Starting from</p>
                    <p className="price-amount">{destination.price}</p>
                  </div>
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
            </li>
          ))}
        </ul>
        {!showAll && (
          <button className="btn btn-secondary" onClick={moreDestination}>
            View All Destinations
          </button>
        )}
      </div>
    </section>
  );
};

export default PopularDestination;
