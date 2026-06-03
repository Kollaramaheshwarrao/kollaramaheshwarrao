import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaMedal, FaFlask, FaCertificate, FaUsers, FaExternalLinkAlt } from 'react-icons/fa';

const achievements = [
  {
    category: 'Award',
    icon: <FaTrophy />,
    color: 'from-yellow-500 to-amber-400',
    title: 'Student Excellence Award',
    org: 'Pallavi Engineering College · 2026',
    cert: null,
  },
  {
    category: 'Leadership',
    icon: <FaUsers />,
    color: 'from-blue-500 to-cyan-400',
    title: 'Head Honcho – CSI Hyderabad Chapter Student Council',
    org: '2025',
    cert: null,
  },
  {
    category: 'Competition',
    icon: <FaTrophy />,
    color: 'from-orange-500 to-red-400',
    title: 'IITB National Entrepreneurship Challenge – Top 20',
    org: 'IIT Bombay · 2025',
    cert: null,
  },
  {
    category: 'Competition',
    icon: <FaTrophy />,
    color: 'from-orange-500 to-red-400',
    title: 'IITB National Entrepreneurship Challenge – Top 50',
    org: 'IIT Bombay · 2023',
    cert: null,
  },
  {
    category: 'Award',
    icon: <FaMedal />,
    color: 'from-purple-500 to-pink-400',
    title: 'Best Student Volunteer Award (Male)',
    org: 'CSI Hyderabad Chapter Regional Convention · 2024',
    cert: null,
  },
  {
    category: 'Research',
    icon: <FaFlask />,
    color: 'from-green-500 to-teal-400',
    title: 'Research Paper – Women Safety in Cyberspace',
    org: 'International Conference · 2024',
    cert: null,
  },
  {
    category: 'Research',
    icon: <FaFlask />,
    color: 'from-green-500 to-teal-400',
    title: 'Research Paper – Digital Forensics',
    org: 'International Cybersecurity Conference · 2024',
    cert: null,
  },
  {
    category: 'Certification',
    icon: <FaCertificate />,
    color: 'from-red-500 to-rose-400',
    title: 'Google Career Certificate Scholar',
    org: 'Google · 2024',
    cert: null,
  },
  {
    category: 'Certification',
    icon: <FaCertificate />,
    color: 'from-red-500 to-rose-400',
    title: 'BI Professional Certificate',
    org: 'Coursera · 2024',
    cert: null,
  },
  {
    category: 'Certification',
    icon: <FaCertificate />,
    color: 'from-red-500 to-rose-400',
    title: 'Digital Marketing Professional Certificate',
    org: 'Coursera · 2024',
    cert: null,
  },
  {
    category: 'Hackathon',
    icon: <FaTrophy />,
    color: 'from-cyan-500 to-blue-400',
    title: 'Hackinfinity Winner',
    org: '2025',
    cert: null,
  },
  {
    category: 'Hackathon',
    icon: <FaTrophy />,
    color: 'from-cyan-500 to-blue-400',
    title: 'Nirvana Hackathon Winner',
    org: '2025',
    cert: null,
  },
  {
    category: 'Hackathon',
    icon: <FaTrophy />,
    color: 'from-cyan-500 to-blue-400',
    title: 'Vibe Hackathon Finalist',
    org: '2025',
    cert: null,
  },
  {
    category: 'Competition',
    icon: <FaMedal />,
    color: 'from-indigo-500 to-violet-400',
    title: 'SPECTRA 2026 Project Expo – Runner Up',
    org: 'Pallavi Engineering College · 2026',
    cert: null,
  },
];

const categories = ['All', 'Award', 'Hackathon', 'Competition', 'Research', 'Certification', 'Leadership'];

const Achievements = () => {
  const [active, setActive] = useState('All');
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
      <p className="text-center text-gray-500 mb-8">Milestones, awards & certifications 🏆</p>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${active === cat ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence>
          {filtered.map((item, idx) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: idx * 0.05, type: 'spring', stiffness: 80 }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col gap-3 border border-gray-100 hover:border-purple-200"
            >
              {/* Icon + Category */}
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

              {/* Certificate slot */}
              {item.cert ? (
                <a
                  href={item.cert}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-2 text-xs font-semibold text-purple-600 hover:text-purple-800 transition"
                >
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
    </section>
  );
};

export default Achievements;
