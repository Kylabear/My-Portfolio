'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaTrophy, FaBook } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      level: 'Undergraduate',
      degree: 'Bachelor of Science in Information Technology',
      track: 'Web Development track',
      institution: 'University of the Cordilleras',
      location: 'Governor Pack Road, Baguio City',
      period: 'Expected date of graduation: September 2025',
      description: 'Currently pursuing BSIT with focus on web development, learning modern technologies and best practices in software development.',
      achievements: [
        'Web Development track specialization',
        'Active participation in tech events and seminars',
        'Hands-on projects and practical applications',
        'Collaboration with peers on development projects'
      ],
      skills: ['Web Development', 'Software Engineering', 'Database Design', 'UI/UX Principles']
    },
    {
      level: 'Senior High School',
      degree: 'Accountancy and Business Management',
      track: 'ABM Strand',
      institution: 'Sta. Maria National High School – Senior High School',
      location: 'Sta. Maria, Alfonso Lista, Ifugao',
      period: 'May 2021',
      description: 'Completed Senior High School with Accountancy and Business Management strand, developing strong foundation in business principles and management.',
      achievements: [
        'Completed ABM strand successfully',
        'Participated in business-related activities',
        'Developed analytical and problem-solving skills',
        'Gained understanding of business operations'
      ],
      skills: ['Business Management', 'Accounting Principles', 'Problem Solving', 'Analytical Thinking']
    }
  ]

  const seminars = [
    {
      title: 'DevFest Baguio 2023',
      date: 'Nov 11, 2023',
      venue: 'UC Theater',
      description: 'Google Developer Festival focusing on latest technologies and developer tools.'
    },
    {
      title: 'DevFest Baguio 2024',
      date: 'Nov 9, 2024',
      venue: 'UC Theater',
      description: 'Annual developer conference showcasing cutting-edge technologies and innovations.'
    },
    {
      title: 'Startup Product Branding',
      date: 'Nov 15, 2024',
      venue: 'UC InTTO',
      description: 'Workshop on product branding strategies for startup businesses.'
    },
    {
      title: 'Startup Ignite 6',
      date: 'Sept 28, 2024',
      venue: 'SLU Bakakeng',
      description: 'Startup acceleration program and networking event.'
    },
    {
      title: 'Campus Tech Update',
      date: 'October 2, 2024',
      venue: 'UC Theater',
      description: 'Technology updates and trends in the academic environment.'
    },
    {
      title: 'First Reverse Pitching',
      date: 'Sept 17, 2024',
      venue: 'UC Canao Hall',
      description: 'Innovative pitching format for startup ideas and projects.'
    },
    {
      title: 'Techno Sprint 2025',
      date: 'Feb 7, 2025',
      venue: 'UC Theater',
      description: 'Technology sprint event focusing on rapid development and innovation.'
    },
    {
      title: 'Startup Bootstrapping & PMF',
      date: 'Jan 16, 2025',
      venue: 'UC InTTO',
      description: 'Workshop on startup funding strategies and product-market fit.'
    },
    {
      title: 'SAP Analytics Cloud training',
      date: 'May 31, 2025',
      venue: 'UC M307',
      description: 'Training session on SAP Analytics Cloud platform and tools.'
    }
  ]

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Education</span> & Training
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and continuous learning through seminars, workshops, and training programs.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative ${index !== education.length - 1 ? 'mb-12' : ''}`}
            >
              {/* Timeline Line */}
              {index !== education.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-secondary-300 to-transparent"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-secondary-500 rounded-full border-4 border-white shadow-lg"></div>

              {/* Content Card */}
              <div className="ml-16 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-secondary-500">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm font-medium rounded-full">
                      {edu.level}
                    </span>
                    {edu.track && (
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                        {edu.track}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <FaGraduationCap className="text-secondary-500" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <FaMapMarkerAlt className="text-secondary-500" />
                      <span>{edu.location}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <FaCalendarAlt className="text-secondary-500" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">{edu.description}</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <FaTrophy className="text-yellow-500 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, skillIndex) => (
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

        {/* Seminars and Training */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Seminars & Training Programs
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Active participation in various technology and business-related events to stay updated with industry trends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seminars.map((seminar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FaBook className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-primary-600 font-medium">{seminar.date}</p>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {seminar.title}
                </h4>
                
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-medium">Venue:</span> {seminar.venue}
                </p>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {seminar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
