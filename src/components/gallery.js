import React from 'react';
import useReveal from '../hooks/useReveal';
import gallery1 from '../images/gallery-1.jpg';
import gallery2 from '../images/gallery-2.jpg';
import gallery3 from '../images/gallery-3.jpg';
import gallery4 from '../images/gallery-4.jpg';
import gallery5 from '../images/gallery-5.jpg';

const photos = [
  { src: gallery1, alt: 'Trekker in front of snow-capped peaks' },
  { src: gallery2, alt: 'Travellers planning with a map' },
  { src: gallery3, alt: 'Backpacker by a mountain lake' },
  { src: gallery4, alt: 'Friends exploring a new city' },
  { src: gallery5, alt: 'Camping by the river' },
];

const GallerySection = () => {
  useReveal();

  return (
    <section className="gallery section-center" id="gallery">
      <div className="container">

        <p className="section-subtitle">Photo Gallery</p>
        <h2 className="h2 section-title">
          Moments From <em>The Road</em>
        </h2>
        <p className="section-text">
          Real photos from real trips — breathtaking vistas, new friendships
          and stories worth telling.
        </p>

        <ul className="gallery-list">
          {photos.map((photo, i) => (
            <li key={i} data-reveal style={{ '--reveal-delay': `${i * 90}ms` }}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default GallerySection;
