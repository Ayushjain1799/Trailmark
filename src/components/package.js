import React, { useState } from 'react';

import package2 from '../images/packege-2.png';
import package3 from '../images/packege-3.png';
import package4 from '../images/packege-4.png';
import package5 from '../images/packege-5.png';
import package6 from '../images/packege-6.jpg';

const packages = [
  {
    place: 'Singapore',
    title: 'EXPLORE THE LION CITY',
    description: 'Experience modern culture and cuisine in Singapore.',
    duration: '5D/6N',
    capacity: 'pax: 10',
    image: package5,
    price: '₹34,999 per person',
    reviews: 40,
  },
  {
    place: 'Maldives',
    title: 'SUMMER HOLIDAY IN MALDIVES',
    description: 'Crystal-clear waters and luxury beaches.',
    duration: '7D/6N',
    capacity: 'pax: 10',
    image: package2,
    price: '₹74,999 per person',
    reviews: 20,
  },
  {
    place: 'Thailand',
    title: 'EXPLORE THAILAND',
    description: 'Culture, beaches, and vibrant nightlife.',
    duration: '4D/3N',
    capacity: 'pax: 15',
    image: package3,
    price: '₹18,000 per person',
    reviews: 40,
  },
  {
    place: 'Vietnam',
    title: 'DISCOVER VIETNAM',
    description: 'Rich culture and scenic landscapes.',
    duration: '4D/3N',
    capacity: 'pax: 5',
    image: package4,
    price: '₹62,999 per person',
    reviews: 20,
  },
  {
    place: 'Dubai',
    title: 'DUBAI EXPERIENCE',
    description: 'Luxury and innovation in one city.',
    duration: '7D/6N',
    capacity: 'pax: 10',
    image: package6,
    price: '₹29,999 per person',
    reviews: 25,
  },
];

function PackageSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="package" id="package">
      <div className="container">

        <p className="section-subtitle">Popular Packages</p>
        <h2 className="h2 section-title">Our International Packages</h2>

        <ul className="package-list">
          {(showAll ? packages : packages.slice(0, 3)).map((p, i) => (
            <li key={i}>
              <div className="package-card">

                <figure className="card-banner">
                  <img src={p.image} alt={p.place} />
                </figure>

                <div className="card-content">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>

                <div className="card-price">
                  <p>{p.price}</p>

                  <a
                    href="https://api.whatsapp.com/send?phone=7471173334"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
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
            className="btn btn-primary"
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