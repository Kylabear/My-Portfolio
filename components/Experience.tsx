'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaBuilding, FaCode, FaUsers, FaChartLine, FaCog } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Developer',
      company: 'Department of Agriculture - Philippines',
      location: 'Baguio City, Cordillera Administrative Region, Philippines',
      period: 'Jun 2025 - Present',
      type: 'Internship',
      description: 'Intern supporting development initiatives with emphasis on debugging, full‑stack feature work, testing, version control, and documentation to improve system stability and usability.',
      responsibilities: [
        'Debugged and resolved critical system issues to ensure stability and functionality across frontend and backend components',
        'Implemented and optimized new features using full‑stack development practices to improve performance and usability',
        'Conducted regression, functional, and usability testing to validate fixes and ensure a seamless user experience',
        'Managed version control and coordinated code integration within the team to maintain a clean, scalable codebase',
        'Documented technical issues, applied solutions, and maintained development logs for ongoing maintenance and future enhancements'
      ],
      skills: ['Debugging', 'Full-Stack Development', 'Testing', 'Version Control', 'Technical Documentation']
    },
    {
      title: 'Payroll Assistant',
      company: 'Creotec Philippine Inc.',
      location: 'Laguna Technopark, Binan City, Laguna',
      period: 'May – June 2021',
      type: 'Internship (Work Immersion)',
      description: 'Work immersion internship supporting payroll processing and administrative functions during Senior High School.',
      responsibilities: [
        'Processed employee payroll data and maintained accurate records',
        'Assisted with administrative tasks and document management',
        'Collaborated with HR team on various projects',
        'Developed strong organizational and time management skills'
      ],
      skills: ['Data Processing', 'Administrative Support', 'Team Collaboration', 'Time Management']
    },
    {
      title: 'Business Assistant',
      company: 'Family-owned Business',
      location: 'Local / Family Business',
      period: '2018 – 2022',
      type: 'Family Business',
      description: 'Assisted in the family-owned business, handling day-to-day operations, customer interactions, and administrative duties.',
      responsibilities: [
        'Supported daily business operations and administrative tasks',
        'Managed customer service and client interactions',
        'Helped with inventory, ordering, and basic bookkeeping',
        'Developed professional communication and problem-solving skills'
      ],
      skills: ['Business Operations', 'Customer Service', 'Inventory Management', 'Communication']
    }
  ]

  const skillsDeveloped = [
    'Data Management', 'Administrative Support', 'Team Collaboration', 'Time Management',
    'Problem Solving', 'Communication', 'Customer Service', 'Project Coordination'
  ]

  return (
    <section id="experience" className="section-padding bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey and the valuable experiences that have shaped my career development
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.period}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-card-hover p-6 relative"
                  >
                    {/* Position Badge */}
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {experience.type}
                    </div>

                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex items-center text-gray-400 text-sm mb-2">
                        <FaBuilding className="w-4 h-4 mr-2" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm mb-2">
                        <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <FaCalendarAlt className="w-4 h-4 mr-2" />
                        <span>{experience.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Key Responsibilities */}
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <FaCode className="w-5 h-5 mr-2 text-blue-400" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {experience.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="text-gray-300 text-sm">
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.2 + respIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start"
                            >
                              <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>{responsibility}</span>
                            </motion.div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Developed */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <FaCog className="w-5 h-5 mr-2 text-purple-400" />
                        Skills Developed
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.2 + skillIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-gray-300 hover:bg-white/20 transition-colors duration-300"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              Professional Growth & Development
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <FaUsers className="w-6 h-6 mr-3 text-blue-400" />
                  Key Competencies
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {skillsDeveloped.slice(0, 8).map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <FaChartLine className="w-6 h-6 mr-3 text-purple-400" />
                  Career Impact
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  These experiences have been instrumental in developing my professional skills and understanding 
                  of business operations. They've taught me the importance of attention to detail, effective 
                  communication, and the value of continuous learning in a professional environment.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
