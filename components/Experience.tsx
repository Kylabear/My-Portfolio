'use client'

import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Payroll Assistant',
      company: 'Creotec Philippine Inc.',
      location: 'Laguna Technopark, Binan City, Laguna',
      period: 'May – June 2021',
      type: 'Work Immersion (Senior High School)',
      description: [
        'Assisted in payroll processing and administrative tasks',
        'Gained hands-on experience in business operations',
        'Developed organizational and time management skills',
        'Learned about corporate processes and procedures'
      ],
      skills: ['Payroll Management', 'Administrative Tasks', 'Business Operations', 'Time Management']
    },
    {
      title: 'Business Assistant',
      company: 'Work Immersion Program',
      location: 'Senior High School',
      period: '2018 – 2022',
      type: 'Operations and Administrative',
      description: [
        'Participated in comprehensive business operations training',
        'Developed skills in administrative and operational tasks',
        'Gained practical experience in business management',
        'Enhanced communication and organizational abilities'
      ],
      skills: ['Business Operations', 'Administrative Skills', 'Business Management', 'Communication']
    }
  ]

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and hands-on experience in various roles and industries.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative ${index !== experiences.length - 1 ? 'mb-12' : ''}`}
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 to-transparent"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg"></div>

              {/* Content Card */}
              <div className="ml-16 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary-500">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                      {experience.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {experience.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <FaBuilding className="text-primary-500" />
                      <span className="font-medium">{experience.company}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <FaMapMarkerAlt className="text-primary-500" />
                      <span>{experience.location}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <FaCalendarAlt className="text-primary-500" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities & Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Experience Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Looking Forward
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            While my professional experience is primarily from internships and work immersion programs, 
            I've gained valuable insights into business operations, administrative processes, and professional 
            development. I'm eager to apply these foundational skills along with my technical expertise in 
            full-stack development roles.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
