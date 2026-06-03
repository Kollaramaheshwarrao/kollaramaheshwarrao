import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

// ✅ TO ADD A NEW PROJECT — just add an object here!
const projects = [
  {
    id: 1,
    title: 'UdyamSphere',
    desc: 'Entrepreneurship platform connecting startups, mentors & investors.',
    long: 'Built a full-stack platform for the startup ecosystem with features like mentor matching, investor discovery, and event management. Powered by React, Node.js & Firebase.',
    tags: ['React', 'Node.js', 'Firebase'],
    category: 'Full Stack',
    github: 'https://github.com/Kollaramaheshwarrao',
    demo: '#',
    emoji: '🚀',
    gradient: 'from-blue-600 to-cyan-500',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Women Safety System',
    desc: 'NLP system detecting threats in cyberspace — research published 2024.',
    long: 'Developed an NLP pipeline using Naive Bayes, tokenization & lemmatization to classify threatening content online. Published at International Conference on Women Safety in Cyberspace 2024.',
    tags: ['Python', 'NLP', 'Naive Bayes'],
    category: 'AI/ML',
    github: 'https://github.com/Kollaramaheshwarrao',
    demo: '#',
    emoji: '🛡️',
    gradient: 'from-purple-600 to-pink-500',
    featured: true,
  },
  {
    id: 3,
    title: 'Digital Forensics Tool',
    desc: 'Cybersecurity evidence analysis tool — published at Int. Conference 2024.',
    long: 'Built a digital forensics toolkit for analyzing cyber evidence, extracting metadata, and generating investigation reports. Published at International Cybersecurity Conference 2024.',
    tags: ['Python', 'Cybersecurity', 'Forensics'],
    category: 'AI/ML',
    github: 'https://github.com/Kollaramaheshwarrao',
    demo: '#',
    emoji: '🔍',
    gradient: 'from-red-600 to-orange-500',
    featured: false,
  },
  {
    id: 4,
    title: 'Mahi Genix Portfolio',
    desc: 'This portfolio — built with React, Tailwind & Framer Motion.',
    long: 'Designed and developed a personal portfolio with animated timeline, skill showcase, dark contact section, and Google Sheets form integration.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    category: 'Frontend',
    github: 'https://github.com/Kollaramaheshwarrao/kollaramaheshwarrao',
    demo: 'https://kollaramaheshwarrao.vercel.app',
    emoji: '🎨',
    gradient: 'from-green-600 to-teal-500',
    featured: false,
  },
  {
    id: 5,
    title: 'CSI Community Platform',
    desc: 'Event & member management platform for CSI Hyderabad Chapter.',
    long: 'Built a full-stack community platform for managing events, registrations, and member tracking for the CSI Hyderabad Chapter student council.',
    tags: ['React', 'Firebase', 'Tailwind'],
    category: 'Full Stack',
    github: 'https://github.com/Kollaramaheshwarrao',
    demo: '#',
    emoji: '👥',
    gradient: 'from-yellow-500 to-amber-400',
    featured: false,
  },
  {
    id: 6,
    title: 'Generative AI Chatbot',
    desc: 'Prompt-engineered chatbot with custom knowledge base using Gen AI APIs.',
    long: 'Engineered a context-aware AI chatbot using Generative AI APIs with Streamlit UI, custom system prompts, and domain-specific knowledge injection.',
    tags: ['Python', 'Gen AI', 'Streamlit'],
    category: 'AI/ML',
    github: 'https://github.com/Kollaramaheshwarrao',
    demo: '#',
    emoji: '🤖',
    gradient: 'from-indigo-600 to-violet-500',
    featured: false,
  },
  {
    id: 7,
    title: 'Sales CRM Dashboard',
    desc: 'CRM tool for tracking leads, pipeline & client interactions.',
    long: 'Developed a real-world CRM dashboard during my role at Codeyoung with lead tracking, pipeline stages, email logs, and analytics using MERN stack.',
    tags: ['React', 'MongoDB', 'Express'],
    category: 'Full Stack',
    github: 'https://github.com/Kollaramaheshwarrao',
    demo: '#',
    emoji: '📊',
    gradient: 'from-pink-600 to-rose-500',
    featured: false,
  },
  {
    id: 8,
    title: 'Data Analysis Dashboard',
    desc: 'Interactive BI dashboard with charts, filters and reports.',
    long: 'Built an interactive data analytics dashboard using Python, Streamlit & Pandas for visualizing business datasets with dynamic filters, charts, and export features.',
    tags: ['Python', 'Streamlit', 'Pandas'],
    category: 'Data',
    github: 'https://github.com/Kollaramaheshwarrao',
    demo: '#',
    emoji: '📈',
    gradient: 'from-teal-600 to-cyan-500',
    featured: false,
  },
  {
    id: 9,
    title: 'Nirvana Hackathon Winner',
    desc: 'Winning project built in 24 hours at Nirvana Hackathon 2025.',
    long: 'Designed and shipped a full working product in 24 hours at Nirvana Hackathon 2025. Won first place for innovation, execution, and real-world impact.',
    tags: ['React', 'Node.js', 'AI'],
    category: 'Full Stack',
    github: 'https://github.com/Kollaramaheshwarrao',
    demo: '#',
    emoji: '🏆',
    gradient: 'from-orange-500 to-yellow-400',
    featured: false,
  },
  {
    id: 10,
    title: 'SPECTRA Expo Project',
    desc: 'Runner-up at SPECTRA 2026 Project Expo — smart tech with real-world impact.',
    long: 'Built a smart IoT + web solution presented at SPECTRA 2026 Project Expo. Achieved runner-up position for innovative approach and scalable architecture.',
    tags: ['IoT', 'React', 'Firebase'],
    category: 'Full Stack',
    github: 'https://github.com/Kollaramaheshwarrao',
    demo: '#',
    emoji: '🌟',
    gradient: 'from-cyan-600 to-blue-500',
    featured: false,
  },
];

