import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Sass']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs', 'GraphQL']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Jest', 'Webpack', 'Figma']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex}
                    className="skill-item"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;