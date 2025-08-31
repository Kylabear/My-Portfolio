'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaCertificate, FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Certifications = () => {
  const certifications = [
    {
      title: 'AKYLADE Certified Cyber Resilience Fundamentals CRF-002 (A/CCRF)',
      issuer: 'AKYLADE',
      date: 'August 2025',
      credentialId: 'CRF-002',
      description: 'Comprehensive certification in cyber resilience fundamentals, covering security awareness, risk management, and incident response.',
      skills: ['Cyber Security', 'Risk Management', 'Incident Response', 'Security Awareness'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'Accounting Foundations: Bookkeeping',
      issuer: 'LinkedIn Learning',
      date: 'August 2025',
      description: 'Fundamental bookkeeping principles and practices, including double-entry bookkeeping, financial statements, and accounting cycles.',
      skills: ['Bookkeeping', 'Financial Accounting', 'Double-Entry System', 'Financial Statements'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'Finance Foundations',
      issuer: 'LinkedIn Learning',
      date: 'August 2025',
      description: 'Core financial concepts including financial analysis, budgeting, investment principles, and financial planning.',
      skills: ['Financial Analysis', 'Budgeting', 'Investment Principles', 'Financial Planning'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'Learning Excel: Data Analysis',
      issuer: 'LinkedIn Learning',
      date: 'August 2025',
      description: 'Advanced Excel techniques for data analysis, including pivot tables, formulas, charts, and data visualization.',
      skills: ['Excel', 'Data Analysis', 'Pivot Tables', 'Data Visualization'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'Skills: Data Analysis',
      issuer: 'LinkedIn Learning',
      date: 'August 2025',
      description: 'Comprehensive data analysis skills including statistical analysis, data interpretation, and analytical thinking.',
      skills: ['Data Analysis', 'Statistical Analysis', 'Data Interpretation', 'Analytical Thinking'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: '3D Animation and Rigging',
      issuer: 'LinkedIn Learning',
      date: 'July 2025',
      description: '3D animation techniques including character rigging, animation principles, and 3D modeling fundamentals.',
      skills: ['3D Animation', 'Character Rigging', '3D Modeling', 'Animation Principles'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'AI Accountability: Build Responsible and Transparent Systems',
      issuer: 'LinkedIn Learning',
      date: 'July 2025',
      description: 'Ethical AI development focusing on responsible AI systems, transparency, and accountability in artificial intelligence.',
      skills: ['Computer Ethics', 'Responsible AI', 'Artificial Intelligence (AI)', 'AI Transparency'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'AI Chat Prompts for Business Analysis',
      issuer: 'LinkedIn Learning',
      date: 'July 2025',
      description: 'Effective AI prompt engineering for business analysis, including prompt design and optimization techniques.',
      skills: ['AI Prompting', 'Business Analysis', 'Prompt Engineering', 'AI Tools'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'AI Essentials for Business Analysis',
      issuer: 'LinkedIn Learning',
      date: 'July 2025',
      description: 'Essential AI concepts and applications in business analysis, including AI tools and methodologies.',
      skills: ['Business Analysis', 'AI Prompting', 'Artificial Intelligence for Business', 'AI Tools'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'AI Workshop: Advanced Chatbot Development',
      issuer: 'LinkedIn Learning',
      date: 'July 2025',
      description: 'Advanced chatbot development techniques including natural language processing and conversational AI.',
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'Advanced MySQL Data Analysis',
      issuer: 'LinkedIn Learning',
      date: 'July 2025',
      description: 'Advanced MySQL techniques for data analysis, including complex queries, optimization, and data manipulation.',
      skills: ['MySQL', 'Data Analysis', 'SQL Optimization', 'Database Management'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'Data Science Foundations: Fundamentals',
      issuer: 'LinkedIn Learning',
      date: 'July 2025',
      description: 'Core data science concepts including statistical analysis, machine learning fundamentals, and data visualization.',
      skills: ['Data Science', 'Statistical Analysis', 'Machine Learning', 'Data Visualization'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'Data Science Team Lifecycle Management',
      issuer: 'LinkedIn Learning',
      date: 'July 2025',
      description: 'Managing data science teams including project lifecycle, team collaboration, and project delivery.',
      skills: ['Data Science', 'Team Management', 'Project Lifecycle', 'Team Collaboration'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'DevOps Foundations',
      issuer: 'LinkedIn Learning',
      date: 'July 2025',
      description: 'DevOps principles and practices including continuous integration, deployment, and infrastructure as code.',
      skills: ['DevOps', 'CI/CD', 'Infrastructure as Code', 'Continuous Integration'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'Introduction to Web Design and Development',
      issuer: 'LinkedIn Learning',
      date: 'July 2025',
      description: 'Fundamentals of web design and development including HTML, CSS, and basic web development principles.',
      skills: ['Web Design', 'HTML', 'Web Development', 'CSS'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'Laravel Essential Training',
      issuer: 'LinkedIn Learning',
      date: 'July 2025',
      description: 'Comprehensive Laravel framework training including MVC architecture, routing, and database operations.',
      skills: ['Laravel', 'PHP Framework', 'MVC Architecture', 'Web Development'],
      link: 'https://www.linkedin.com/in/kylabear',
      platform: 'LinkedIn'
    },
    {
      title: 'Learning AI for Business Analysis',
      issuer: 'LinkedIn Learning',
      date: 'July 2025',
      description: 'AI applications in business analysis including predictive analytics and AI-driven insights.',
      skills: ['Artificial Intelligence for Business', 'AI for Business Analysis', 'Business Analysis', 'Predictive Analytics'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'Learning Data Analytics: 1 Foundations',
      issuer: 'LinkedIn Learning',
      date: 'July 2025',
      description: 'Foundation course in data analytics covering data collection, analysis, and interpretation techniques.',
      skills: ['Data Analytics', 'Data Collection', 'Data Analysis', 'Data Interpretation'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'Machine Learning and AI Foundations: Clustering and Association',
      issuer: 'LinkedIn Learning',
      date: 'July 2025',
      description: 'Machine learning fundamentals focusing on clustering algorithms and association rule learning.',
      skills: ['Artificial Intelligence (AI)', 'Machine Learning', 'Clustering', 'Association Rules'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'PHP with MySQL Essential Training: 1 The Basics',
      issuer: 'LinkedIn Learning',
      date: 'July 2025',
      description: 'PHP fundamentals with MySQL database integration, covering basic syntax and database operations.',
      skills: ['PHP', 'MySQL', 'Web Development', 'Database Integration'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'Practical GitHub Project Management and Collaboration',
      issuer: 'LinkedIn Learning',
      date: 'July 2025',
      description: 'GitHub project management including collaboration tools, issue tracking, and project workflows.',
      skills: ['GitHub', 'Project Management', 'Collaboration', 'Version Control'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'Project Management Foundations',
      issuer: 'LinkedIn Learning',
      date: 'July 2025',
      description: 'Core project management principles including planning, execution, monitoring, and project closure.',
      skills: ['Project Management', 'Project Planning', 'Project Execution', 'Project Monitoring'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'Public Speaking for Non-Native English Speakers',
      issuer: 'LinkedIn Learning',
      date: 'July 2025',
      description: 'Public speaking skills development for non-native English speakers, including presentation techniques and confidence building.',
      skills: ['Cross-Cultural Communication Skills', 'Public Speaking', 'Presentation Skills', 'Confidence Building'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'Security Architecture: A Strategic Approach by InfoSec',
      issuer: 'InfoSec',
      date: 'July 2025',
      description: 'Strategic security architecture design including security frameworks, risk assessment, and security implementation.',
      skills: ['Security Architecture Design', 'Security Frameworks', 'Risk Assessment', 'Security Implementation'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'WordPress Essential Training',
      issuer: 'LinkedIn Learning',
      date: 'July 2025',
      description: 'WordPress fundamentals including content management, theme customization, and plugin development.',
      skills: ['Back-End Web Development', 'WordPress', 'Content Management', 'Theme Customization'],
      link: 'https://www.linkedin.com/in/kylabangachon-292953256/',
      platform: 'LinkedIn'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'June 2025',
      credentialId: 'kylabear-jaads',
      description: 'Comprehensive JavaScript course covering algorithms, data structures, and problem-solving techniques.',
      skills: ['JavaScript', 'Algorithms', 'Data Structures', 'Problem Solving'],
      link: 'https://www.freecodecamp.org/certification/kylabear/javascript-algorithms-and-data-structures',
      platform: 'freeCodeCamp'
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'February 2025',
      credentialId: 'kylabear-rwd',
      description: 'Responsive web design principles including CSS Grid, Flexbox, and mobile-first design approaches.',
      skills: ['Responsive Design', 'CSS Grid', 'Flexbox', 'Mobile-First Design'],
      link: 'https://www.freecodecamp.org/certification/kylabear/responsive-web-design',
      platform: 'freeCodeCamp'
    }
  ]

  const getPlatformIcon = (platform: string) => {
    if (platform === 'LinkedIn') return FaLinkedin
    if (platform === 'freeCodeCamp') return FaGithub
    return FaCertificate
  }

  const getPlatformColor = (platform: string) => {
    if (platform === 'LinkedIn') return 'text-blue-600'
    if (platform === 'freeCodeCamp') return 'text-green-600'
    return 'text-primary-600'
  }

  return (
    <section id="certifications" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications and achievements that demonstrate my commitment to continuous learning and skill development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    {React.createElement(getPlatformIcon(cert.platform), { 
                      size: 20, 
                      className: getPlatformColor(cert.platform)
                    })}
                  </div>
                  <div>
                    <p className="text-sm text-primary-600 font-medium">{cert.issuer}</p>
                    <p className="text-xs text-gray-500">{cert.date}</p>
                  </div>
                </div>
                
                {cert.credentialId && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {cert.credentialId}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                {cert.title}
              </h3>

              {/* Description */}
              {cert.description && (
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
              )}

              {/* Skills */}
              {cert.skills && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Link */}
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-medium">
                  {cert.platform}
                </span>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-300"
                >
                  <span>View</span>
                  <FaExternalLinkAlt size={12} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Commitment to Learning
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            With {certifications.length} certifications across various platforms including LinkedIn Learning, freeCodeCamp, and specialized training programs, 
            I demonstrate a strong commitment to continuous learning and professional development in technology and business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/kylabangachon-292953256/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View LinkedIn Profile
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Kylabear"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
