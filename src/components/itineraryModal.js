import React, { useEffect } from 'react';
import { whatsappPlanLink } from '../data/trips';

/**
 * Full trip details dialog: day-by-day itinerary, meta and booking CTA.
 * Renders nothing when `trip` is null.
 */
function ItineraryModal({ trip, onClose }) {
  useEffect(() => {
    if (!trip) return;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [trip, onClose]);

  if (!trip) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${trip.name} itinerary`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" aria-label="Close" onClick={onClose}>
          <ion-icon name="close"></ion-icon>
        </button>

        <figure className="modal-banner">
          <img src={trip.image} alt={trip.name} />
          <p className="card-chip">
            <ion-icon name="time"></ion-icon>
            <span>{trip.duration}</span>
          </p>
        </figure>

        <div className="modal-body">
          <h3 className="modal-title">{trip.title || trip.name}</h3>

          <div className="planner-meta">
            <div className="planner-meta-item">
              <ion-icon name="calendar-outline"></ion-icon>
              <div>
                <span className="meta-label">Best time</span>
                <span className="meta-value">{trip.bestTime}</span>
              </div>
            </div>
            <div className="planner-meta-item">
              <ion-icon name="time-outline"></ion-icon>
              <div>
                <span className="meta-label">Duration</span>
                <span className="meta-value">{trip.duration}</span>
              </div>
            </div>
            <div className="planner-meta-item">
              <ion-icon name="walk-outline"></ion-icon>
              <div>
                <span className="meta-label">Pace</span>
                <span className="meta-value">{trip.pace}</span>
              </div>
            </div>
            <div className="planner-meta-item">
              <ion-icon name="people-outline"></ion-icon>
              <div>
                <span className="meta-label">Trip type</span>
                <span className="meta-value">{trip.capacity || 'Group Trip'}</span>
              </div>
            </div>
          </div>

          {trip.highlights && (
            <div className="planner-highlights">
              {trip.highlights.map((h) => (
                <span className="planner-highlight" key={h}>
                  <ion-icon name="sparkles"></ion-icon>
                  {h}
                </span>
              ))}
            </div>
          )}

          <p className="planner-itinerary-title">
            <ion-icon name="map"></ion-icon>
            Day-by-day itinerary
          </p>

          <ul className="timeline">
            {trip.itinerary.map((day, i) => (
              <li key={i}>
                <span className="timeline-dot">D{i + 1}</span>
                <p className="timeline-title">{day.title}</p>
                <p className="timeline-text">{day.desc}</p>
              </li>
            ))}
          </ul>

          <div className="planner-price-row modal-price-row">
            <div>
              <p className="price-label">Starting from</p>
              <p className="price-amount">{trip.price}</p>
            </div>
            <a
              href={whatsappPlanLink(trip.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book This Trip
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItineraryModal;
