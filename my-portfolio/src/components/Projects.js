import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio',
      description: 'A modern portfolio website built with React and featuring dark mode, animations, and responsive design.',
      image: 'https://via.placeholder.com/300x200/1a1a1a/ffffff?text=Portfolio',
      technologies: ['React', 'CSS3', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: 'https://github.com/chdgldcode/portfolio'
    },
    {
      title: 'E-commerce',
      description: 'Full-stack e-commerce platform with user authentication, payment processing, and admin dashboard.',
      image: 'https://via.placeholder.com/300x200/1a1a1a/ffffff?text=E-commerce',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/chdgldcode/ecommerce'
    },
    {
      title: 'CryptTrack',
      description: 'Cryptocurrency tracking application with real-time price updates and portfolio management.',
      image: 'https://via.placeholder.com/300x200/1a1a1a/ffffff?text=CryptTrack',
      technologies: ['React', 'API', 'Chart.js'],
      liveUrl: '#',
      githubUrl: 'https://github.com/chdgldcode/crypttrack'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="section-number">02.</span> Projects
          </h2>
          <a href="#" className="view-all">View all →</a>
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a href={project.liveUrl} className="btn-link">Live site</a>
                  <a href={project.githubUrl} className="btn-link">Github</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;