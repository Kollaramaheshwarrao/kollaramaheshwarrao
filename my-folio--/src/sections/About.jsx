import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { FaLinkedin, FaGithub, FaFilePdf, FaBriefcase, FaGraduationCap, FaTrophy, FaCertificate, FaFlask, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const timeline = [
  // Education
  {
    year: '2020 – 2022',
    category: 'Education',
    icon: <FaGraduationCap />,
    color: 'from-blue-500 to-cyan-400',
    title: 'Intermediate (MPC)',
    subtitle: 'Siddhartha Junior College',
  },
  {
    year: '2022 – 2026',
    category: 'Education',
    icon: <FaGraduationCap />,
    color: 'from-blue-500 to-cyan-400',
    title: 'B.Tech CSE',
    subtitle: 'Pallavi Engineering College',
  },
  // Experience
  {
    year: '2024',
    category: 'Experience',
    icon: <FaBriefcase />,
    color: 'from-orange-500 to-yellow-400',
    title: 'International Sales Specialist',
    subtitle: 'Codeyoung · Bangalore',
    desc: 'Managed B2C international client interactions, delivered product pitches, converted leads, and maintained CRM pipeline.',
  },
  // Internships
  {
    year: '2024 – 2025',
    category: 'Internship',
    icon: <FaFlask />,
    color: 'from-green-500 to-teal-400',
    title: 'AICTE Virtual Internship',
    subtitle: 'Edunet Foundation – Shell, Microsoft, VOIS',
  },
  {
    year: '2025',
    category: 'Internship',
    icon: <FaFlask />,
    color: 'from-green-500 to-teal-400',
    title: 'ServiceNow Virtual Internship',
    subtitle: 'System Administrator',
  },
  {
    year: '2026',
    category: 'Internship',
    icon: <FaFlask />,
    color: 'from-green-500 to-teal-400',
    title: 'Infosys Springboard 6.0',
    subtitle: 'Virtual Internship',
  },
  // Research
  {
    year: '2024',
    category: 'Research',
    icon: <FaFlask />,
    color: 'from-purple-500 to-pink-400',
    title: 'Research Paper Published',
    subtitle: 'International Conference on Women Safety in Cyberspace',
  },
  {
    year: '2024',
    category: 'Research',
    icon: <FaFlask />,
    color: 'from-purple-500 to-pink-400',
    title: 'Research Paper Published',
    subtitle: 'International Conference on Cybersecurity – Digital Forensics',
  },
  // Achievements & Awards
  {
    year: '2023',
    category: 'Achievement',
    icon: <FaTrophy />,
    color: 'from-yellow-500 to-amber-400',
    title: 'IITB National Entrepreneurship Challenge',
    subtitle: 'Top 50 Finalist',
  },
  {
    year: '2024',
    category: 'Achievement',
    icon: <FaTrophy />,
    color: 'from-yellow-500 to-amber-400',
    title: 'CSI Hyderabad Chapter – Best Student Vol. Award (Male)',
    subtitle: 'Regional Convention',
  },
  {
    year: '2025',
    category: 'Achievement',
    icon: <FaTrophy />,
    color: 'from-yellow-500 to-amber-400',
    title: 'Head Honcho – CSI Hyderabad Chapter Student Council',
    subtitle: 'Received Award',
  },
  {
    year: '2025',
    category: 'Achievement',
    icon: <FaTrophy />,
    color: 'from-yellow-500 to-amber-400',
    title: 'IITB National Entrepreneurship Challenge',
    subtitle: 'Top 20 Finalist',
  },
  {
    year: '2025',
    category: 'Achievement',
    icon: <FaTrophy />,
    color: 'from-yellow-500 to-amber-400',
    title: 'Hackinfinity Winner & Nirvana Hackathon Winner',
    subtitle: 'Back-to-back Hackathon Wins',
  },
  {
    year: '2025',
    category: 'Achievement',
    icon: <FaTrophy />,
    color: 'from-yellow-500 to-amber-400',
    title: 'Vibe Hackathon 2025 Finalist',
    subtitle: '',
  },
  {
    year: '2026',
    category: 'Achievement',
    icon: <FaTrophy />,
    color: 'from-yellow-500 to-amber-400',
    title: 'Student Excellence Award',
    subtitle: 'Pallavi Engineering College',
  },
  {
    year: '2026',
    category: 'Achievement',
    icon: <FaTrophy />,
    color: 'from-yellow-500 to-amber-400',
    title: 'SPECTRA 2026 Project Expo – Runner Up',
    subtitle: '',
  },
  // Certifications
  {
    year: '2024',
    category: 'Certification',
    icon: <FaCertificate />,
    color: 'from-red-500 to-rose-400',
    title: 'Google Career Certificate Scholar',
    subtitle: '',
  },
  {
    year: '2024',
    category: 'Certification',
    icon: <FaCertificate />,
    color: 'from-red-500 to-rose-400',
    title: 'BI Professional Certificate',
    subtitle: 'Coursera',
  },
  {
    year: '2024',
    category: 'Certification',
    icon: <FaCertificate />,
    color: 'from-red-500 to-rose-400',
    title: 'Digital Marketing Professional Certificate',
    subtitle: 'Coursera',
  },
  // Leadership
  {
    year: '2022 – 2026',
    category: 'Leadership',
    icon: <FaUsers />,
    color: 'from-indigo-500 to-violet-400',
    title: 'Founded & Led College Tech Communities',
    subtitle: 'Multiple domains & clubs across campus',
  },
];

const categories = ['All', 'Education', 'Experience', 'Internship', 'Research', 'Achievement', 'Certification', 'Leadership'];

const About = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? timeline : timeline.filter(t => t.category === active);

  return (
    <SectionWrapper id="about" title="About Me">
      <p className="text-lg leading-7 text-center mb-4 text-gray-600">
        Final year B.Tech CSE student passionate about tech, entrepreneurship, and building impactful solutions. Sales professional, researcher, hackathon winner, and community leader.
      </p>

      <div className="flex justify-center gap-4 mb-6">
        <a href="https://www.linkedin.com/in/kollara-maheshwar-rao" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-2xl"><FaLinkedin /></a>
        <a href="https://github.com/Kollaramaheshwarrao" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black text-2xl"><FaGithub /></a>
        <a href="/kollaramaheshwarrao.pdf" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 text-2xl"><FaFilePdf /></a>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${active === cat ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400" />
        <ul className="space-y-6 pl-16">
          {filtered.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05, type: 'spring', stiffness: 80 }}
              className="relative"
            >
              {/* Icon dot */}
              <div className={`absolute -left-10 w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-sm shadow-lg`}>
                {item.icon}
              </div>

              <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-transparent hover:shadow-xl transition-shadow"
                style={{ borderImage: `linear-gradient(to bottom, #6366f1, #ec4899) 1` }}>
                <div className="flex items-center justify-between flex-wrap gap-1 mb-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${item.color} text-white`}>{item.category}</span>
                  <span className="text-xs text-gray-400 font-medium">{item.year}</span>
                </div>
                <p className="font-semibold text-gray-800">{item.title}</p>
                {item.subtitle && <p className="text-sm text-gray-500">{item.subtitle}</p>}
                {item.desc && <p className="text-sm text-gray-500 mt-1">{item.desc}</p>}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default About;
