import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaDiscord, FaKaggle, FaMedium, FaStackOverflow } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  { icon: <FaInstagram />, url: 'https://instagram.com/yourprofile', label: 'Instagram' },
  { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: <FaDiscord />, url: 'https://discordapp.com/users/yourid', label: 'Discord' },
  { icon: <FaKaggle />, url: 'https://kaggle.com/yourprofile', label: 'Kaggle' },
  { icon: <FaStackOverflow />, url: 'https://stackoverflow.com/users/yourid', label: 'Stack Overflow' },
  { icon: <FaMedium />, url: 'https://medium.com/@yourprofile', label: 'Medium' },
];

const Footer = () => {
return (
    <footer className="relative bg-[#0f172a] text-white py-8 mt-12 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 h-full w-full bg-black z-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
        {/* Content */}
        <div className="relative flex flex-col items-center gap-4 z-10">
            <p className="text-lg font-medium">Let’s connect and collaborate!</p>
            <div className="flex flex-wrap justify-center gap-5 text-xl">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="hover:text-blue-400 transition-colors duration-300"
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
            <p className="text-sm text-gray-400 mt-4">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
    </footer>
);
};

export default Footer;
