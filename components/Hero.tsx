'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Kylabear', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kylabangachon-292953256/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:alphabangachon@gmail.com', label: 'Email' },
    { icon: FaInstagram, href: 'https://www.instagram.com/kyla.b3ar/', label: 'Instagram' },
    { icon: FaWhatsapp, href: 'https://wa.me/639686654565', label: 'WhatsApp' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-500/20 to-blue-600/20 rounded-full blur-3xl animate-float animate-delay-2s"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile + Name: side-by-side on md+ screens */}
          <div className="mb-8 flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex-shrink-0 flex justify-center"
            >
              <div className="relative">
                {/* Organic shape frame */}
                <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 relative">
                  {/* Subtle outline ring */}
                  <div className="absolute -inset-0.5 rounded-[44%_56%_56%_44%/44%_48%_48%_56%] border-2 border-blue-400/20 blur-sm opacity-80 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-transparent rounded-[40%_60%_60%_40%/40%_50%_50%_60%]"></div>

                  {/* Profile image with organic mask (no outline) */}
                  <div className="absolute inset-0 rounded-[40%_60%_60%_40%/40%_50%_50%_60%] overflow-hidden bg-transparent ring-4 ring-blue-400/40 ring-offset-2 ring-offset-black/10 transition-shadow duration-300 hover:ring-blue-400/60">
                    <img
                      src="/images/Profile.png"
                      alt="Alpha Kyla Bangachon - Full Stack Developer"
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.parentElement?.querySelector('.fallback-initial');
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                    <div className="fallback-initial w-full h-full flex items-center justify-center text-white text-5xl md:text-6xl lg:text-7xl font-bold invisible">
                      K
                    </div>
                  </div>
                
                </div>
              </div>
            </motion.div>

            {/* Name + roles to the right of the image on md+ */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-center md:text-left"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-2 font-light tracking-wide">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black gradient-text text-glow mb-3 tracking-tight leading-tight">
                Alpha Kyla Bangachon
              </h1>
              <h3 className="text-sm md:text-base italic text-gray-300 mb-2 font-medium">
                Call Me <span className="text-blue-400 font-semibold italic">Kyla</span>
              </h3>
              <h4 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-4 tracking-wide">Full Stack Developer</h4>
            </motion.div>
          </div>

          {/* (Greeting moved beside profile on larger screens) */}

          {/* Description */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl lg:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Passionate BSIT student at the University of the Cordilleras, specializing in modern web technologies. 
            I create innovative digital solutions with a focus on user experience and clean code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
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
            <motion.a
              href="/images/CV_Kyla2025.pdf"
              download="CV_Kyla2025.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-5 py-3 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition"
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-8 mb-20 social-row"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="w-14 h-14 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm hover:border-white/40 group shadow-lg"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 md:w-7 md:h-7 group-hover:text-blue-400 transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 scroll-indicator"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-gray-400"
            >
              <span className="text-sm mb-2 font-medium tracking-wide">Scroll Down</span>
              <FaChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
