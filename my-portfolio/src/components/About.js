import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '500+', label: 'GitHub Commits' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              I'm a passionate React developer with over 3 years of experience creating dynamic, 
              user-friendly web applications. I specialize in modern JavaScript frameworks, 
              particularly React and Next.js, and have a strong foundation in both frontend and backend technologies.
            </p>
            <p>
              My journey in web development started with curiosity about how websites work, 
              and it has evolved into a career focused on creating meaningful digital experiences. 
              I believe in writing clean, maintainable code and staying updated with the latest industry trends.
            </p>
          </motion.div>
          
          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;