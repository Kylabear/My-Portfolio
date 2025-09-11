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

  // ...existing code...

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
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left side: Who I Am & Mission */}
          <div className="flex-1 w-full max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4"></h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I am a passionate and dedicated BSIT student with a strong foundation in both frontend and backend development.<br/>
              My journey in technology began with curiosity and has evolved into a deep passion for creating innovative digital solutions.<br/>
              I believe in the power of technology to solve real-world problems and create meaningful experiences.<br/>
              My approach combines technical expertise with creative problem-solving, ensuring that every project I work on delivers both functionality and user satisfaction.
            </p>
            <div className="border border-gray-400 bg-gray-800 p-4 mt-6">
              <h4 className="text-lg font-bold text-white mb-2">My Mission</h4>
              <p className="text-gray-300 leading-relaxed">
                To leverage my technical skills and creativity to develop innovative solutions that make a positive impact, while continuously learning and growing in the ever-evolving field of technology.
              </p>
            </div>
          </div>
          {/* Right side: Profile Image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden flex items-center justify-center bg-gray-700">
              <img src="/images/Profile.png" alt="Alpha Kyla Bangachon" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>

  {/* ...existing code... */}
      </div>
    </section>
  )
}

export default About
