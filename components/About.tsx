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
              I am a passionate and dedicated individual<br/>
              with a solid foundation in both frontend and backend development.<br/>
              My journey in technology began with curiosity and grew into a deep passion for creating meaningful, user-centered digital solutions.<br/>
              I believe that technology has the power to solve real-world problems and improve everyday experiences.<br/>
              My approach blends technical expertise, creativity, and problem-solving to ensure every project I build delivers both functionality and impact.
            </p>
            <div className="border border-gray-400 bg-gray-800 p-4 mt-6">
              <h4 className="text-lg font-bold text-white mb-2">My Mission</h4>
              <p className="text-gray-300 leading-relaxed">
                To continuously leverage my technical skills and creativity to craft innovative digital solutions that make a positive impact — while growing as a full-stack developer in the ever-evolving tech landscape.
              </p>
            </div>
          </div>
          {/* Right side: Profile Image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96">
              {/* Organic shape frame copied from Hero.tsx */}
              <div className="absolute -inset-0.5 rounded-[44%_56%_56%_44%/44%_48%_48%_56%] border-2 border-blue-400/20 blur-sm opacity-80 pointer-events-none"></div>
              <div className="absolute inset-0 bg-transparent rounded-[40%_60%_60%_40%/40%_50%_50%_60%]"></div>
              <div className="absolute inset-0 rounded-[40%_60%_60%_40%/40%_50%_50%_60%] overflow-hidden bg-transparent ring-4 ring-blue-400/40 ring-offset-2 ring-offset-black/10 transition-shadow duration-300 hover:ring-blue-400/60 flex items-center justify-center">
                <img src="/images/Abtmeprofpic.jpg" alt="Alpha Kyla Bangachon" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>

  {/* ...existing code... */}
      </div>
    </section>
  )
}

export default About
