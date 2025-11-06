'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaTrophy, FaCode, FaUsers, FaLightbulb, FaCertificate } from 'react-icons/fa'

const Education = () => {
  const [showAllSeminars, setShowAllSeminars] = React.useState(false);
  const education = [
    {
      level: 'Graduate',
      degree: 'Bachelor of Science in Information Technology',
      track: 'Web Technology Track',
      institution: 'University of the Cordilleras',
      location: 'Governor Pack Road, Baguio City',
      period: 'October 2025',
      description: 'Comprehensive IT degree with focus on web technology, software engineering, and modern technologies.',
      achievements: [
        'Maintaining strong academic performance',
        'Active participation in tech events and workshops',
        'Developing practical skills through hands-on projects',
        'Building a strong foundation in full-stack development'
      ],
      skills: ['Web Development', 'Software Engineering', 'Database Management', 'UI/UX Design', 'Project Management']
    },
    {
      level: 'Senior High School',
      degree: 'Accountancy and Business Management',
      track: 'ABM Strand',
      institution: 'Sta. Maria National High School – Senior High School',
      location: 'Sta. Maria, Alfonso Lista, Ifugao',
      period: 'May 2021',
      description: 'Completed senior high school with focus on business and accountancy, developing strong analytical and organizational skills.',
      achievements: [
        'Successfully completed the ABM curriculum',
        'Developed strong business acumen',
        'Enhanced analytical and problem-solving skills',
        'Built foundation for future business and technology studies'
      ],
      skills: ['Business Management', 'Financial Analysis', 'Problem Solving', 'Organization', 'Communication']
    }
  ]

  const seminars = [
    {
      title: 'DevFest Baguio 2025',
      date: 'Oct 18, 2025',
      venue: 'Baguio Convention Hall',
      description: 'Annual developer festival featuring the latest in technology, networking opportunities, and skill development workshops.'
    },
    {
      title: 'SAP Analytics Cloud training',
      date: 'May 31, 2025',
      venue: 'UC M307',
      description: 'Hands-on training session on SAP Analytics Cloud for business intelligence and data visualization.'
    },
    {
      title: 'Techno Sprint 2025',
      date: 'Feb 7, 2025',
      venue: 'UC Theater',
      description: 'Fast-paced technology competition and learning event for students and professionals.'
    },
    {
      title: 'Startup Bootstrapping & PMF',
      date: 'Jan 16, 2025',
      venue: 'UC InTTO',
      description: 'Workshop on startup funding strategies and product-market fit validation.'
    },
    {
      title: 'Startup Product Branding',
      date: 'Nov 15, 2024',
      venue: 'UC InTTO',
      description: 'Workshop on effective product branding strategies for startups and entrepreneurs.'
    },
    {
      title: 'DevFest Baguio 2024',
      date: 'Nov 9, 2024',
      venue: 'UC Theater',
      description: 'Latest edition of the developer festival with cutting-edge tech insights and community building.'
    },
    {
      title: 'Campus Tech Update',
      date: 'October 2, 2024',
      venue: 'UC Theater',
      description: 'Technology update session covering the latest trends and developments in the tech industry.'
    },
    {
      title: 'Startup Ignite 6',
      date: 'Sept 28, 2024',
      venue: 'SLU Bakakeng',
      description: 'Startup acceleration program focusing on innovation and business model development.'
    },
    {
      title: 'First Reverse Pitching',
      date: 'Sept 17, 2024',
      venue: 'UC Canao Hall',
      description: 'Innovative pitching event where students present solutions to real business challenges.'
    },
    {
      title: 'DevFest Baguio 2023',
      date: 'Nov 11, 2023',
      venue: 'UC Theater',
      description: 'Annual developer festival featuring the latest in technology, networking opportunities, and skill development workshops.'
    }
  ]

  return (
    <section id="education" className="section-padding bg-gray-900/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education & Training</h2>
          <p className="section-subtitle">
            My academic journey and continuous learning through seminars, workshops, and training programs
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-300 via-violet-300 to-pink-300"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={`${edu.institution}-${edu.period}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-pink-300 to-indigo-300 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-card-hover p-6 relative"
                  >
                    {/* Level Badge */}
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-teal-300 to-sky-300 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                      {edu.level}
                    </div>

                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {edu.degree}
                      </h3>
                      {edu.track && (
                        <p className="text-blue-400 font-medium mb-2">{edu.track}</p>
                      )}
                      <div className="flex items-center text-gray-400 text-sm mb-2">
                        <FaGraduationCap className="w-4 h-4 mr-2" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm mb-2">
                        <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <FaCalendarAlt className="w-4 h-4 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <FaTrophy className="w-5 h-5 mr-2 text-yellow-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 + achIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start text-gray-300 text-sm"
                          >
                            <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Developed */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <FaCode className="w-5 h-5 mr-2 text-green-400" />
                        Skills Developed
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, skillIndex) => (
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

        {/* Seminars & Training Programs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Seminars & Training Programs
          </h3>
          
          <div className="responsive-grid">
            {(showAllSeminars ? seminars : seminars.slice(0, 4)).map((seminar, index) => (
              <motion.div
                key={`${seminar.title}-${seminar.date}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-card-hover p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-300 to-sky-300 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <FaCertificate className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 font-medium">{seminar.date}</span>
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-white mb-3">{seminar.title}</h4>
                <p className="text-gray-400 text-sm mb-3">
                  <FaMapMarkerAlt className="w-4 h-4 inline mr-2" />
                  {seminar.venue}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">{seminar.description}</p>
              </motion.div>
            ))}
          </div>
          {/* See More/See Less Button */}
          {seminars.length > 4 && (
            // add top margin so the button sits further below the seminars grid
            <div className="flex justify-center mt-8 mb-8">
              {!showAllSeminars ? (
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors duration-200"
                  onClick={() => setShowAllSeminars(true)}
                >
                  See More
                </button>
              ) : (
                <button
                  className="px-6 py-2 bg-gray-600 text-white rounded-lg font-semibold shadow hover:bg-gray-700 transition-colors duration-200"
                  onClick={() => setShowAllSeminars(false)}
                >
                  See Less
                </button>
              )}
            </div>
          )}
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              Commitment to Continuous Learning
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <FaLightbulb className="w-6 h-6 mr-3 text-yellow-400" />
                  Learning Philosophy
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  I believe that education is a lifelong journey. Every seminar, workshop, and training session 
                  contributes to my growth as a developer and professional. I actively seek opportunities to 
                  expand my knowledge and stay current with industry trends.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <FaUsers className="w-6 h-6 mr-3 text-blue-400" />
                  Community Engagement
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Participating in tech events and workshops allows me to connect with like-minded professionals, 
                  share knowledge, and contribute to the growing tech community in Baguio City and beyond.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
