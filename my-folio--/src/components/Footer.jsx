import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const socials = [
  { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/kollara-maheshwar-rao', label: 'LinkedIn', color: 'hover:bg-blue-600' },
  { icon: <FaGithub />, url: 'https://github.com/Kollaramaheshwarrao', label: 'GitHub', color: 'hover:bg-gray-600' },
  { icon: <FaInstagram />, url: 'https://instagram.com/', label: 'Instagram', color: 'hover:bg-pink-600' },
  { icon: <FaEnvelope />, url: 'mailto:kollaramaheshwarrao@gmail.com', label: 'Email', color: 'hover:bg-red-600' },
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'My Work', href: '#mywork' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => (
  <footer className="relative bg-[#0a0f1e] text-white overflow-hidden pt-16 pb-8 px-4">

    {/* Background glows */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-600 opacity-10 blur-3xl rounded-full" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-5 blur-3xl rounded-full" />
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500 opacity-5 blur-3xl rounded-full" />

    <div className="max-w-5xl mx-auto relative z-10">

      {/* Top - Branding */}
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Mahi Genix
        </motion.h2>
        <p className="text-gray-400 mt-2 text-sm">Full Stack Developer · AI Enthusiast · Entrepreneur</p>

        {/* Divider */}
        <div className="mt-6 h-px w-32 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
      </div>

      {/* Middle - Nav + Socials */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">

        {/* Nav Links */}
        <ul className="flex flex-wrap justify-center gap-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-3">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg transition-all duration-200 ${s.color}`}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-white/10 mb-6" />

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} <span className="text-gray-300 font-semibold">Kollara Maheshwar Rao</span>. All rights reserved.</p>
        <p>Built with <span className="text-pink-400">♥</span> using React & Tailwind CSS</p>

        {/* Back to top */}
        <motion.a
          href="#home"
          whileHover={{ y: -3 }}
          className="flex items-center gap-1.5 text-gray-400 hover:text-white transition"
        >
          <FaArrowUp className="text-xs" /> Back to top
        </motion.a>
      </div>
    </div>
  </footer>
);

export default Footer;
