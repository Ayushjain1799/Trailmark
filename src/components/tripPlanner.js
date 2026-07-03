import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { plannerTrips, whatsappPlanLink } from '../data/trips';

function TripPlanner() {
  const [selected, setSelected] = useState(0);
  useReveal([selected]);

  const plan = plannerTrips[selected];

  return (
    <section className="planner section-center" id="planner">
      <div className="container">

        <p className="section-subtitle">Smart Trip Planner</p>
        <h2 className="h2 section-title">
          Pick A Destination, Get Our <em>Best Plan</em>
        </h2>
        <p className="section-text">
          Every route below has been refined over hundreds of departures.
          Choose where you want to go and we'll show you the plan our
          travellers love the most.
        </p>

        <div className="planner-pills" data-reveal>
          {plannerTrips.map((p, i) => (
            <button
              key={p.name}
              type="button"
              className={`planner-pill${i === selected ? ' active' : ''}`}
              onClick={() => setSelected(i)}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="planner-panel" key={plan.name}>

          <div className="planner-overview">
            <figure>
              <img src={plan.image} alt={plan.name} loading="lazy" />
            </figure>
            <div className="planner-overview-body">
              <h3 className="planner-dest-name">{plan.name}</h3>

              <div className="planner-meta">
                <div className="planner-meta-item">
                  <ion-icon name="calendar-outline"></ion-icon>
                  <div>
                    <span className="meta-label">Best time</span>
                    <span className="meta-value">{plan.bestTime}</span>
                  </div>
                </div>
                <div className="planner-meta-item">
                  <ion-icon name="time-outline"></ion-icon>
                  <div>
                    <span className="meta-label">Duration</span>
                    <span className="meta-value">{plan.duration}</span>
                  </div>
                </div>
                <div className="planner-meta-item">
                  <ion-icon name="walk-outline"></ion-icon>
                  <div>
                    <span className="meta-label">Pace</span>
                    <span className="meta-value">{plan.pace}</span>
                  </div>
                </div>
                <div className="planner-meta-item">
                  <ion-icon name="people-outline"></ion-icon>
                  <div>
                    <span className="meta-label">Trip type</span>
                    <span className="meta-value">Group Trip</span>
                  </div>
                </div>
              </div>

              <div className="planner-highlights">
                {plan.highlights.map((h) => (
                  <span className="planner-highlight" key={h}>
                    <ion-icon name="sparkles"></ion-icon>
                    {h}
                  </span>
                ))}
              </div>

              <div className="planner-price-row">
                <div>
                  <p className="price-label">Starting from</p>
                  <p className="price-amount">{plan.price}</p>
                </div>
                <a
                  href={whatsappPlanLink(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Get This Plan
                </a>
              </div>
            </div>
          </div>

          <div className="planner-itinerary">
            <p className="planner-itinerary-title">
              <ion-icon name="map"></ion-icon>
              Day-by-day itinerary
            </p>
            <ul className="timeline">
              {plan.itinerary.map((day, i) => (
                <li key={i}>
                  <span className="timeline-dot">D{i + 1}</span>
                  <p className="timeline-title">{day.title}</p>
                  <p className="timeline-text">{day.desc}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default TripPlanner;
