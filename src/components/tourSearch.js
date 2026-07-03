import React from 'react';

const stats = [
  { icon: 'happy-outline', number: '10,000+', label: 'Happy Travellers' },
  { icon: 'map-outline', number: '250+', label: 'Departures Every Year' },
  { icon: 'trail-sign-outline', number: '75+', label: 'Destinations Covered' },
  { icon: 'star-outline', number: '4.9/5', label: 'Google Rating' },
];

const TourSearch = () => {
  return (
    <section className="tour-search">
      <div className="container">

        <div className="tour-search-card">
          <form action="" className="tour-search-form">
            <div className="input-wrapper">
              <label htmlFor="destination" className="input-label">Destination</label>
              <input type="text" name="destination" id="destination" required placeholder="Where do you want to go?" className="input-field" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="people" className="input-label">Travellers</label>
              <input type="number" name="people" id="people" required placeholder="No. of people" className="input-field" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="checkin" className="input-label">Check-in</label>
              <input type="date" name="checkin" id="checkin" required className="input-field" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="checkout" className="input-label">Check-out</label>
              <input type="date" name="checkout" id="checkout" required className="input-field" />
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>

        <ul className="stats-list">
          {stats.map((stat, index) => (
            <li key={index}>
              <div className="stat-card">
                <ion-icon name={stat.icon}></ion-icon>
                <p className="stat-number">{stat.number}</p>
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
