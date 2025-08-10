import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text">
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="control red"></span>
                <span className="control yellow"></span>
                <span className="control green"></span>
              </div>
              <span className="terminal-title">about-me.js</span>
            </div>
            <div className="terminal-content">
              <div className="code-line">
                <span className="line-number">01</span>
                <span className="code">
                  <span className="keyword">const</span> 
                  <span className="variable"> aboutMe</span> 
                  <span className="operator"> = </span>
                  <span className="bracket">{'{'}</span>
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">02</span>
                <span className="code">
                  <span className="property">  name:</span> 
                  <span className="string">'chdgldcode'</span>,
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">03</span>
                <span className="code">
                  <span className="property">  title:</span> 
                  <span className="string">'Frontend Developer'</span>,
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">04</span>
                <span className="code">
                  <span className="property">  location:</span> 
                  <span className="string">'Philippines'</span>,
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">05</span>
                <span className="code">
                  <span className="property">  passion:</span> 
                  <span className="string">'Creating amazing web experiences'</span>
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">06</span>
                <span className="code">
                  <span className="bracket">{'}'}</span>
                </span>
              </div>
            </div>
          </div>
          
          <div className="about-avatar">
            <div className="avatar-container">
              <img 
                src="https://via.placeholder.com/200x200/333/ffffff?text=DEV" 
                alt="Developer Avatar" 
                className="avatar-img"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;