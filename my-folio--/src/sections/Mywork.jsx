import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  { id: 1, title: 'UdyamSphere', desc: 'Entrepreneurship platform connecting startups, mentors & investors.', long: 'Built a full-stack platform for the startup ecosystem with mentor matching, investor discovery, and event management. Powered by React, Node.js & Firebase.', tags: ['React', 'Node.js', 'Firebase'], category: 'Full Stack', github: 'https://github.com/Kollaramaheshwarrao', demo: '#', emoji: '🚀', gradient: 'from-blue-600 to-cyan-500', featured: true },
  { id: 2, title: 'AI Women Safety System', desc: 'NLP system detecting threats in cyberspace — research published 2024.', long: 'Developed an NLP pipeline using Naive Bayes, tokenization & lemmatization to classify threatening content online. Published at International Conference 2024.', tags: ['Python', 'NLP', 'Naive Bayes'], category: 'AI/ML', github: 'https://github.com/Kollaramaheshwarrao', demo: '#', emoji: '🛡️', gradient: 'from-purple-600 to-pink-500', featured: true },
  { id: 3, title: 'Digital Forensics Tool', desc: 'Cybersecurity evidence analysis tool — published at Int. Conference 2024.', long: 'Built a digital forensics toolkit for analyzing cyber evidence, extracting metadata, and generating investigation reports.', tags: ['Python', 'Cybersecurity', 'Forensics'], category: 'AI/ML', github: 'https://github.com/Kollaramaheshwarrao', demo: '#', emoji: '🔍', gradient: 'from-red-600 to-orange-500', featured: false },
  { id: 4, title: 'Mahi Genix Portfolio', desc: 'This portfolio — built with React, Tailwind & Framer Motion.', long: 'Designed and developed a personal portfolio with animated timeline, skill showcase, dark contact section, and Google Sheets form integration.', tags: ['React', 'Tailwind', 'Framer Motion'], category: 'Frontend', github: 'https://github.com/Kollaramaheshwarrao/kollaramaheshwarrao', demo: 'https://kollaramaheshwarrao.vercel.app', emoji: '🎨', gradient: 'from-green-600 to-teal-500', featured: false },
  { id: 5, title: 'CSI Community Platform', desc: 'Event & member management platform for CSI Hyderabad Chapter.', long: 'Built a full-stack community platform for managing events, registrations, and member tracking for the CSI Hyderabad Chapter student council.', tags: ['React', 'Firebase', 'Tailwind'], category: 'Full Stack', github: 'https://github.com/Kollaramaheshwarrao', demo: '#', emoji: '👥', gradient: 'from-yellow-500 to-amber-400', featured: false },
  { id: 6, title: 'Generative AI Chatbot', desc: 'Prompt-engineered chatbot with custom knowledge base using Gen AI APIs.', long: 'Engineered a context-aware AI chatbot using Generative AI APIs with Streamlit UI, custom system prompts, and domain-specific knowledge injection.', tags: ['Python', 'Gen AI', 'Streamlit'], category: 'AI/ML', github: 'https://github.com/Kollaramaheshwarrao', demo: '#', emoji: '🤖', gradient: 'from-indigo-600 to-violet-500', featured: false },
  { id: 7, title: 'Sales CRM Dashboard', desc: 'CRM tool for tracking leads, pipeline & client interactions.', long: 'Developed a real-world CRM dashboard during Codeyoung role with lead tracking, pipeline stages, email logs, and analytics using MERN stack.', tags: ['React', 'MongoDB', 'Express'], category: 'Full Stack', github: 'https://github.com/Kollaramaheshwarrao', demo: '#', emoji: '📊', gradient: 'from-pink-600 to-rose-500', featured: false },
  { id: 8, title: 'Data Analysis Dashboard', desc: 'Interactive BI dashboard with charts, filters and reports.', long: 'Built an interactive data analytics dashboard using Python, Streamlit & Pandas for visualizing business datasets with dynamic filters and export features.', tags: ['Python', 'Streamlit', 'Pandas'], category: 'Data', github: 'https://github.com/Kollaramaheshwarrao', demo: '#', emoji: '📈', gradient: 'from-teal-600 to-cyan-500', featured: false },
  { id: 9, title: 'Nirvana Hackathon Winner', desc: 'Winning project built in 24 hours at Nirvana Hackathon 2025.', long: 'Designed and shipped a full working product in 24 hours at Nirvana Hackathon 2025. Won first place for innovation, execution, and real-world impact.', tags: ['React', 'Node.js', 'AI'], category: 'Full Stack', github: 'https://github.com/Kollaramaheshwarrao', demo: '#', emoji: '🏆', gradient: 'from-orange-500 to-yellow-400', featured: false },
  { id: 10, title: 'SPECTRA Expo Project', desc: 'Runner-up at SPECTRA 2026 Project Expo — smart tech with real-world impact.', long: 'Built a smart IoT + web solution at SPECTRA 2026 Project Expo. Achieved runner-up for innovative approach and scalable architecture.', tags: ['IoT', 'React', 'Firebase'], category: 'Full Stack', github: 'https://github.com/Kollaramaheshwarrao', demo: '#', emoji: '🌟', gradient: 'from-cyan-600 to-blue-500', featured: false },
];

