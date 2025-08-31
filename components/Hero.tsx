'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa'

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Kylabear', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kylabangachon-292953256/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:alphabangachon@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-500/20 to-blue-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              {/* Your actual profile image - replace profile-photo.jpg with your image file */}
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
                  <img
                    src="/images/Profile.png"
                    alt="Alpha Kyla Bangachon - Full Stack Developer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to initial if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.fallback-initial');
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback initial (hidden by default) */}
                  <div className="fallback-initial w-full h-full flex items-center justify-center text-white text-4xl md:text-5xl lg:text-6xl font-bold hidden">
                    K
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-30 animate-pulse"></div>
              
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-0 rounded-full border border-white/10 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            </div>
          </motion.div>

          {/* Greeting Text */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-2 font-medium">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text text-glow mb-4">
              Alpha Kyla Bangachon
            </h1>
            <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-2">
              Nickname: <span className="text-blue-400 font-semibold">Kyla</span>
            </h3>
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Full Stack Developer
            </h4>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-base md:text-lg lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate BSIT student at the University of the Cordilleras, specializing in modern web technologies. 
            I create innovative digital solutions with a focus on user experience and clean code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get to Know Me
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm hover:border-white/40 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 md:w-6 md:h-6 group-hover:text-blue-400 transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-gray-400"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <FaChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
