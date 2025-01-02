import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-black text-light py-3">
      <motion.div
        className="text-center mb-3"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-light">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-light">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-light">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-light">
          <FontAwesomeIcon icon={faTiktok} size="2x" />
        </a>
      </motion.div>
      <motion.p
        className="text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        copyright &copy; 2025 - All rights reserved
      </motion.p>
    </footer>
  );
}

export default Footer;
