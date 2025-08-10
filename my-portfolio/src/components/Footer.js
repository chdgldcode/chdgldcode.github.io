import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 chdgldcode. All rights reserved.</p>
          <div className="footer-links">
            <button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>
              Home
            </button>
            <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
              About
            </button>
            <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              Projects
            </button>
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Contact
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;