const categories = ['All', 'Full Stack', 'AI/ML', 'Frontend', 'Data'];

const MyWork = () => {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="mywork" className="relative py-20 px-4 bg-[#0a0f1e] overflow-hidden">
      {/* bg blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 opacity-5 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 opacity-5 blur-3xl rounded-full" />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-white mb-1"
      >
        My Work
      </motion.h2>
      <p className="text-center text-gray-500 mb-8 text-sm">Click any project to explore 👇</p>

      {/* Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${active === cat
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/20'
              : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project List */}
      <div className="max-w-2xl mx-auto flex flex-col gap-3">
        <AnimatePresence>
          {filtered.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.04, type: 'spring', stiffness: 90 }}
              onClick={() => setSelected(selected?.id === project.id ? null : project)}
              className="cursor-pointer"
            >
              {/* Row Card */}
              <div className={`flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300`}>
                {/* Emoji */}
                <div className={`w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-xl shadow-lg`}>
                  {project.emoji}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-white font-bold text-sm">{project.title}</h3>
                    {project.featured && (
                      <span className="text-xs px-1.5 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">⭐</span>
                    )}
                  </div>
                  <p className="text-gray-400 text-xs mt-0.5 line-clamp-1">{project.desc}</p>
                  {/* Tags on mobile */}
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-white/10 text-gray-300 px-1.5 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <motion.div
                  animate={{ rotate: selected?.id === project.id ? 90 : 0 }}
                  className="text-gray-500 text-xs shrink-0"
                >
                  ▶
                </motion.div>
              </div>

              {/* Expanded Detail Panel */}
              <AnimatePresence>
                {selected?.id === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className={`mx-1 mt-1 rounded-2xl bg-gradient-to-br ${project.gradient} p-px`}>
                      <div className="bg-[#0f172a] rounded-2xl p-4 flex flex-col gap-4">
                        <p className="text-gray-300 text-sm leading-6">{project.long}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className={`text-xs px-2 py-0.5 rounded-md bg-gradient-to-r ${project.gradient} text-white font-medium`}>{tag}</span>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-xl transition flex-1 justify-center">
                            <FaGithub /> Code
                          </a>
                          {project.demo !== '#' && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer"
                              className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white text-sm rounded-xl shadow transition hover:opacity-90 flex-1 justify-center`}>
                              <FaExternalLinkAlt /> Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Add project hint */}
      <p className="text-center text-gray-600 text-xs mt-10 flex items-center justify-center gap-1">
        <FaCode /> Add new projects by editing the projects array in Mywork.jsx
      </p>
    </section>
  );
};

export default MyWork;
