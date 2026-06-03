import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaJava, FaPython, FaDatabase, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiMysql, SiPostgresql, SiBootstrap, SiStreamlit, SiVercel, SiNetlify, SiCanva } from 'react-icons/si';
import { TbBrandOpenai } from 'react-icons/tb';
import { MdOutlineAnalytics } from 'react-icons/md';

const categories = [
  {
    label: 'Programming & Development',
    color: 'from-blue-500 to-cyan-400',
    bg: 'bg-blue-50',
    skills: [
      { name: 'Java', icon: <FaJava className="text-red-500" /> },
      { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-700" /> },
    ],
  },
  {
    label: 'AI & Data',
    color: 'from-purple-500 to-pink-400',
    bg: 'bg-purple-50',
    skills: [
      { name: 'Generative AI', icon: <TbBrandOpenai className="text-purple-500" /> },
      { name: 'Prompt Engineering', icon: <TbBrandOpenai className="text-pink-500" /> },
      { name: 'Machine Learning', icon: <MdOutlineAnalytics className="text-indigo-500" /> },
      { name: 'NLP', icon: <MdOutlineAnalytics className="text-violet-500" /> },
      { name: 'Data Analysis', icon: <MdOutlineAnalytics className="text-fuchsia-500" /> },
    ],
  },
  {
    label: 'Databases',
    color: 'from-green-500 to-teal-400',
    bg: 'bg-green-50',
    skills: [
      { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
    ],
  },
  {
    label: 'Web Technologies',
    color: 'from-orange-500 to-yellow-400',
    bg: 'bg-orange-50',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-700" /> },
    ],
  },
  {
    label: 'Tools & Platforms',
    color: 'from-red-500 to-rose-400',
    bg: 'bg-red-50',
    skills: [
      { name: 'Git/GitHub', icon: <FaGithub className="text-gray-800" /> },
      { name: 'Vercel', icon: <SiVercel className="text-black" /> },
      { name: 'Netlify', icon: <SiNetlify className="text-teal-500" /> },
      { name: 'Streamlit', icon: <SiStreamlit className="text-red-500" /> },
    ],
  },
  {
    label: 'Design & Analysis',
    color: 'from-indigo-500 to-violet-400',
    bg: 'bg-indigo-50',
    skills: [
      { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
      { name: 'Canva', icon: <SiCanva className="text-blue-400" /> },
      { name: 'DSA', icon: <FaDatabase className="text-indigo-500" /> },
      { name: 'UI/UX', icon: <FaFigma className="text-violet-500" /> },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="relative py-16 px-4 bg-white overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_200px,#C9EBFF,transparent)]" />
    </div>

    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Technical Skills</h2>

    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat, ci) => (
        <motion.div
          key={ci}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: ci * 0.1, type: 'spring', stiffness: 70 }}
          className={`rounded-2xl p-5 shadow-md hover:shadow-xl transition-shadow ${cat.bg} border border-white`}
        >
          {/* Category Header */}
          <div className={`inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-4 bg-gradient-to-r ${cat.color}`}>
            {cat.label}
          </div>

          {/* Skills Grid */}
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill, si) => (
              <motion.div
                key={si}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 shadow-sm hover:shadow-md transition-all cursor-default"
              >
                <span className="text-xl">{skill.icon}</span>
                <span className="text-xs font-medium text-gray-700">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
