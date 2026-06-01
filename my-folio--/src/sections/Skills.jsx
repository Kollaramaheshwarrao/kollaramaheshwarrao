import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';
const skills = [
  { 
    name: 'HTML5', 
    icon: <FaHtml5 className="text-orange-600" />, 
    link: 'https://developer.mozilla.org/docs/Web/HTML' 
  },
  { 
    name: 'CSS3', 
    icon: <FaCss3Alt className="text-blue-600" />, 
    link: 'https://developer.mozilla.org/docs/Web/CSS' 
  },
  { 
    name: 'JavaScript', 
    icon: <FaJs className="text-yellow-400" />, 
    link: 'https://developer.mozilla.org/docs/Web/JavaScript' 
  },
  { 
    name: 'React', 
    icon: <FaReact className="text-cyan-400" />, 
    link: 'https://react.dev/' 
  },
  { 
    name: 'Tailwind CSS', 
    icon: <SiTailwindcss className="text-sky-400" />, 
    link: 'https://tailwindcss.com/' 
  },
  { 
    name: 'Node.js', 
    icon: <FaNodeJs className="text-green-500" />, 
    link: 'https://nodejs.org/' 
  },
  { 
    name: 'MongoDB', 
    icon: <SiMongodb className="text-green-600" />, 
    link: 'https://www.mongodb.com/' 
  },
  { 
    name: 'Firebase', 
    icon: <SiFirebase className="text-yellow-500" />, 
    link: 'https://firebase.google.com/' 
  },
  { 
    name: 'GitHub', 
    icon: <FaGithub className="text-white" />, 
    link: 'https://github.com/' 
  },
  // Additional skills and tech stack
  {
    name: 'TypeScript',
    icon: <FaJs className="text-blue-500" />, // You can use SiTypescript for a better icon if installed
    link: 'https://www.typescriptlang.org/'
  },
  {
    name: 'Redux',
    icon: <FaReact className="text-purple-500" />, // You can use SiRedux for a better icon if installed
    link: 'https://redux.js.org/'
  },
  {
    name: 'Express.js',
    icon: <FaNodeJs className="text-gray-700" />, // You can use SiExpress for a better icon if installed
    link: 'https://expressjs.com/'
  },
  {
    name: 'Next.js',
    icon: <FaReact className="text-black" />, // You can use SiNextdotjs for a better icon if installed
    link: 'https://nextjs.org/'
  },
  {
    name: 'Sass',
    icon: <FaCss3Alt className="text-pink-500" />, // You can use SiSass for a better icon if installed
    link: 'https://sass-lang.com/'
  },
  {
    name: 'Bootstrap',
    icon: <FaCss3Alt className="text-purple-700" />, // You can use SiBootstrap for a better icon if installed
    link: 'https://getbootstrap.com/'
  },
  {
    name: 'Figma',
    icon: <FaReact className="text-pink-400" />, // You can use SiFigma for a better icon if installed
    link: 'https://figma.com/'
  },
  {
    name: 'REST API',
    icon: <FaNodeJs className="text-blue-400" />,
    link: 'https://restfulapi.net/'
  },
  {
    name: 'Jest',
    icon: <FaJs className="text-red-500" />, // You can use SiJest for a better icon if installed
    link: 'https://jestjs.io/'
  },
];

// Hexagon CSS utility
const hexagonStyle = {
  clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
  background: 'rgba(255,255,255,0.1)',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  width: '90px',
  height: '104px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '8px',
  cursor: 'pointer',
  position: 'relative',
};

const hexagonHoverStyle = {
  transform: 'scale(1.07)',
  boxShadow: '0 4px 16px rgba(0,0,0,0.16)',
  background: 'rgba(200,235,255,0.25)',
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-12 px-4 bg-white text-white overflow-hidden">
      {/* Skills background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <h2 className="text-3xl font-bold text-center mb-8 text-[#0f172a]">Skills</h2>
      <div
        className="flex flex-wrap justify-center items-center"
        style={{
          maxWidth: 700,
          margin: '0 auto',
        }}
      >
        {skills.map((skill, idx) => (
          <div
            key={idx}
            style={{
              ...hexagonStyle,
              // Offset every other row for honeycomb effect
              marginLeft: (Math.floor(idx / 5) % 2 === 1 && idx % 5 === 0) ? '50px' : '8px',
            }}
            className="group hover:z-10"
            tabIndex={0}
            onMouseEnter={e => Object.assign(e.currentTarget.style, hexagonHoverStyle)}
            onMouseLeave={e => Object.assign(e.currentTarget.style, hexagonStyle)}
          >
            <div className="text-3xl">{skill.icon}</div>
            <p className="text-sm text-center text-[#0f172a]">{skill.name}</p>
          </div>
        ))}
      </div>
      <style>{`
        @media (min-width: 640px) {
          #skills .hex-row {
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
