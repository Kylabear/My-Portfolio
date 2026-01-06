'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

type ProjectType = {
  title: string;
  image: string;
  client?: string;
  location?: string;
  description?: string;
  technologies?: string[];
  features?: string[];
  category?: string;
  github?: string;
  demo?: string | null;
  video?: string;
};

const Projects: React.FC = () => {
  const projects: ProjectType[] = [
    {
      title: 'Accounting Monitoring System',
      image: '/images/ACCOUNTING.png',
      client: 'DA CAR - Accounting Section',
      description:
        'A comprehensive accounting system designed to streamline financial operations and provide real-time monitoring of accounting processes. Developed in collaboration with my co-intern, Edmarc Dave Estayan.',
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'Chart.js', 'React.js', 'Tailwind CSS'],
      features: [
        'Financial data management and reporting',
        'Real-time dashboard with analytics',
        'User authentication and role management',
        'Automated calculations and validations',
        'Export functionality for reports',
      ],
      category: 'web',
      github: 'https://github.com/Kylabear',
      demo: null,
    },
    {
      title: 'Contraceptech',
      image: '/images/CONTACEPTECH.png',
      client: 'Capstone Project',
      description:
        'A mobile application designed to address limited access, cultural stigma, and privacy concerns surrounding family planning and reproductive health. I contributed to a portion of the development, while the primary developer of the project is Jemimah Indoken',
      technologies: ['Android Studio', 'Kotlin', 'JavaScript', 'Firebase'],
      features: ['Open Forum for community discussions', 'AI-powered chatbot for instant answers', 'Telehealth consultations with professionals'],
      category: 'mobile',
      github: 'https://github.com/Kylabear',
      demo: null,
    },
    {
      title: 'Peak Baguio',
      image: '/images/PEAKBAGUIO.png',
      client: 'Event Project',
      description: 'A personalized Travel Planning Portal for Baguio City',
      technologies: ['Next.js', 'Tailwind CSS', 'JavaScript'],
      features: ['Event schedules', 'Gallery', 'Ticket information'],
      category: 'web',
      github: '',
      demo: null,
    },
    {
      title: 'Portfolio',
      image: '/images/PORTFOLIO.png',
      client: 'Personal Portfolio',
      description:
        'A modern, responsive portfolio website showcasing my skills, projects, and professional experience. I am actively updating the details and information on this website.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Icons'],
      features: ['Responsive design', 'Smooth animations', 'SEO optimized'],
      category: 'web',
      github: 'https://github.com/Kylabear',
      demo: null,
    },
  ];

  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <section id="projects" className="section-padding bg-gray-900/50">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-4">
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <p className="section-subtitle">Click a project to view details</p>
        </motion.div>

        <div className="responsive-grid mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="glass-card-hover overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative w-full h-48 bg-gray-800 overflow-hidden">
                <img src={project.image} alt={project.title + ' image'} className="block object-cover h-full w-full" />
                {/* Overlay title - centered */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
                  <h3 className="text-lg md:text-xl font-serif text-white text-center drop-shadow tracking-wide">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-gray-900 rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl" onClick={() => setSelectedProject(null)} aria-label="Close">
                ×
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  {selectedProject.video ? (
                    <video
                      className="w-full h-64 object-cover rounded"
                      src={selectedProject.video}
                      controls
                      playsInline
                      preload="metadata"
                    />
                  ) : selectedProject.title && selectedProject.title.toLowerCase().includes('contraceptech') ? (
                    // Padded container for Contraceptech so the image isn't cropped in the modal
                    <div className="p-4 bg-gray-800 rounded">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title + ' image'}
                        className="w-full h-64 object-contain rounded"
                      />
                    </div>
                  ) : selectedProject.title && (selectedProject.title.toLowerCase().includes('r&b') || selectedProject.title.toLowerCase().includes('one stopmart') || selectedProject.title.toLowerCase().includes('rb onestopmart')) ? (
                    // Placeholder for R&B OneStopMart while company is in planning stage
                    <div className="p-6 bg-gray-800 rounded flex items-center justify-center h-64">
                      <div className="text-center text-gray-300">
                        <div className="text-4xl mb-3">📦</div>
                        <div className="text-sm mt-1">Company is currently at the Planning Stage.</div>
                      </div>
                    </div>
                  ) : (
                    <img src={selectedProject.image} alt={selectedProject.title + ' image'} className="w-full h-64 object-cover rounded" />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  {selectedProject.client && <div className="text-sm text-gray-400 mb-2">{selectedProject.client}</div>}
                  <p className="text-gray-300 text-sm mb-4">{selectedProject.description}</p>

                  {selectedProject.technologies && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((t, i) => (
                          <span key={i} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.features && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features</h4>
                      <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                        {selectedProject.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 mt-4 justify-center">
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn-outline w-full sm:w-auto text-center">
                        <FaGithub className="inline mr-2" /> Code
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="btn-primary w-full sm:w-auto text-center">
                        <FaExternalLinkAlt className="inline mr-2" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
