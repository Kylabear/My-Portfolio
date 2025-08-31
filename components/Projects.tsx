'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaMobile, FaPalette } from 'react-icons/fa'
import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'Accounting Monitoring System',
      client: 'DA CAR - Accounting Section',
      location: 'Peak Baguio',
      description: 'A comprehensive accounting management system designed to streamline financial operations and provide real-time monitoring of accounting processes. The system includes features for tracking transactions, generating reports, and managing financial data efficiently.',
      technologies: ['Next.js', 'Tailwind CSS', 'Laravel', 'MySQL', 'PHP', 'REST APIs'],
      features: [
        'Real-time financial data monitoring',
        'Automated report generation',
        'User authentication and role management',
        'Responsive dashboard interface',
        'Data export and backup functionality',
        'Audit trail and logging system'
      ],
      image: '/api/placeholder/600/400',
      github: null,
      live: null,
      category: 'Full Stack Web Application'
    },
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution built with React and Laravel, featuring a complete shopping experience with product management, user authentication, payment integration, and admin dashboard.',
      technologies: ['React.js', 'Laravel', 'MySQL', 'Stripe API', 'Tailwind CSS', 'Redux'],
      features: [
        'Product catalog and search functionality',
        'Shopping cart and checkout process',
        'User account management',
        'Admin dashboard for product management',
        'Payment gateway integration',
        'Order tracking and management'
      ],
      image: '/api/placeholder/600/400',
      github: 'https://github.com/Kylabear/ecommerce-platform',
      live: null,
      category: 'E-Commerce Application'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management application that helps teams organize, track, and complete projects efficiently. Features include task assignment, progress tracking, and team collaboration tools.',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'JWT'],
      features: [
        'Task creation and assignment',
        'Real-time collaboration',
        'Progress tracking and analytics',
        'Team management and permissions',
        'File sharing and attachments',
        'Mobile-responsive design'
      ],
      image: '/api/placeholder/600/400',
      github: 'https://github.com/Kylabear/task-manager',
      live: null,
      category: 'Collaboration Tool'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing professional skills, projects, and experience. Built with Next.js and Tailwind CSS for optimal performance and user experience.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Responsive Design'],
      features: [
        'Responsive and mobile-friendly design',
        'Smooth animations and transitions',
        'SEO optimized structure',
        'Fast loading performance',
        'Modern UI/UX design',
        'Easy content management'
      ],
      image: '/api/placeholder/600/400',
      github: 'https://github.com/Kylabear/portfolio',
      live: null,
      category: 'Personal Portfolio'
    }
  ]

  const getCategoryIcon = (category: string) => {
    if (category.includes('Web')) return FaCode
    if (category.includes('Mobile')) return FaMobile
    if (category.includes('Database')) return FaDatabase
    if (category.includes('Design')) return FaPalette
    return FaCode
  }

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my development projects, demonstrating technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-3">
                      {React.createElement(getCategoryIcon(project.category), { 
                        size: 32, 
                        className: "text-primary-600" 
                      })}
                    </div>
                    <p className="text-sm text-gray-600 font-medium">{project.category}</p>
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.github && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                    >
                      <FaGithub size={16} />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                    >
                      <FaExternalLinkAlt size={16} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  {project.client && (
                    <p className="text-sm text-primary-600 font-medium mb-1">
                      Client: {project.client}
                    </p>
                  )}
                  {project.location && (
                    <p className="text-sm text-gray-500">
                      Location: {project.location}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-xs text-primary-600 font-medium">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:alphabangachon@gmail.com"
                className="btn-primary"
              >
                Get In Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Kylabear"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                View More Projects
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
