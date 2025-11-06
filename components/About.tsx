'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaCode, FaMobile, FaPalette, FaDatabase, FaServer, FaCloud } from 'react-icons/fa'

const About = () => {
  const borderRef = React.useRef<HTMLDivElement>(null)
  
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
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer border layer - slightly larger */}
              <div 
                ref={borderRef}
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(45% 1%, 72% 9%, 90% 27%, 95% 51%, 82% 71%, 58% 87%, 38% 93%, 12% 81%, 2% 57%, 7% 37%, 22% 17%)',
                  background: 'rgba(125, 211, 252, 0.5)',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 10px rgba(125, 211, 252, 0.1), inset 0 0 10px rgba(52, 211, 153, 0.05)',
                  pointerEvents: 'none'
                }}
              />
              {/* Unique asymmetric flowing frame - like a stylized leaf/blade */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  clipPath: 'polygon(45% 2%, 72% 10%, 90% 28%, 95% 52%, 82% 72%, 58% 88%, 38% 94%, 12% 82%, 2% 58%, 7% 38%, 22% 18%)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (borderRef.current) {
                    borderRef.current.style.background = 'rgba(125, 211, 252, 0.7)';
                    borderRef.current.style.boxShadow = '0 0 18px rgba(125, 211, 252, 0.25), inset 0 0 18px rgba(52, 211, 153, 0.12)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (borderRef.current) {
                    borderRef.current.style.background = 'rgba(125, 211, 252, 0.5)';
                    borderRef.current.style.boxShadow = '0 0 10px rgba(125, 211, 252, 0.1), inset 0 0 10px rgba(52, 211, 153, 0.05)';
                  }
                }}
              >
                <img 
                  src="/images/Abtmeprofpic.jpg" 
                  alt="Alpha Kyla Bangachon" 
                  className="w-full h-full object-cover object-center"
                  style={{
                    clipPath: 'polygon(45% 2%, 72% 10%, 90% 28%, 95% 52%, 82% 72%, 58% 88%, 38% 94%, 12% 82%, 2% 58%, 7% 38%, 22% 18%)'
                  }}
                />
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
