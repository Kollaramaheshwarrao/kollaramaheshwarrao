import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'UdyamSphere',
    desc: 'An entrepreneurship platform connecting startups, mentors, and investors. Built with React, Node.js & Firebase.',
    tags: ['React', 'Node.js', 'Firebase'],
    category: 'Full Stack',
    github: 'https://github.com/Kollaramaheshwarrao',
    demo: '#',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'AI Women Safety System',
    desc: 'NLP-based system for detecting threats in cyberspace. Research published at International Conference 2024.',
    tags: ['Python', 'NLP', 'ML'],
    category: 'AI/ML',
    github: 'https://github.com/Kollaramaheshwarrao',
    demo: '#',
    color: 'from-purple-500 to-pink-400',
  },
  {
    title: 'Digital Forensics Tool',
    desc: 'Cybersecurity tool for digital evidence analysis. Published at International Cybersecurity Conference 2024.',
    tags: ['Python', 'Cybersecurity', 'Forensics'],
    category: 'AI/ML',
    github: 'https://github.com/Kollaramaheshwarrao',
    demo: '#',
    color: 'from-red-500 to-orange-400',
  },
  {
    title: 'Mahi Genix Portfolio',
    desc: 'Personal portfolio website with timeline, animations, and contact form integration.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    category: 'Frontend',
    github: 'https://github.com/Kollaramaheshwarrao/kollaramaheshwarrao',
    demo: 'https://kollaramaheshwarrao.vercel.app',
    color: 'from-green-500 to-teal-400',
  },
  {
    title: 'CSI Community Platform',
    desc: 'Platform for managing CSI Hyderabad Chapter events, members, and announcements.',
    tags: ['React', 'Firebase', 'Tailwind'],
    category: 'Full Stack',
    github: 'https://github.com/Kollaramaheshwarrao',
    demo: '#',
    color: 'from-yellow-500 to-amber-400',
  },
  {
    title: 'Generative AI Chatbot',
    desc: 'Prompt-engineered AI chatbot using Generative AI APIs with custom knowledge base.',
    tags: ['Python', 'Gen AI', 'Streamlit'],
    category: 'AI/ML',
    github: 'https://github.com/Kollaramaheshwarrao',
    demo: '#',
    color: 'from-indigo-500 to-violet-400',
  },
  {
    title: 'Sales CRM Dashboard',
    desc: 'CRM tool built during Codeyoung role to track leads, pipeline, and client interactions.',
    tags: ['React', 'MongoDB', 'Express'],
    category: 'Full Stack',
    github: 'https://github.com/Kollaramaheshwarrao',
    demo: '#',
    color: 'from-pink-500 to-rose-400',
  },
  {
    title: 'Data Analysis Dashboard',
    desc: 'Interactive BI dashboard for visualizing datasets with charts, filters, and reports.',
    tags: ['Python', 'Streamlit', 'Pandas'],
    category: 'Data',
    github: 'https://github.com/Kollaramaheshwarrao',
    demo: '#',
    color: 'from-teal-500 to-cyan-400',
  },
  {
    title: 'Hackathon Winning Project – Nirvana',
    desc: 'Winning project at Nirvana Hackathon 2025. Innovative tech solution built in 24 hours.',
    tags: ['React', 'Node.js', 'AI'],
    category: 'Full Stack',
    github: 'https://github.com/Kollaramaheshwarrao',
    demo: '#',
    color: 'from-orange-500 to-yellow-400',
  },
  {
    title: 'SPECTRA Expo Project',
    desc: 'Runner-up project at SPECTRA 2026 Project Expo. Smart tech solution with real-world impact.',
    tags: ['IoT', 'React', 'Firebase'],
    category: 'Full Stack',
    github: 'https://github.com/Kollaramaheshwarrao',
    demo: '#',
    color: 'from-cyan-500 to-blue-400',
  },
];

const categories = ['All', 'Full Stack', 'AI/ML', 'Frontend', 'Data'];

const MyWork = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="mywork" className="relative py-20 px-4 bg-[#0f172a] overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl" />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-white mb-2"
      >
        My Work
      </motion.h2>
      <p className="text-center text-gray-400 mb-8">10 projects that define my journey 🚀</p>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${active === cat ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((project, idx) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: idx * 0.05, type: 'spring', stiffness: 80 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-white/10 transition-all duration-300 flex flex-col gap-3"
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${project.color} mb-1`} />

              <div className="flex items-start justify-between">
                <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${project.color} text-white font-medium ml-2 shrink-0`}>
                  {project.category}
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-6">{project.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs bg-white/10 text-gray-300 px-2 py-0.5 rounded-md">{tag}</span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition">
                  <FaGithub /> Code
                </a>
                {project.demo !== '#' && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MyWork;
