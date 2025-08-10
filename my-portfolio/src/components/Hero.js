import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <motion.h1 variants={itemVariants} className="hero-title">
            Hi, I'm <span className="highlight">chdgldcode</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-subtitle">
            Full Stack Developer & React Enthusiast
          </motion.p>
          
          <motion.p variants={itemVariants} className="hero-description">
            I create modern, responsive web applications using React, Node.js, and cutting-edge technologies.
            Passionate about clean code, user experience, and continuous learning.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="social-links">
            <a href="https://github.com/chdgldcode" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/chdgldcode" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/chdgldcode" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="mailto:chdgldcode@example.com">
              <FaEnvelope />
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-image"
          variants={itemVariants}
        >
          <div className="profile-card">
            <div className="profile-image">
              <img 
                src="https://via.placeholder.com/300x300/4f46e5/ffffff?text=chdgldcode" 
                alt="Profile" 
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;