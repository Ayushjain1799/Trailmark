import React, { useState } from "react";
import useReveal from "../hooks/useReveal";
import ItineraryModal from "./itineraryModal";
import { destinations } from "../data/trips";

const PopularDestination = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);
  useReveal([showAll]);

  const displayedDestinations = showAll ? destinations : destinations.slice(0, 6);

  return (
    <section className="popular section-center" id="destination">
      <div className="container">
        <p className="section-subtitle">Trending Now</p>
        <h2 className="h2 section-title">
          Popular <em>Destinations</em>
        </h2>
        <p className="section-text">
          Explore breathtaking destinations and unlock unforgettable adventures
          with us! Tap any trip to see its full day-by-day itinerary.
        </p>
        <ul className="popular-list">
          {displayedDestinations.map((destination, index) => (
            <li
              key={destination.name}
              data-reveal
              style={{ "--reveal-delay": `${(index % 3) * 110}ms` }}
            >
              <button
                type="button"
                className="dest-card"
                onClick={() => setSelectedTrip(destination)}
                aria-label={`View ${destination.name} itinerary`}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  loading="lazy"
                />
                <p className="card-chip">
                  <ion-icon name="flame"></ion-icon>
                  <span>Trending</span>
                </p>
                <div className="dest-content">
                  <p className="dest-rating">
                    <ion-icon name="star"></ion-icon>
                    <span>5.0 · {destination.duration} · Group Trip</span>
                  </p>
                  <h3 className="dest-name">{destination.name}</h3>
                  <div className="dest-bottom">
                    <p className="dest-price">
                      Starting from
                      <strong>{destination.price}</strong>
                    </p>
                    <span className="dest-arrow">
                      <ion-icon name="arrow-forward"></ion-icon>
                    </span>
                  </div>
                  <p className="dest-view-hint">View itinerary</p>
                </div>
              </button>
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

      <ItineraryModal trip={selectedTrip} onClose={() => setSelectedTrip(null)} />
    </section>
  );
};

export default PopularDestination;
