import React, { useState } from 'react';
import './FeaturesSection.css';
import { motion } from 'framer-motion';
import FeaturesItems from '../../Assets/images/FeaturesItems';
import FeaturesCard from './FeaturesCard';

function FeaturesSection() {
  const [currentIndex, setCurrentIndex] = useState(0); // Index actuel pour pagination
  const itemsPerPage = 2; // Nombre de cartes visibles par page

  // Calculer les éléments visibles en fonction de l'index
  const visibleItems = FeaturesItems.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  // Gestion de la navigation par points
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='bg-black text-light py-4 py-sm-5' id='features'>
      <div className='container'>
        <motion.h2
          className='section-title text-capitalize text-center fw-bold mb-4 mb-sm-5'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our <span className='text-purple'>features</span>
        </motion.h2>
        <div className='row g-4'>
          {visibleItems.map((item) => (
            <div className='col-6' key={item.id}>
              <FeaturesCard
                itemIcon={item.itemIcon}
                itemTitle={item.itemTitle}
                itemDescription={item.itemDescription}
              />
            </div>
          ))}
        </div>

        {/* Points de navigation */}
        <div className='text-center mt-4'>
          {Array.from({ length: Math.ceil(FeaturesItems.length / itemsPerPage) }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
