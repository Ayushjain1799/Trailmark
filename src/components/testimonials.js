import React from 'react';

const reviews = [
  {
    name: 'Ananya Sharma',
    trip: 'Spiti Valley · June 2026',
    initials: 'AS',
    text: 'The best week of my life! Every stay, sunset point and chai stop was perfectly planned. I went solo and came back with twenty new friends.',
  },
  {
    name: 'Rohit Verma',
    trip: 'Leh Ladakh · May 2026',
    initials: 'RV',
    text: 'Seamless from start to finish. Our trip captain handled everything like a pro — and watching sunrise at Pangong is something I will never forget.',
  },
  {
    name: 'Priya & Karan',
    trip: 'Kashmir · April 2026',
    initials: 'PK',
    text: 'We booked our honeymoon with Trailmark and every little detail was taken care of. The houseboat stay on Dal Lake was pure magic!',
  },
];

function Testimonials() {
  return (
    <section className="testimonials section-center" id="testimonials">
      <div className="container">

        <p className="section-subtitle">Traveller Stories</p>
        <h2 className="h2 section-title">
          Loved By <em>Thousands</em> Of Explorers
        </h2>
        <p className="section-text">
          Don't take our word for it — here's what people who travelled with
          us have to say.
        </p>

        <ul className="testimonial-list">
          {reviews.map((r, i) => (
            <li key={r.name} data-reveal style={{ '--reveal-delay': `${i * 120}ms` }}>
              <div className="testimonial-card">
                <ion-icon className="testimonial-quote-icon" name="chatbox-ellipses"></ion-icon>
                <div className="card-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
                <p className="testimonial-text">"{r.text}"</p>
                <div className="testimonial-author">
                  <span className="testimonial-avatar">{r.initials}</span>
                  <div>
                    <p className="testimonial-name">{r.name}</p>
                    <p className="testimonial-trip">{r.trip}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

export default Testimonials;
