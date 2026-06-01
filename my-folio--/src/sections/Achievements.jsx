import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
const achievements = [
  {
    title: "Top 50 Finalist - IIT Bombay National Entrepreneurship Challenge 2024",
    cert: "/certificates/iit-bombay-entrepreneurship.pdf",
    img: "/images/iit-bombay.png"
  },
  {
    title: "Published a research paper in an International Journal",
    cert: "/certificates/research-paper.pdf",
    img: "/images/research-paper.png"
  },
  {
    title: "Winner - Inter-college Tech Quiz Competition",
    cert: "/certificates/tech-quiz.pdf",
    img: "/images/tech-quiz.png"
  },
  {
    title: "Developed a Technology Blog with 1K+ visitors/month",
    cert: "/certificates/tech-blog.pdf",
    img: "/images/tech-blog.png"
  }
];

const cardVariants = {
  hover: { rotateY: 15, scale: 1.05, boxShadow: "0 8px 32px rgba(0,0,0,0.2)" },
  initial: { rotateY: 0, scale: 1, boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }
};

const Achievements = () => (
  <SectionWrapper id="achievements" title="Achievements">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {achievements.map((ach, idx) => (
        <motion.div
          key={idx}
          className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center square-shape relative"
          style={{ aspectRatio: "1/1", minHeight: 260 }}
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <motion.img
            src={ach.img}
            alt={ach.title}
            className="w-20 h-20 object-contain mb-4 rounded-lg shadow-md"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div className="text-center text-lg font-semibold mb-3">{ach.title}</div>
          <a
            href={ach.cert}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded shadow hover:scale-105 transition-transform"
          >
            View Certificate
          </a>
          {/* 3D floating effect */}
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              boxShadow: "0 0 40px 0 rgba(80,0,200,0.15) inset"
            }}
            animate={{ rotateZ: [0, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          />
        </motion.div>
      ))}
    </div>
    <style>
      {`
        .square-shape {
          aspect-ratio: 1/1;
          min-width: 220px;
          max-width: 340px;
        }
      `}
    </style>
  </SectionWrapper>
);

export default Achievements;
