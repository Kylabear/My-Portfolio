'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaCode, FaMobile, FaPalette, FaDatabase, FaServer, FaCloud } from 'react-icons/fa'

const About = () => {
  const personalInfo = [
    { icon: FaUser, label: 'Full Name', value: 'Alpha Kyla Bangachon' },
    { icon: FaUser, label: 'Nickname', value: 'Kyla' },
    { icon: FaGraduationCap, label: 'Course', value: 'BSIT - Web Development Track' },
    { icon: FaGraduationCap, label: 'University', value: 'University of the Cordilleras' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Baguio City, Philippines' },
    { icon: FaCalendarAlt, label: 'Expected Graduation', value: 'October 2025' },
  ]

  const areasOfInterest = [
    { icon: FaCode, title: 'Web Development', description: 'Creating modern, responsive web applications' },
    { icon: FaMobile, title: 'Mobile App Development', description: 'Building cross-platform mobile solutions' },
    { icon: FaPalette, title: 'UI/UX Design', description: 'Designing intuitive user experiences' },
    { icon: FaDatabase, title: 'Database Management', description: 'Efficient data storage and retrieval systems' },
    { icon: FaServer, title: 'Backend Development', description: 'Robust server-side applications and APIs' },
    { icon: FaCloud, title: 'Cloud Technologies', description: 'Scalable cloud-based solutions' },
  ]

  return (
    <section id="about" className="section-padding bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my background, interests, and what drives me in the world of technology
          </p>
        </motion.div>

        {/* Large centered portrait below the About heading */}
        <div className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden mb-10">
          <img src="/images/Profile.png" alt="Alpha Kyla Bangachon" className="w-full h-full object-cover object-center" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Personal Information
            </h3>
            
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 glass-card-hover"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Who I Am */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Who I Am
            </h3>
            
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-300 leading-relaxed responsive-text"
              >
                I am a passionate and dedicated BSIT student with a strong foundation in both frontend and backend development. 
                My journey in technology began with curiosity and has evolved into a deep passion for creating innovative digital solutions.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-300 leading-relaxed responsive-text"
              >
                I believe in the power of technology to solve real-world problems and create meaningful experiences. 
                My approach combines technical expertise with creative problem-solving, ensuring that every project 
                I work on delivers both functionality and user satisfaction.
              </motion.p>
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-8 p-6 glass-card border-l-4 border-blue-500"
            >
              <h4 className="text-xl font-bold text-white mb-3">My Mission</h4>
              <p className="text-gray-300 leading-relaxed">
                To leverage my technical skills and creativity to develop innovative solutions that make a positive impact, 
                while continuously learning and growing in the ever-evolving field of technology.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Areas of Interest */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Areas of Interest
          </h3>
          
          <div className="responsive-grid">
            {areasOfInterest.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-card-hover p-6 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{area.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
