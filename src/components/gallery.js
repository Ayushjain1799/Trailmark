import React from 'react';
import gallery1 from '../images/gallery-1.jpg';
import gallery2 from '../images/gallery-2.jpg';
import gallery3 from '../images/gallery-3.jpg';
import gallery4 from '../images/gallery-4.jpg';
import gallery5 from '../images/gallery-5.jpg'

const GallerySection = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <p className="section-subtitle">Photo Gallery</p>
        <h2 className="h2 section-title">Photo's From Travellers</h2>
        <p className="section-text">
        Embark on a journey filled with breathtaking vistas and cultural immersion. Let our curated tours unveil the essence of each destination, leaving you with memories that last a lifetime.
        </p>
        <ul className="gallery-list">
          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={gallery1} alt="Gallery image" />
            </figure>
          </li>
          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={gallery2} alt="Gallery image" />
            </figure>
          </li>
          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={gallery3} alt="Gallery image" />
            </figure>
          </li>
          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={gallery4} alt="Gallery image" />
            </figure>
          </li>
          <li className="gallery-item">
            <figure className="gallery-image">
              <img src={gallery5} alt="Gallery image" />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default GallerySection;
