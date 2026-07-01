import React, { useState } from 'react';
import package1 from '../images/packege-1.png'
import package2 from '../images/packege-2.png'
import package3 from '../images/packege-3.png'
import package4 from '../images/packege-4.png'
import package5 from '../images/packege-5.png'
import package6 from '../images/packege-6.jpg'



const packages = [
  { 
    place: 'Singapore', 
    title: `EXPLORE THE LION CITY OF UNPARALLELED MODERNITY`,
    description: 'Experience the vibrant blend of modernity, culture, and culinary delights in Singapore, the Lion City.',
    duration: '5D/6N',
    capacity: 'pax: 10',
    image: package5,
    price: '₹34,999 per person',
    reviews: 40,
  },
  { 
    place: 'Maldives', 
    title: 'SUMMER HOLIDAY TO THE MALDIVES',
    description: 'Discover paradise on Earth with the crystal-clear waters and pristine beaches of the Maldives.',
    duration: '7D/6N',
    capacity: 'pax: 10',
    image: package2,
    price: '₹74,999 per person',
    reviews: 20,
  },
  { 
    place: 'Thailand', 
    title: `EXPLORE THAILAND'S TROPICAL SPLENDOUR`,
    description: 'Explore the vibrant culture, stunning beaches, and bustling streets of Thailand.',
    duration: '4D/3N',
    capacity: 'pax: 15',
    image: package3,
    price: '₹18,000 per person',
    reviews: 40,
  },
  { 
    place: 'Vietnam', 
    title: `DISCOVER THE ESSENCE OF VIETNAM'S BEAUTY`,
    description: `Immerse yourself in Vietnam's rich culture and stunning landscapes, where every corner tells a story of resilience and beauty, waiting to be explored.`,
    duration: '4D/3N',
    capacity: 'pax: 5',
    image: package4,
    price: '₹62,999 per person',
    reviews: 20,
  },
  { 
    place: 'Dubai', 
    title: 'Experience The Great Holiday On Dubai',
    description: 'Experience the breathtaking heights of luxury and innovation at the iconic Burj Khalifa.',
    duration: '7D/6N',
    capacity: 'pax: 10',
    image: package6,
    price: '₹29,999 per person',
    reviews: 25,
  },
];

function PackageSection() {
  const [showAll, setShowAll] = useState(false);

  const moreDestination = () => {
    setShowAll(!showAll);
  }
  
  const displayedDestinations = showAll ? packages : packages.slice(0, 3);

  return (
    <section className="package" id="package">
      <div className="container">
        <p className="section-subtitle">Popular Packages</p>
        <h2 className="h2 section-title">Our International Packages</h2>
        <p className="section-text">
        Dive into the wonders of international travel with us! Embark on extraordinary journeys to iconic destinations across the globe. Start planning your next adventure now on our website!
        </p>
        <ul className="package-list">
        {displayedDestinations.map((packageItem, index) => (
        <li key={index}>
          <div className="package-card">
            <figure className="card-banner">
              <img src={packageItem.image} alt={packageItem.place} loading="lazy" />
            </figure>
            <div className="card-content">
              <h3 className="h3 card-title">{packageItem.title}</h3>
              <p className="card-text">{packageItem.description}</p>
              <ul className="card-meta-list">
                <li className="card-meta-item">
                  <div className="meta-box">
                    <ion-icon name="time"></ion-icon>
                    <p className="text">{packageItem.duration}</p>
                  </div>
                </li>
                <li className="card-meta-item">
                  <div className="meta-box">
                    <ion-icon name="people"></ion-icon>
                    <p className="text">{packageItem.capacity}</p>
                  </div>
                </li>
                <li className="card-meta-item">
                  <div className="meta-box">
                    <ion-icon name="location"></ion-icon>
                    <p className="text">{packageItem.place}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card-price">
              <div className="wrapper">
                <p className="reviews">({packageItem.reviews} reviews)</p>
                <div className="card-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </div>
              <p className="price">{packageItem.price}</p>
              <a href="https://api.whatsapp.com/send?phone=7471173334" target='blank' className="btn btn-secondary">Book Now</a>
            </div>
          </div>
        </li>
      ))}
        </ul>
        {!showAll && <button className="btn btn-primary" onClick={moreDestination}>View All Packages</button>}
      </div>
    </section>
  );
}

export default PackageSection;
