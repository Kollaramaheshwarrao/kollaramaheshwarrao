import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaMedal, FaFlask, FaCertificate, FaUsers, FaExternalLinkAlt, FaTh, FaList, FaTimes } from 'react-icons/fa';

const achievements = [
  {
    category: 'Award', icon: <FaTrophy />, color: 'from-yellow-500 to-amber-400',
    title: 'Student Excellence Award', org: 'Pallavi Engineering College · 2026',
    cert: null, img: null,
  },
  {
    category: 'Leadership', icon: <FaUsers />, color: 'from-blue-500 to-cyan-400',
    title: 'Head Honcho – CSI Hyderabad Chapter Student Council', org: '2025',
    cert: null, img: null,
  },
  {
    category: 'Competition', icon: <FaTrophy />, color: 'from-orange-500 to-red-400',
    title: 'IITB National Entrepreneurship Challenge – Top 20', org: 'IIT Bombay · 2025',
    cert: null, img: null,
  },
  {
    category: 'Competition', icon: <FaTrophy />, color: 'from-orange-500 to-red-400',
    title: 'IITB National Entrepreneurship Challenge – Top 50', org: 'IIT Bombay · 2023',
    cert: null, img: null,
  },
  {
    category: 'Award', icon: <FaMedal />, color: 'from-purple-500 to-pink-400',
    title: 'Best Student Volunteer Award (Male)', org: 'CSI Hyderabad Chapter Regional Convention · 2024',
    cert: null, img: null,
  },
  {
    category: 'Research', icon: <FaFlask />, color: 'from-green-500 to-teal-400',
    title: 'Research Paper – Women Safety in Cyberspace', org: 'International Conference · 2024',
    cert: null, img: null,
  },
  {
    category: 'Research', icon: <FaFlask />, color: 'from-green-500 to-teal-400',
    title: 'Research Paper – Digital Forensics', org: 'International Cybersecurity Conference · 2024',
    cert: null, img: null,
  },
  {
    category: 'Certification', icon: <FaCertificate />, color: 'from-red-500 to-rose-400',
    title: 'Google Career Certificate Scholar', org: 'Google · 2024',
    cert: null, img: null,
  },
  {
    category: 'Certification', icon: <FaCertificate />, color: 'from-red-500 to-rose-400',
    title: 'BI Professional Certificate', org: 'Coursera · 2024',
    cert: null, img: null,
  },
  {
    category: 'Certification', icon: <FaCertificate />, color: 'from-red-500 to-rose-400',
    title: 'Digital Marketing Professional Certificate', org: 'Coursera · 2024',
    cert: null, img: null,
  },
  {
    category: 'Hackathon', icon: <FaTrophy />, color: 'from-cyan-500 to-blue-400',
    title: 'Hackinfinity Winner', org: '2025',
    cert: null, img: null,
  },
  {
    category: 'Hackathon', icon: <FaTrophy />, color: 'from-cyan-500 to-blue-400',
    title: 'Nirvana Hackathon Winner', org: '2025',
    cert: null, img: null,
  },
  {
    category: 'Hackathon', icon: <FaTrophy />, color: 'from-cyan-500 to-blue-400',
    title: 'Vibe Hackathon Finalist', org: '2025',
    cert: null, img: null,
  },
  {
    category: 'Competition', icon: <FaMedal />, color: 'from-indigo-500 to-violet-400',
    title: 'SPECTRA 2026 Project Expo – Runner Up', org: 'Pallavi Engineering College · 2026',
    cert: null, img: null,
  },
];

const categories = ['All', 'Award', 'Hackathon', 'Competition', 'Research', 'Certification', 'Leadership'];

const Achievements = () => {
  const [active, setActive] = useState('All');
  const [view, setView] = useState('grid'); // 'grid' | 'gallery'
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All' ? achievements : achievements.filter(a => a.category === active);

  return (
    <section id="achievements" className="relative py-20 px-4 bg-white overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_0px,#ede9fe,transparent)]" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-gray-900 mb-2"
      >
        Achievements
      </motion.h2>
      <p className="text-center text-gray-500 mb-6">Milestones, awards & certifications 🏆</p>

      {/* Controls Row */}
      <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto gap-3 mb-8">
        {/* Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${active === cat ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
          <button
            onClick={() => setView('grid')}
            className={`p-2 rounded-lg transition-all ${view === 'grid' ? 'bg-white shadow text-purple-600' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <FaList />
          </button>
          <button
            onClick={() => setView('gallery')}
            className={`p-2 rounded-lg transition-all ${view === 'gallery' ? 'bg-white shadow text-purple-600' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <FaTh />
          </button>
        </div>
      </div>

      {/* GRID VIEW */}
      {view === 'grid' && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((item, idx) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: idx * 0.04, type: 'spring', stiffness: 80 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col gap-3 border border-gray-100 hover:border-purple-200 cursor-pointer"
                onClick={() => item.img && setLightbox(item)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-lg shadow`}>
                    {item.icon}
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${item.color} text-white`}>
                    {item.category}
                  </span>
                </div>
                <h3 className="font-bold text-gray-800 leading-snug">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.org}</p>
                {item.cert ? (
                  <a href={item.cert} target="_blank" rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-2 text-xs font-semibold text-purple-600 hover:text-purple-800 transition"
                    onClick={e => e.stopPropagation()}>
                    <FaExternalLinkAlt /> View Certificate
                  </a>
                ) : (
                  <div className="mt-auto text-xs text-gray-300 border border-dashed border-gray-200 rounded-lg py-2 text-center">
                    📎 Certificate coming soon
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* GALLERY VIEW */}
      {view === 'gallery' && (
        <div className="max-w-6xl mx-auto columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.03 }}
                className="break-inside-avoid cursor-pointer group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setLightbox(item)}
              >
                {/* Certificate image or placeholder */}
                {item.img ? (
                  <img src={item.img} alt={item.title} className="w-full object-cover" />
                ) : (
                  <div className={`bg-gradient-to-br ${item.color} p-6 flex flex-col gap-2 min-h-[120px] items-center justify-center`}>
                    <div className="text-4xl">{item.icon}</div>
                    <p className="text-white text-xs font-bold text-center">{item.title}</p>
                    <p className="text-white/70 text-xs text-center">{item.org}</p>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-semibold bg-white/20 px-3 py-1 rounded-full backdrop-blur">
                    {item.cert ? '📄 View Cert' : '🔍 Preview'}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setLightbox(null)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-700">
                <FaTimes />
              </button>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${lightbox.color} flex items-center justify-center text-white text-xl shadow mb-4`}>
                {lightbox.icon}
              </div>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${lightbox.color} text-white`}>{lightbox.category}</span>
              <h3 className="font-bold text-gray-800 text-lg mt-3 mb-1">{lightbox.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{lightbox.org}</p>
              {lightbox.img && <img src={lightbox.img} alt={lightbox.title} className="w-full rounded-xl mb-4" />}
              {lightbox.cert ? (
                <a href={lightbox.cert} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold text-sm">
                  <FaExternalLinkAlt /> View Certificate
                </a>
              ) : (
                <p className="text-center text-gray-400 text-sm border border-dashed border-gray-200 rounded-xl py-3">📎 Certificate coming soon</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
