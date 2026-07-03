import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';

import ladakhImg from '../images/popular-1.png';
import spitiImg from '../images/popular-2.png';
import manaliImg from '../images/popular-3.png';
import kashmirImg from '../images/popular-6.png';
import rajasthanImg from '../images/popular-7.png';
import choptaImg from '../images/popular-11.jpg';

const plans = [
  {
    name: 'Leh Ladakh',
    image: ladakhImg,
    bestTime: 'June – September',
    duration: '7 Days / 6 Nights',
    pace: 'Moderate',
    price: '₹21,999',
    highlights: ['Khardung La', 'Pangong Tso', 'Nubra Dunes', 'Monasteries'],
    itinerary: [
      { title: 'Arrive in Leh', desc: 'Acclimatise to the altitude, stroll Leh Market and catch sunset at Shanti Stupa.' },
      { title: 'Sham Valley Tour', desc: 'Magnetic Hill, Gurudwara Pathar Sahib and the Indus–Zanskar Sangam.' },
      { title: 'Leh → Nubra Valley', desc: 'Cross Khardung La (18,380 ft), evening camel safari on the Hunder sand dunes.' },
      { title: 'Nubra → Pangong Lake', desc: 'Drive along the Shyok river, sunset by the blue waters, overnight lakeside camp.' },
      { title: 'Pangong → Leh', desc: 'Sunrise at the lake, return to Leh via Chang La pass.' },
      { title: 'Monastery Circuit', desc: 'Hemis and Thiksey monasteries, plus café-hopping and souvenir shopping in Leh.' },
      { title: 'Departure', desc: 'Fly out with a camera roll full of Himalayan memories.' },
    ],
  },
  {
    name: 'Spiti Valley',
    image: spitiImg,
    bestTime: 'May – October',
    duration: '7 Days / 6 Nights',
    pace: 'Adventurous',
    price: '₹17,999',
    highlights: ['Key Monastery', 'Chandratal', 'Chicham Bridge', 'Nako Lake'],
    itinerary: [
      { title: 'Delhi → Narkanda', desc: 'Overnight drive to the apple orchards of Narkanda via Shimla.' },
      { title: 'Narkanda → Kalpa', desc: 'Follow the Sutlej into Kinnaur, sunset views of the Kinner Kailash range.' },
      { title: 'Kalpa → Tabo', desc: 'Cross into Spiti via Nako Lake and the 500-year-old Gue mummy.' },
      { title: 'Tabo → Kaza', desc: 'Visit Dhankar Monastery perched on a cliff and the Pin Valley.' },
      { title: 'Kaza Exploration', desc: 'Key Monastery, Kibber village, Chicham Bridge and the world’s highest post office at Hikkim.' },
      { title: 'Kaza → Chandratal', desc: 'Camp under a billion stars beside the crescent-shaped moon lake.' },
      { title: 'Return via Atal Tunnel', desc: 'Drive to Manali through Batal and the Atal Tunnel. Trip ends.' },
    ],
  },
  {
    name: 'Manali',
    image: manaliImg,
    bestTime: 'All Year Round',
    duration: '4 Days / 3 Nights',
    pace: 'Easy',
    price: '₹6,200',
    highlights: ['Solang Valley', 'Old Manali', 'Atal Tunnel', 'Jogini Falls'],
    itinerary: [
      { title: 'Arrival & Local Walk', desc: 'Hadimba Temple, Mall Road and the boho cafés of Old Manali.' },
      { title: 'Solang Valley', desc: 'Paragliding, zorbing, ropeway rides and mountain views all day.' },
      { title: 'Atal Tunnel → Sissu', desc: 'Drive into Lahaul for snow points, waterfalls and riverside photo stops.' },
      { title: 'Jogini Falls Trek', desc: 'A gentle morning trek through pine forest before departure.' },
    ],
  },
  {
    name: 'Kashmir',
    image: kashmirImg,
    bestTime: 'March – October',
    duration: '6 Days / 5 Nights',
    pace: 'Easy',
    price: '₹21,999',
    highlights: ['Dal Lake', 'Gulmarg Gondola', 'Betaab Valley', 'Sonmarg'],
    itinerary: [
      { title: 'Srinagar Arrival', desc: 'Shikara ride on Dal Lake and a night in a traditional houseboat.' },
      { title: 'Gulmarg', desc: 'Ride the gondola to Apharwat, meadows in summer and snow in winter.' },
      { title: 'Pahalgam', desc: 'Betaab Valley, Aru Valley and pony trails along the Lidder river.' },
      { title: 'Sonmarg', desc: 'Day trip to the "Meadow of Gold" and Thajiwas Glacier.' },
      { title: 'Mughal Gardens', desc: 'Nishat, Shalimar and saffron fields, plus a walk through the old city.' },
      { title: 'Departure', desc: 'Fly out from Srinagar with kahwa in hand.' },
    ],
  },
  {
    name: 'Rajasthan',
    image: rajasthanImg,
    bestTime: 'October – March',
    duration: '6 Days / 5 Nights',
    pace: 'Easy',
    price: '₹12,999',
    highlights: ['Amber Fort', 'Blue City', 'Sam Dunes', 'Desert Camp'],
    itinerary: [
      { title: 'Jaipur — The Pink City', desc: 'Amber Fort, Hawa Mahal and a rooftop dinner in the old city.' },
      { title: 'City Palace & Bazaars', desc: 'City Palace, Jantar Mantar and shopping in Johari Bazaar.' },
      { title: 'Jaipur → Jodhpur', desc: 'Mehrangarh Fort and a walk through the indigo lanes of the Blue City.' },
      { title: 'Jodhpur → Jaisalmer', desc: 'Drive into the Thar, evening at Gadisar Lake.' },
      { title: 'Golden Fort & Sam Dunes', desc: 'Jaisalmer Fort, Patwon ki Haveli, camel safari and folk night at a desert camp.' },
      { title: 'Departure', desc: 'Sunrise over the dunes, then homeward bound.' },
    ],
  },
  {
    name: 'Chopta Chandrashila',
    image: choptaImg,
    bestTime: 'September – June',
    duration: '4 Days / 3 Nights',
    pace: 'Trek',
    price: '₹7,500',
    highlights: ['Tungnath Temple', 'Summit Sunrise', 'Deoria Tal', 'Alpine Meadows'],
    itinerary: [
      { title: 'Rishikesh → Chopta', desc: 'Scenic drive along the Ganga through Devprayag to the "Mini Switzerland of India".' },
      { title: 'Summit Day', desc: 'Trek to Tungnath, the world’s highest Shiva temple, and on to the Chandrashila summit.' },
      { title: 'Deoria Tal', desc: 'Hike to the emerald lake with Chaukhamba reflections, camp overnight.' },
      { title: 'Return to Rishikesh', desc: 'Drive back with an optional Ganga aarti before departure.' },
    ],
  },
];

const whatsappPlanLink = (name) =>
  `https://api.whatsapp.com/send?phone=7471173334&text=${encodeURIComponent(
    `Hi Trailmark! I'd like the best plan for ${name}. Please share details.`
  )}`;

function TripPlanner() {
  const [selected, setSelected] = useState(0);
  useReveal([selected]);

  const plan = plans[selected];

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
          {plans.map((p, i) => (
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
