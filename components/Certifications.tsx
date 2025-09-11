'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaCertificate, FaLinkedin, FaGithub, FaExternalLinkAlt, FaTrophy, FaStar, FaAward } from 'react-icons/fa'

const Certifications = () => {
  const [showAll, setShowAll] = React.useState(false);
  const certifications = [
    {
      title: 'AKYLADE Certified Cyber Resilience Fundamentals CRF-002 (A/CCRF)',
      issuer: 'AKYLADE',
      date: 'Aug 2025',
      credentialId: 'CRF-002 (A/CCRF)',
      description: 'Comprehensive certification in cyber resilience fundamentals and security practices.',
      skills: ['Cyber Security', 'Resilience Fundamentals', 'Security Awareness'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'Accounting Foundations: Bookkeeping',
      issuer: 'LinkedIn Learning',
      date: 'Aug 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Fundamental principles of accounting and bookkeeping practices.',
      skills: ['Accounting', 'Bookkeeping', 'Financial Management'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'Finance Foundations',
      issuer: 'LinkedIn Learning',
      date: 'Aug 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Core concepts of finance and financial management principles.',
      skills: ['Finance', 'Financial Management', 'Business Analysis'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'Learning Excel: Data Analysis',
      issuer: 'LinkedIn Learning',
      date: 'Aug 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Advanced Excel techniques for data analysis and business intelligence.',
      skills: ['Data Analysis', 'Excel', 'Business Intelligence'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: '3D Animation and Rigging',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Professional 3D animation and character rigging techniques.',
      skills: ['3D Animation', 'Rigging', 'Digital Art'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'AI Accountability: Build Responsible and Transparent Systems',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Ethical AI development and responsible artificial intelligence practices.',
      skills: ['Computer Ethics', 'Responsible AI', 'Artificial Intelligence (AI)'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'AI Chat Prompts for Business Analysis',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Effective AI prompting techniques for business analysis and decision making.',
      skills: ['AI Prompting', 'Business Analysis', 'AI Tools'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'AI Essentials for Business Analysis',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Essential AI concepts and applications in business analysis.',
      skills: ['Business Analysis', 'AI Prompting', 'Artificial Intelligence for Business'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'AI Workshop: Advanced Chatbot Development',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Advanced techniques for developing intelligent chatbot systems.',
      skills: ['Chatbot Development', 'AI Development', 'Natural Language Processing'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'Advanced MySQL Data Analysis',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Advanced MySQL techniques for complex data analysis and optimization.',
      skills: ['MySQL', 'Data Analysis', 'Database Optimization'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'Building Your Innovation Skills',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Developing innovative thinking and creative problem-solving skills.',
      skills: ['Career Management', 'Business Innovation', 'Creative Thinking'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'Career Essentials in GitHub Professional Certificate',
      issuer: 'GitHub',
      date: 'Jul 2025',
      credentialId: 'GitHub',
      description: 'Professional GitHub usage and collaboration best practices.',
      skills: ['GitHub', 'Version Control', 'Collaboration'],
      platform: 'github',
      link: 'https://github.com/Kylabear'
    },
    {
      title: 'Complete Guide to Power BI for Data Analysts by Microsoft Press',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Comprehensive Power BI training for data analysis and visualization.',
      skills: ['Data Analysis', 'Microsoft Power BI', 'Data Visualization'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'Cybersecurity Awareness: AI',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'AI-powered cybersecurity awareness and threat detection.',
      skills: ['Security Awareness', 'Artificial Intelligence (AI)', 'Cybersecurity'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'Data Analysis with Python and Pandas',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Data analysis using Python and Pandas library for business intelligence.',
      skills: ['Pandas (Software)', 'Python', 'Data Analysis'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'Data Science Foundations: Fundamentals',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Core concepts and fundamentals of data science.',
      skills: ['Data Science', 'Analytics', 'Machine Learning'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'Data Science Team Lifecycle Management',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Managing data science teams and project lifecycles.',
      skills: ['Data Science', 'Team Management', 'Project Lifecycle'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'DevOps Foundations',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Fundamental DevOps principles and practices.',
      skills: ['DevOps', 'CI/CD', 'Infrastructure'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'Introduction to Web Design and Development',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Comprehensive introduction to web design and development principles.',
      skills: ['Web Design', 'HTML', 'Web Development'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'Laravel Essential Training',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Essential Laravel framework training for web development.',
      skills: ['Laravel', 'PHP', 'Web Development'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'Learning AI for Business Analysis',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'AI applications and techniques for business analysis.',
      skills: ['Artificial Intelligence for Business', 'AI for Business Analysis', 'Business Analysis'],
      platform: 'linkedIn',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'Learning Data Analytics: 1 Foundations',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Foundation course in data analytics and business intelligence.',
      skills: ['Data Analytics', 'Business Intelligence', 'Data Analysis'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'Machine Learning and AI Foundations: Clustering and Association',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Machine learning algorithms for clustering and association analysis.',
      skills: ['Artificial Intelligence (AI)', 'Machine Learning', 'Data Analysis'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'PHP with MySQL Essential Training: 1 The Basics',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Essential PHP and MySQL training for web development.',
      skills: ['PHP', 'MySQL', 'Web Development'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'Practical GitHub Project Management and Collaboration',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Practical GitHub usage for project management and team collaboration.',
      skills: ['GitHub', 'Project Management', 'Collaboration'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'Project Management Foundations',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Fundamental project management principles and methodologies.',
      skills: ['Project Management', 'Leadership', 'Planning'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'Public Speaking for Non-Native English Speakers',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Public speaking skills development for non-native English speakers.',
      skills: ['Cross-Cultural Communication Skills', 'Public Speaking', 'Communication'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'Security Architecture: A Strategic Approach by InfoSec',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Strategic approach to security architecture and design.',
      skills: ['Security Architecture Design', 'Cybersecurity', 'Strategic Planning'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'WordPress Essential Training',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2025',
      credentialId: 'LinkedIn Learning',
      description: 'Essential WordPress training for content management and development.',
      skills: ['Back-End Web Development', 'WordPress', 'Content Management'],
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'Jun 2025',
      credentialId: 'kylabear-jaads',
      description: 'Comprehensive JavaScript algorithms and data structures certification.',
      skills: ['JavaScript', 'Algorithms', 'Data Structures'],
      platform: 'freecodecamp',
      link: 'https://www.freecodecamp.org/certification/kylabear/javascript-algorithms-and-data-structures'
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'Feb 2025',
      credentialId: 'kylabear-rwd',
      description: 'Responsive web design principles and implementation.',
      skills: ['Responsive Design', 'CSS', 'Web Development'],
      platform: 'freecodecamp',
      link: 'https://www.freecodecamp.org/certification/kylabear/responsive-web-design'
    }
  ]

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return FaLinkedin
      case 'github':
        return FaGithub
      case 'freecodecamp':
        return FaCertificate
      default:
        return FaCertificate
    }
  }

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return 'from-blue-600 to-blue-700'
      case 'github':
        return 'from-gray-700 to-gray-800'
      case 'freecodecamp':
        return 'from-green-600 to-green-700'
      default:
        return 'from-gray-600 to-gray-700'
    }
  }

  return (
    <section id="certifications" className="section-padding bg-gray-900/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">
            Professional certifications and achievements that demonstrate my commitment to continuous learning and skill development
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="responsive-grid mb-16">
          {(showAll ? certifications : certifications.slice(0, 4)).map((cert, index) => (
            <motion.div
              key={`${cert.title}-${cert.date}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-card-hover p-6 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${getPlatformColor(cert.platform)} rounded-xl flex items-center justify-center text-white`}>
                  {React.createElement(getPlatformIcon(cert.platform), { className: "w-6 h-6" })}
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400 font-medium">{cert.date}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-blue-400 font-medium text-sm mb-2">
                {cert.issuer}
              </p>

              {/* Credential ID */}
              {cert.credentialId && (
                <p className="text-gray-400 text-xs mb-3">
                  ID: {cert.credentialId}
                </p>
              )}

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-400 mb-2">Skills Covered:</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-white/10 border border-white/20 rounded-md text-xs font-medium text-gray-300 hover:bg-white/20 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="text-gray-400 text-xs italic">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* View Credential Button */}
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-4 py-2 text-center text-white text-sm font-medium transition-all duration-300 hover:border-white/40 flex items-center justify-center"
              >
                <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                View Credential
              </motion.a>
            </motion.div>
          ))}
        </div>
        {/* See More Button */}
        {certifications.length > 4 && (
          <div className="flex justify-center mb-8">
            {!showAll ? (
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors duration-200"
                onClick={() => setShowAll(true)}
              >
                See More
              </button>
            ) : (
              <button
                className="px-6 py-2 bg-gray-600 text-white rounded-lg font-semibold shadow hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setShowAll(false)}
              >
                See Less
              </button>
            )}
          </div>
        )}

        {/* Commitment to Learning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white">
                <FaTrophy className="w-8 h-8" />
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Commitment to Continuous Learning
            </h3>
            
            <p className="text-gray-300 leading-relaxed mb-8 responsive-text">
              These certifications represent my dedication to staying current with industry trends and expanding my skill set. 
              I believe in the power of continuous learning and actively seek opportunities to enhance my expertise in 
              emerging technologies and best practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://www.linkedin.com/in/kylabangachon-292953256/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <FaLinkedin className="w-5 h-5 mr-2" />
                View on LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/Kylabear"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline"
              >
                <FaGithub className="w-5 h-5 mr-2" />
                View on GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