const categories = ['All', 'Full Stack', 'AI/ML', 'Frontend', 'Data'];

// Mobile swiper card
const MobileCard = ({ project }) => (
  <div className="w-full h-full flex flex-col rounded-3xl overflow-hidden shadow-2xl">
    {/* Card Header */}
    <div className={`bg-gradient-to-br ${project.gradient} p-6 flex flex-col gap-2`}>
      <div className="text-5xl mb-1">{project.emoji}</div>
      <h3 className="text-white font-extrabold text-xl leading-tight">{project.title}</h3>
      <span className="text-white/80 text-xs font-medium">{project.category}</span>
    </div>
    {/* Card Body */}
    <div className="bg-[#131929] flex-1 p-5 flex flex-col gap-4">
      <p className="text-gray-300 text-sm leading-6">{project.long}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-lg">{tag}</span>
        ))}
      </div>
      <div className="flex gap-3 mt-auto pt-2">
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 flex-1 py-3 bg-white/10 hover:bg-white/20 text-white text-sm rounded-2xl font-medium transition">
          <FaGithub /> Code
        </a>
        {project.demo !== '#' ? (
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 flex-1 py-3 bg-gradient-to-r ${project.gradient} text-white text-sm rounded-2xl font-medium transition`}>
            <FaExternalLinkAlt /> Live
          </a>
        ) : (
          <button className="flex-1 py-3 bg-white/5 text-gray-600 text-sm rounded-2xl font-medium cursor-not-allowed">
            Coming Soon
          </button>
        )}
      </div>
    </div>
  </div>
);

const MyWork = () => {
  const [active, setActive] = useState('All');
  const [current, setCurrent] = useState(0);

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  const prev = () => setCurrent(i => (i - 1 + filtered.length) % filtered.length);
  const next = () => setCurrent(i => (i + 1) % filtered.length);

  // reset index on filter change
  const handleFilter = (cat) => { setActive(cat); setCurrent(0); };

  return (
    <section id="mywork" className="relative py-16 px-4 bg-[#0a0f1e] overflow-hidden">
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
      <p className="text-center text-gray-500 mb-6 text-sm">10 projects · swipe or browse 🚀</p>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map(cat => (
          <button key={cat} onClick={() => handleFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${active === cat
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
              : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* ── MOBILE: Full card swiper ── */}
      <div className="block md:hidden">
        <div className="relative w-full max-w-sm mx-auto" style={{ height: 480 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={filtered[current]?.id}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute inset-0"
            >
              <MobileCard project={filtered[current]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Nav controls */}
        <div className="flex items-center justify-center gap-6 mt-5">
          <button onClick={prev}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition">
            <FaChevronLeft />
          </button>

          {/* Dots */}
          <div className="flex gap-1.5">
            {filtered.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`rounded-full transition-all ${i === current ? 'w-5 h-2 bg-blue-400' : 'w-2 h-2 bg-white/20'}`} />
            ))}
          </div>

          <button onClick={next}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition">
            <FaChevronRight />
          </button>
        </div>

        <p className="text-center text-gray-600 text-xs mt-3">{current + 1} / {filtered.length}</p>
      </div>

      {/* ── DESKTOP: 2-col grid ── */}
      <div className="hidden md:grid max-w-5xl mx-auto grid-cols-2 gap-5">
        {filtered.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.05, type: 'spring', stiffness: 80 }}
            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 transition-all duration-300"
          >
            {/* Top bar */}
            <div className={`bg-gradient-to-r ${project.gradient} px-5 py-4 flex items-center gap-3`}>
              <span className="text-3xl">{project.emoji}</span>
              <div>
                <h3 className="text-white font-bold text-base leading-tight">{project.title}</h3>
                <span className="text-white/70 text-xs">{project.category}</span>
              </div>
              {project.featured && <span className="ml-auto text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">⭐ Featured</span>}
            </div>

            <div className="p-5 flex flex-col gap-3">
              <p className="text-gray-400 text-sm leading-6">{project.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs bg-white/10 text-gray-300 px-2 py-0.5 rounded-md">{tag}</span>
                ))}
              </div>
              <div className="flex gap-3 mt-1">
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyWork;
