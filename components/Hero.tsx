'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Hero = () => {
  const fullName = 'Alpha Kyla Bangachon'
  const [typedName, setTypedName] = React.useState('')

  React.useEffect(() => {
    let index = 0
    let deleting = false
    let isMounted = true

    const tick = () => {
      if (!isMounted) return
      if (!deleting) {
        setTypedName(fullName.slice(0, index + 1))
        index += 1
        if (index === fullName.length) {
          deleting = true
          setTimeout(tick, 1200) // pause at full name
          return
        }
        setTimeout(tick, 80)
      } else {
        setTypedName(fullName.slice(0, index - 1))
        index -= 1
        if (index === 0) {
          deleting = false
          setTimeout(tick, 600) // pause at empty
          return
        }
        setTimeout(tick, 40)
      }
    }

    const start = setTimeout(tick, 200)
    return () => { isMounted = false; clearTimeout(start) }
  }, [])
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
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-300/25 to-indigo-300/25 rounded-full blur-3xl animate-float"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-rose-300/25 to-sky-300/25 rounded-full blur-3xl animate-float animate-delay-2s"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile + Name: side-by-side on md+ screens */}
          <div className="mb-8 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-8">
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
                  <div 
                    className="absolute -inset-0.5 rounded-[44%_56%_56%_44%/44%_48%_48%_56%] pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(125, 211, 252, 0.2), rgba(52, 211, 153, 0.2))',
                      filter: 'blur(4px)',
                      opacity: 0.4
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-transparent rounded-[40%_60%_60%_40%/40%_50%_50%_60%]"></div>

                  {/* Profile image with organic mask */}
                  <div 
                    className="absolute inset-0 rounded-[40%_60%_60%_40%/40%_50%_50%_60%] overflow-hidden bg-transparent transition-all duration-300"
                    style={{
                      border: '1px solid rgba(125, 211, 252, 0.5)',
                      boxShadow: '0 0 10px rgba(125, 211, 252, 0.1), inset 0 0 10px rgba(52, 211, 153, 0.05)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(125, 211, 252, 0.7)';
                      e.currentTarget.style.boxShadow = '0 0 18px rgba(125, 211, 252, 0.25), inset 0 0 18px rgba(52, 211, 153, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(125, 211, 252, 0.5)';
                      e.currentTarget.style.boxShadow = '0 0 10px rgba(125, 211, 252, 0.1), inset 0 0 10px rgba(52, 211, 153, 0.05)';
                    }}
                  >
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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black gradient-text text-glow mb-3 tracking-tight leading-tight whitespace-nowrap">
                {typedName}
                <span className="inline-block w-1 h-[1.1em] align-[-0.1em] bg-white/80 ml-1 animate-pulse"></span>
              </h1>
              <h3 className="text-sm md:text-base italic text-gray-300 mb-2 font-medium">
                Call Me <span className="text-blue-400 font-semibold italic">Kyla</span>
              </h3>
              <h4 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-4 tracking-wide">Full Stack Developer</h4>
              {/* Accepting projects badge (moved here) */}
              <div className="flex justify-center md:justify-start">
                <span className="inline-flex items-center gap-2 text-sm text-green-400">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse inline-block" aria-hidden="true" />
                  <span>Accepting projects</span>
                </span>
              </div>
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
            Passionate Bachelor of Science in Information Technology (BSIT) graduate from the University of the Cordilleras, specializing in modern web technologies. 
            I build innovative digital solutions with a strong focus on user experience, clean code, and scalable design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 px-4"
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full sm:w-auto text-center"
            >
              Get to Know Me
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline w-full sm:w-auto text-center"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/images/CV_Kyla2025.pdf"
              download="CV_Kyla2025.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition w-full sm:w-auto text-center"
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
