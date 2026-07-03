import React from 'react';
import Counter from './counter';
import useReveal from '../hooks/useReveal';

const stats = [
  { icon: 'happy-outline', value: 10000, suffix: '+', label: 'Happy Travellers' },
  { icon: 'map-outline', value: 250, suffix: '+', label: 'Departures Every Year' },
  { icon: 'trail-sign-outline', value: 75, suffix: '+', label: 'Destinations Covered' },
  { icon: 'star-outline', value: 4.9, suffix: '/5', decimals: 1, label: 'Google Rating' },
];

const TourSearch = () => {
  useReveal();

  return (
    <section className="tour-search">
      <div className="container">

        <div className="tour-search-card">
          <form action="" className="tour-search-form">
            <div className="input-wrapper">
              <label htmlFor="destination" className="input-label">
                <ion-icon name="location-outline"></ion-icon>
                Destination
              </label>
              <input type="text" name="destination" id="destination" required placeholder="Where do you want to go?" className="input-field" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="people" className="input-label">
                <ion-icon name="people-outline"></ion-icon>
                Travellers
              </label>
              <input type="number" name="people" id="people" required placeholder="No. of people" className="input-field" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="checkin" className="input-label">
                <ion-icon name="calendar-outline"></ion-icon>
                Check-in
              </label>
              <input type="date" name="checkin" id="checkin" required className="input-field" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="checkout" className="input-label">
                <ion-icon name="calendar-outline"></ion-icon>
                Check-out
              </label>
              <input type="date" name="checkout" id="checkout" required className="input-field" />
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>

        <ul className="stats-list">
          {stats.map((stat, index) => (
            <li key={index} data-reveal style={{ '--reveal-delay': `${index * 100}ms` }}>
              <div className="stat-card">
                <ion-icon name={stat.icon}></ion-icon>
                <p className="stat-number">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                  />
                </p>
                <p className="stat-label">{stat.label}</p>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

export default TourSearch;
