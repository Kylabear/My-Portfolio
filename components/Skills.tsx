'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaDesktop, FaServer, FaDatabase, FaMobile, FaPalette, FaTools, FaCloud } from 'react-icons/fa'

const Skills = () => {
  const [showAllCategories, setShowAllCategories] = React.useState(false)
  const skillCategories = [
    {
      icon: FaCode,
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'PHP', level: 85 },
        { name: 'Kotlin', level: 80 },
        { name: 'SQL', level: 80 },
        { name: 'Python', level: 85 },
        { name: 'C++', level: 75 },
        { name: 'C#', level: 75 },
        { name: 'TypeScript', level: 85 },
        { name: 'R', level: 70 },
      ]
    },
    {
      icon: FaDesktop,
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Next.js', level: 90 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Angular', level: 80 },
        { name: 'HTML5', level: 80 },
        { name: 'Vue.js', level: 75 },
        { name: 'CSS3', level: 75 },
      ]
    },
    {
      icon: FaServer,
      title: 'Backend Technologies',
      skills: [
        { name: 'Laravel', level: 90 },
        { name: 'PHP', level: 90 },
        { name: 'Node.js', level: 88 },
        { name: 'GraphQL', level: 82 },
        { name: 'Express.js', level: 80 },
        { name: 'REST APIs', level: 78 },
      ]
    },
    {
      icon: FaDatabase,
      title: 'Database Technologies',
      skills: [
        { name: 'MySQL', level: 95 },
        { name: 'Firebase', level: 90 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MariaDB', level: 80 },
        { name: 'MongoDB', level: 75 },
      ]
    },
    {
      icon: FaMobile,
      title: 'Mobile Development',
      skills: [
        { name: 'Android Studio', level: 75 },
        { name: 'React Native', level: 70 },
        { name: 'Flutter', level: 60 },
      ]
    },
    {
      icon: FaPalette,
      title: 'Design Tools',
      skills: [
        { name: 'Canva', level: 90 },
        { name: 'Figma', level: 85 },
        { name: 'Framer', level: 70 },
        { name: 'WordPress', level: 70 },
      ]
    },
    {
      icon: FaTools,
      title: 'Development Tools',
      skills: [
        { name: 'VS Code', level: 96 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Postman', level: 75 },
        { name: 'Terminal', level: 73 },
      ]
    },
    {
      icon: FaCloud,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Firebase', level: 90 },
        { name: 'Vercel', level: 87 },
        { name: 'Netlify', level: 80 },
        { name: 'Railway', level: 80 },
        { name: 'AWS', level: 80 },
      ]
    }
  ]

  const softSkills = [
    'Problem Solving', 'Critical Thinking', 'Team Collaboration', 'Project Management',
    'Time Management', 'Adaptability', 'Continuous Learning',
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
          {(showAllCategories ? skillCategories : skillCategories.slice(0, 3)).map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-300 to-indigo-300 rounded-xl flex items-center justify-center text-white mr-4">
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
                      <span className="text-pink-300 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5 }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-pink-300 to-indigo-300 rounded-full transition-all duration-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More/See Less Button for Categories */}
        {skillCategories.length > 3 && (
          <div className="flex justify-center mt-2 mb-16">
            {!showAllCategories ? (
              <button
                className="px-6 py-2 rounded-lg font-semibold shadow transition-colors duration-200 text-gray-900 bg-gradient-to-r from-pink-300 to-indigo-300 hover:from-pink-400 hover:to-indigo-400"
                onClick={() => setShowAllCategories(true)}
              >
                See More
              </button>
            ) : (
              <button
                className="px-6 py-2 rounded-lg font-semibold shadow transition-colors duration-200 text-white bg-gray-700 hover:bg-gray-600"
                onClick={() => setShowAllCategories(false)}
              >
                See Less
              </button>
            )}
          </div>
        )}

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
