'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaDesktop, FaServer, FaDatabase, FaMobile, FaPalette, FaTools, FaCloud } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      icon: FaCode,
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C++', level: 75 },
        { name: 'C#', level: 75 },
        { name: 'TypeScript', level: 85 },
        { name: 'Kotlin', level: 70 },
        { name: 'PHP', level: 90 },
        { name: 'SQL', level: 85 },
  // Perl removed per request
        { name: 'R', level: 70 },
  ]
    },
    {
      icon: FaDesktop,
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Angular', level: 80 },
        { name: 'Vue.js', level: 75 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Bootstrap', level: 80 },
      ]
    },
    {
      icon: FaServer,
      title: 'Backend Technologies',
      skills: [
        { name: 'Laravel', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 },
        { name: 'PHP', level: 90 },
      ]
    },
    {
      icon: FaDatabase,
      title: 'Database Technologies',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MariaDB', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'MongoDB', level: 75 },
      ]
    },
    {
      icon: FaMobile,
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter', level: 80 },
        { name: 'React Native', level: 75 },
  { name: 'Android Studio', level: 70 },
      ]
    },
    {
      icon: FaPalette,
      title: 'Design & Tools',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Canva', level: 90 },
        { name: 'Framer', level: 75 },
  // Adobe XD removed per request
        { name: 'WordPress', level: 80 },
      ]
    },
    {
      icon: FaTools,
      title: 'Development Tools',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Docker', level: 75 },
        { name: 'Postman', level: 85 },
        { name: 'Terminal', level: 90 },
        { name: 'Git & GitHub', level: 90 },
      ]
    },
    {
      icon: FaCloud,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Firebase', level: 85 },
        { name: 'Vercel', level: 80 },
        { name: 'Netlify', level: 80 },
        { name: 'CI/CD', level: 70 },
      ]
    }
  ]

  const softSkills = [
    'Problem Solving', 'Critical Thinking', 'Team Collaboration', 'Project Management',
    'Communication', 'Time Management', 'Adaptability', 'Continuous Learning',
    'Attention to Detail', 'Analytical Thinking', 'Creativity', 'Leadership'
  ]

  return (
    <section id="skills" className="section-padding bg-gray-900/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical skills and competencies across various domains
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="responsive-grid mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mr-4">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5 }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills & Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Additional Skills & Competencies
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-3 text-center transition-all duration-300 cursor-pointer group"
              >
                <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Continuous Growth & Learning
            </h3>
            <p className="text-gray-300 leading-relaxed responsive-text">
              I believe in the power of continuous learning and skill development. My technical journey is marked by 
              a commitment to staying current with emerging technologies, best practices, and industry trends. 
              I actively seek opportunities to expand my expertise and contribute to innovative projects that 
              challenge and grow my capabilities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
