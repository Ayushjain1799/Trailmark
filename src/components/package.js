import React, { useState } from 'react';

import package2 from '../images/packege-2.png';
import package3 from '../images/packege-3.png';
import package4 from '../images/packege-4.png';
import package5 from '../images/packege-5.png';
import package6 from '../images/packege-6.jpg';

const packages = [
  {
    place: 'Singapore',
    title: 'Explore The Lion City',
    description: 'Experience modern culture and cuisine in Singapore.',
    duration: '5D/6N',
    capacity: '10 pax',
    image: package5,
    price: '₹34,999',
    reviews: 40,
  },
  {
    place: 'Maldives',
    title: 'Summer Holiday In Maldives',
    description: 'Crystal-clear waters and luxury beaches.',
    duration: '7D/6N',
    capacity: '10 pax',
    image: package2,
    price: '₹74,999',
    reviews: 20,
  },
  {
    place: 'Thailand',
    title: 'Explore Thailand',
    description: 'Culture, beaches, and vibrant nightlife.',
    duration: '4D/3N',
    capacity: '15 pax',
    image: package3,
    price: '₹18,000',
    reviews: 40,
  },
  {
    place: 'Vietnam',
    title: 'Discover Vietnam',
    description: 'Rich culture and scenic landscapes.',
    duration: '4D/3N',
    capacity: '5 pax',
    image: package4,
    price: '₹62,999',
    reviews: 20,
  },
  {
    place: 'Dubai',
    title: 'Dubai Experience',
    description: 'Luxury and innovation in one city.',
    duration: '7D/6N',
    capacity: '10 pax',
    image: package6,
    price: '₹29,999',
    reviews: 25,
  },
];

function PackageSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="package" id="package">
      <div className="container">

        <p className="section-subtitle">International Getaways</p>
        <h2 className="h2 section-title">Our International Packages</h2>
        <p className="section-text">
          Handpicked international escapes with flights, stays and experiences
          taken care of — just pack your bags.
        </p>

        <ul className="package-list">
          {(showAll ? packages : packages.slice(0, 3)).map((p, i) => (
            <li key={i}>
              <div className="package-card">

                <figure className="card-banner">
                  <img src={p.image} alt={p.place} loading="lazy" />
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
                      <span>{p.place}</span>
                    </p>
                    <p className="card-meta-item">
                      <ion-icon name="people"></ion-icon>
                      <span>{p.capacity}</span>
                    </p>
                  </div>
                </div>

                <div className="card-price-row">
                  <div>
                    <p className="price-label">Per person</p>
                    <p className="price-amount">{p.price}</p>
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
          <button
            className="btn btn-secondary"
            onClick={() => setShowAll(true)}
          >
            View All Packages
          </button>
        )}

      </div>
    </section>
  );
}

export default PackageSection;
