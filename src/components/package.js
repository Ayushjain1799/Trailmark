import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';
import ItineraryModal from './itineraryModal';
import { intlPackages, whatsappPlanLink } from '../data/trips';

function PackageSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);
  useReveal([showAll]);

  return (
    <section className="package section-center" id="package">
      <div className="container">

        <p className="section-subtitle">International Getaways</p>
        <h2 className="h2 section-title">
          Our International <em>Packages</em>
        </h2>
        <p className="section-text">
          Handpicked international escapes with flights, stays and experiences
          taken care of — tap a package for the full day-by-day plan.
        </p>

        <ul className="package-list">
          {(showAll ? intlPackages : intlPackages.slice(0, 3)).map((p, i) => (
            <li
              key={p.name}
              data-reveal
              style={{ '--reveal-delay': `${(i % 3) * 110}ms` }}
            >
              <div
                className="package-card"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedTrip(p)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedTrip(p);
                  }
                }}
              >

                <figure className="card-banner">
                  <img src={p.image} alt={p.name} loading="lazy" />
                  <p className="card-chip">
                    <ion-icon name="time"></ion-icon>
                    <span>{p.duration}</span>
                  </p>
                </figure>

                <div className="card-content">
                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <span>({p.reviews} reviews)</span>
                  </div>
                  <h3 className="h3 card-title">{p.title}</h3>
                  <p className="card-desc">{p.description}</p>
                  <div className="card-meta">
                    <p className="card-meta-item">
                      <ion-icon name="location"></ion-icon>
                      <span>{p.name}</span>
                    </p>
                    <p className="card-meta-item">
                      <ion-icon name="people"></ion-icon>
                      <span>{p.capacity}</span>
                    </p>
                    <p className="card-meta-item view-itinerary">
                      <ion-icon name="map"></ion-icon>
                      <span>View itinerary</span>
                    </p>
                  </div>
                </div>

                <div className="card-price-row">
                  <div>
                    <p className="price-label">Per person</p>
                    <p className="price-amount">{p.price}</p>
                  </div>
                  <a
                    href={whatsappPlanLink(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Book Now
                  </a>
                </div>

              </div>
            </li>
          ))}
        </ul>

        <div className="btn-wrapper">
          {!showAll && (
            <button className="btn btn-teal" onClick={() => setShowAll(true)}>
              View All Packages
            </button>
          )}
        </div>

      </div>

      <ItineraryModal trip={selectedTrip} onClose={() => setSelectedTrip(null)} />
    </section>
  );
}

export default PackageSection;
