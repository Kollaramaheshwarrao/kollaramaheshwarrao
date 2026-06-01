import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';
const timeline = [
  {
    year: '2024',
    event: 'Started working at Awesome Company',
  },
  {
    year: '2022',
    event: 'Graduated from University with a CS degree',
  },
  {
    year: '2020',
    event: 'Built my first React app',
  },
];

const timelineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, type: 'spring', stiffness: 60 },
  }),
};

const About = () => (
  <SectionWrapper id="about" title="About Me">
    <p className="text-lg leading-7 text-center mb-6">
      I'm a passionate developer who loves building web applications with clean UI and great user experience. I have a keen interest in React, modern web technologies, and learning new tools to solve real-world problems.
    </p>
    <div className="flex justify-center gap-6 mb-8">
      <a
        href="https://www.linkedin.com/in/your-linkedin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-blue-600 hover:text-blue-800 text-2xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/your-github"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-gray-800 hover:text-black text-2xl"
      >
        <FaGithub />
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
        className="text-red-600 hover:text-red-800 text-2xl"
      >
        <FaFilePdf />
      </a>
    </div>
    <div className="max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-center">Timeline</h3>
      <ul className="space-y-4">
        {timeline.map((item, idx) => (
          <motion.li
            key={idx}
            className="flex items-start gap-3"
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={timelineVariants}
          >
            <span className="font-bold text-blue-500">{item.year}</span>
            <span className="text-gray-700">{item.event}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  </SectionWrapper>
);

export default About;
