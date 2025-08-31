'use client'

import { motion } from 'framer-motion'
import { 
  FaCode, 
  FaDatabase, 
  FaMobile, 
  FaPalette, 
  FaTools, 
  FaCloud,
  FaServer,
  FaLaptopCode
} from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FaCode,
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
        { name: 'Perl', level: 65 },
        { name: 'R', level: 70 },
      ]
    },
    {
      title: 'Frontend Development',
      icon: FaLaptopCode,
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
      title: 'Backend Development',
      icon: FaServer,
      skills: [
        { name: 'Laravel', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'PHP', level: 90 },
        { name: 'Express.js', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 },
      ]
    },
    {
      title: 'Database Management',
      icon: FaDatabase,
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MariaDB', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'MongoDB', level: 75 },
      ]
    },
    {
      title: 'Mobile Development',
      icon: FaMobile,
      skills: [
        { name: 'Flutter', level: 80 },
        { name: 'React Native', level: 75 },
        { name: 'Mobile UI/UX', level: 80 },
      ]
    },
    {
      title: 'Design & Tools',
      icon: FaPalette,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Canva', level: 90 },
        { name: 'Framer', level: 80 },
        { name: 'Adobe XD', level: 75 },
        { name: 'UI/UX Design', level: 80 },
      ]
    },
    {
      title: 'Development Tools',
      icon: FaTools,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Docker', level: 70 },
        { name: 'Postman', level: 85 },
        { name: 'Terminal', level: 80 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: FaCloud,
      skills: [
        { name: 'AWS', level: 70 },
        { name: 'Firebase', level: 85 },
        { name: 'Vercel', level: 80 },
        { name: 'Netlify', level: 75 },
        { name: 'CI/CD', level: 70 },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency in various technologies and tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <category.icon className="text-primary-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-semibold text-primary-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Additional Skills & Competencies
            </h3>
            <p className="text-gray-700">
              Beyond technical skills, I also possess strong soft skills and professional competencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Problem Solving',
              'Critical Thinking',
              'Team Collaboration',
              'Project Management',
              'Communication',
              'Time Management',
              'Adaptability',
              'Continuous Learning'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-gray-800 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
