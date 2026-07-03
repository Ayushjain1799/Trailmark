import React, { useState } from "react";
import useReveal from "../hooks/useReveal";
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

const whatsappLink =
  "https://api.whatsapp.com/send?phone=7471173334";

const PopularDestination = () => {
  const [showAll, setShowAll] = useState(false);
  useReveal([showAll]);

  const displayedDestinations = showAll ? popular : popular.slice(0, 6);

  return (
    <section className="popular section-center" id="destination">
      <div className="container">
        <p className="section-subtitle">Trending Now</p>
        <h2 className="h2 section-title">
          Popular <em>Destinations</em>
        </h2>
        <p className="section-text">
          Explore breathtaking destinations and unlock unforgettable adventures
          with us! Discover India's most sought-after travel spots today.
        </p>
        <ul className="popular-list">
          {displayedDestinations.map((destination, index) => (
            <li
              key={destination.place}
              data-reveal
              style={{ "--reveal-delay": `${(index % 3) * 110}ms` }}
            >
              <a
                className="dest-card"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={destination.image}
                  alt={destination.place}
                  loading="lazy"
                />
                <p className="card-chip">
                  <ion-icon name="flame"></ion-icon>
                  <span>Trending</span>
                </p>
                <div className="dest-content">
                  <p className="dest-rating">
                    <ion-icon name="star"></ion-icon>
                    <span>5.0 · Group Trip · India</span>
                  </p>
                  <h3 className="dest-name">{destination.place}</h3>
                  <div className="dest-bottom">
                    <p className="dest-price">
                      Starting from
                      <strong>{destination.price}</strong>
                    </p>
                    <span className="dest-arrow">
                      <ion-icon name="arrow-forward"></ion-icon>
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="btn-wrapper">
          {!showAll && (
            <button className="btn btn-teal" onClick={() => setShowAll(true)}>
              View All Destinations
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularDestination;
