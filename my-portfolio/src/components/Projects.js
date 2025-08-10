import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'React E-commerce Platform',
      description: 'A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.',
      image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=E-commerce+App',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      liveUrl: 'https://your-ecommerce-demo.vercel.app',
      githubUrl: 'https://github.com/chdgldcode/ecommerce-app'
    },
    {
      title: 'Task Management Dashboard',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features built with React and Socket.io.',
      image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Task+Manager',
      technologies: ['React', 'Socket.io', 'Express.js', 'PostgreSQL'],
      liveUrl: 'https://your-taskmanager-demo.vercel.app',
      githubUrl: 'https://github.com/chdgldcode/task-manager'
    },
    {
      title: 'Weather Analytics App',
      description: 'A responsive weather application with location-based forecasts, interactive charts, and detailed weather analytics using React and external APIs.',
      image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Weather+App',
      technologies: ['React', 'Chart.js', 'Weather API', 'Geolocation'],
      liveUrl: 'https://your-weather-demo.vercel.app',
      githubUrl: 'https://github.com/chdgldcode/weather-app'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                    <motion.a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
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