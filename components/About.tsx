'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaUserGraduate } from 'react-icons/fa'

const About = () => {
  const personalInfo = [
    { icon: FaUserGraduate, label: 'Full Name', value: 'Alpha Kyla Bangachon' },
    { icon: FaUserGraduate, label: 'Nickname', value: 'Kyla' },
    { icon: FaGraduationCap, label: 'Course', value: 'BSIT - Web Development Track' },
    { icon: FaMapMarkerAlt, label: 'University', value: 'University of the Cordilleras' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Baguio City, Philippines' },
    { icon: FaCalendarAlt, label: 'Expected Graduation', value: 'September 2025' },
  ]

  const interests = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Database Management',
    'API Development',
    'Cloud Computing',
    'Cybersecurity',
    'Data Analysis',
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives me in the world of technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Personal Information
            </h3>
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <info.icon className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                    <p className="text-gray-900 font-semibold">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Who I Am
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I am Alpha Kyla Bangachon, a passionate and dedicated BSIT student at the University of the Cordilleras, 
                specializing in Web Development. My journey in technology began with a curiosity to understand how digital 
                solutions can solve real-world problems.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a full-stack developer, I enjoy working with both frontend and backend technologies, creating seamless 
                user experiences and robust server-side solutions. My passion lies in building applications that not only 
                function flawlessly but also provide meaningful value to users.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies and best practices in 
                software development. My goal is to contribute to innovative projects that make a positive impact on 
                people's lives.
              </p>
            </div>

            {/* Interests */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Areas of Interest
              </h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors duration-300"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl"
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              My Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              To leverage my technical skills and creativity to develop innovative digital solutions that enhance 
              user experiences and drive business growth. I strive to contribute to the tech community while 
              continuously expanding my knowledge and expertise in emerging technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
