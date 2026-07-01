import React, { useState } from "react";
import popular1 from "../images/popular-1.png";
import popular2 from "../images/popular-2.png";
import popular3 from "../images/popular-3.png";
import popular4 from "../images/popular-4.png";
import popular5 from "../images/popular-5.png";
import popular6 from "../images/popular-6.png";
import popular7 from "../images/popular-7.png";
import popular8 from "../images/popular-8.png";
import popular9 from "../images/popular-9.jpg";
import popular10 from "../images/popular-10.jpg";
import popular11 from "../images/popular-11.jpg";


const popular = [
  { place: "LEH LADAKH", price: "₹21,999", image: popular1 },
  { place: "SPITI VALLLEY", price: "₹17,999", image: popular2 },
  { place: "MANALI", price: "₹6,200", image: popular3 },
  { place: "TIRTHAN", price: "₹7999", image: popular4 },
  { place: "SHIMLA", price: "₹12,999", image: popular5 },
  { place: "KASHMIR", price: "₹21,999", image: popular6 },
  { place: "RAJASTHAN", price: "₹12,999", image: popular7 },
  { place: "PACHMARI", price: "₹4,200", image: popular8 },
  { place: "SAR PASS TREK", price: "₹6,999", image: popular9 },
  { place: "MANALI KASOL COUPLE PACKAGE", price: "₹14,999", image: popular10 },
  { place: "CHOPTA CHANDRASHILA", price: "₹7,500", image: popular11 },

];

const PopularDestination = () => {
  const [showAll, setShowAll] = useState(false);

  const moreDestination = () => {
    setShowAll(!showAll);
  };

  const displayedDestinations = showAll ? popular : popular.slice(0, 3);

  return (
    <section className="popular" id="destination">
      <div className="container">
        <p className="section-subtitle">Uncover place</p>
        <h2 className="h2 section-title">Popular destination</h2>
        <p className="section-text">
          Explore breathtaking destinations and unlock unforgettable adventures
          with us! Discover the india's most sought-after travel spots on our
          website today.
        </p>
        <ul className="popular-list">
          {displayedDestinations.map((destination, index) => (
            <li key={index}>
              <div className="popular-card">
                <figure className="card-img">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    loading="lazy"
                  />
                </figure>
                <div className="card-content">
                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                  <h3 className="h3 card-title">
                    <a
                      href="https://api.whatsapp.com/send?phone=7471173334"
                      target="blank"
                    >
                      {destination.place}
                    </a>
                  </h3>
                  <p className="card-text ">
                    Starting Price {destination.price}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {!showAll && (
          <button className="btn btn-primary" onClick={moreDestination}>
            More destination
          </button>
        )}
      </div>
    </section>
  );
};

export default PopularDestination;
