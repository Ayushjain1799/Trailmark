import React from 'react';
import gallery1 from '../images/gallery-1.jpg';
import gallery2 from '../images/gallery-2.jpg';
import gallery3 from '../images/gallery-3.jpg';
import gallery4 from '../images/gallery-4.jpg';
import gallery5 from '../images/gallery-5.jpg';

const GallerySection = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">

        <p className="section-subtitle">Photo Gallery</p>
        <h2 className="h2 section-title">Photos From Travellers</h2>

        <p className="section-text">
          Embark on a journey filled with breathtaking vistas and cultural immersion.
        </p>

        <ul className="gallery-list">
          <li><img src={gallery1} alt="Beach sunset view" /></li>
          <li><img src={gallery2} alt="Mountain landscape" /></li>
          <li><img src={gallery3} alt="City skyline at night" /></li>
          <li><img src={gallery4} alt="Forest adventure trail" /></li>
          <li><img src={gallery5} alt="Travel group moment" /></li>
        </ul>

      </div>
    </section>
  );
};

export default GallerySection;