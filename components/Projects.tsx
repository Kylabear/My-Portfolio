'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaExternalLinkAlt, FaGithub, FaDatabase, FaMobile, FaPalette, FaServer, FaLaptop } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
  title: 'Peak Baguio: Personalized Travel Planning Portal for Baguio City',
  image: '/images/PEAKBAGUIO.png',
      client: 'Capstone Project',
      location: 'Baguio City',
  description: `Peak Baguio is a personalized travel planning portal for Baguio City. It helps tourists easily plan visits to the city’s five major attractions by selecting their preferred destination, budget, and time of visit. The platform then generates a tailored itinerary with recommendations for attractions, dining, and activities, making travel planning simple and efficient.`,
  technologies: ['React.js', 'Node.js', 'Tailwind CSS', 'Firebase'],
      features: [
        'Visually engaging and informative homepage',
        'Dropdown menus for selecting attractions, budget, and explore period',
        'Personalized itinerary generation',
        'Budget-based recommendations for attractions, dining, and activities',
        'Step-by-step instructions and intuitive navigation',
        'Mobile-responsive design',
        'User-friendly experience for first-time and returning visitors'
      ],
      category: 'web',
      github: 'https://github.com/Kylabear',
      demo: null
    },
    {
  title: 'Accounting Monitoring System',
  image: '/images/ACCOUNTING.png',
      client: 'DA CAR - Accounting Section',
    location: '',
      description: 'A comprehensive accounting system designed to streamline financial operations and provide real-time monitoring of accounting processes.',
  technologies: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Chart.js', 'React.js', 'Tailwind CSS'],
      features: [
        'Financial data management and reporting',
        'Real-time dashboard with analytics',
        'User authentication and role management',
        'Automated calculations and validations',
        'Export functionality for reports'
      ],
      category: 'web',
      github: 'https://github.com/Kylabear',
      demo: null
    },
    {
  title: 'Contraceptech App',
  image: '/images/CONTACEPTECH.png',
      client: 'Capstone Project',
      location: '',
      description: `A mobile application that directly addresses the issues of limited access, cultural stigma, and privacy concerns regarding family planning and reproductive health.`,
  technologies: ['Android Studio', 'Kotlin', 'JavaScript', 'Firebase'],
      features: [
        'Open Forum for community discussions',
        'AI-powered chatbot for instant answers',
        'Telehealth consultations with professionals',
        'Privacy-focused user experience',
        'Accessible to all genders, ages 15 and above, and parents',
        'Promotes family planning and education'
      ],
      category: 'mobile',
      github: 'https://github.com/Kylabear',
      demo: null
    },
    {
  title: 'Portfolio Website',
  image: '/images/PORTFOLIO.png',
      client: 'Personal Portfolio',
      location: 'Baguio City',
      description: 'A modern, responsive portfolio website showcasing my skills, projects, and professional experience.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Icons'],
      features: [
        'Responsive design for all devices',
        'Smooth animations and transitions',
        'Dark theme with glass morphism',
        'SEO optimized structure',
        'Fast loading and performance'
      ],
      category: 'web',
      github: 'https://github.com/Kylabear',
  demo: null
    }
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web':
        return FaLaptop
      case 'mobile':
        return FaMobile
      case 'design':
        return FaPalette
      case 'backend':
        return FaServer
      case 'database':
        return FaDatabase
      default:
        return FaCode
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web':
        return 'from-blue-500 to-cyan-600'
      case 'mobile':
        return 'from-purple-500 to-pink-600'
      case 'design':
        return 'from-pink-500 to-red-600'
      case 'backend':
        return 'from-green-500 to-emerald-600'
      case 'database':
        return 'from-orange-500 to-yellow-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section id="projects" className="section-padding bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my development work, demonstrating technical skills and creative problem-solving
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="responsive-grid mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card-hover overflow-hidden group"
            >
              {/* Project Image */}
              {project.image && (
                <div className="w-full h-48 bg-gray-800 flex items-center justify-center overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title + ' image'}
                    className="object-contain h-full w-full"
                  />
                </div>
              )}
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                    {React.createElement(getCategoryIcon(project.category), { className: "w-6 h-6" })}
                  </div>
                  <div className="text-right">
                    {project.client && (
                      <span className="text-xs text-gray-400 font-medium block">{project.client}</span>
                    )}
                    {project.location && (
                      <span className="text-xs text-gray-400 font-medium block">{project.location}</span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="px-2 py-1 bg-white/10 border border-white/20 rounded-md text-xs font-medium text-gray-300 hover:bg-white/20 transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start text-gray-300 text-xs"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </motion.li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-gray-400 text-xs italic">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-4 py-2 text-center text-white text-sm font-medium transition-all duration-300 hover:border-white/40 group/link"
                    >
                      <FaGithub className="w-4 h-4 inline mr-2 group-hover/link:text-blue-400 transition-colors duration-300" />
                      Code
                    </motion.a>
                  )}
                  
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg px-4 py-2 text-center text-white text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <FaExternalLinkAlt className="w-4 h-4 inline mr-2" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Let's Work Together
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8 responsive-text">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Whether you have a specific project in mind or just want to discuss possibilities, 
              I'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Start a Project
              </motion.a>
              <motion.a
                href="https://github.com/Kylabear"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline"
              >
                View More on GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
