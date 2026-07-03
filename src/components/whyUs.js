import React from 'react';

const features = [
  {
    icon: 'map-outline',
    title: 'Handcrafted Itineraries',
    text: 'Routes refined over hundreds of departures — no tourist traps, only the good stuff.',
  },
  {
    icon: 'people-outline',
    title: 'Expert Trip Captains',
    text: 'Certified, first-aid trained captains lead every single group from start to finish.',
  },
  {
    icon: 'logo-whatsapp',
    title: '24×7 WhatsApp Support',
    text: 'Instant answers before, during and after your trip — a real human, always.',
  },
  {
    icon: 'shield-checkmark-outline',
    title: 'Best Price Promise',
    text: 'Transparent pricing with zero hidden costs, verified stays and safe transport.',
  },
];

function WhyUs() {
  return (
    <section className="why-us section-center" id="why-us">
      <div className="container">

        <p className="section-subtitle">Why Trailmark</p>
        <h2 className="h2 section-title">
          Travel Made <em>Effortless</em>
        </h2>
        <p className="section-text">
          From the first enquiry to the flight back home, we sweat the details
          so you can just show up and explore.
        </p>

        <ul className="why-list">
          {features.map((f, i) => (
            <li key={f.title} data-reveal style={{ '--reveal-delay': `${i * 100}ms` }}>
              <div className="why-card">
                <div className="why-icon">
                  <ion-icon name={f.icon}></ion-icon>
                </div>
                <h3 className="why-title">{f.title}</h3>
                <p className="why-text">{f.text}</p>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

export default WhyUs;
