import React from 'react';
import profileImg from '../assets/profileimg.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes.",
  "Simplicity is the soul of efficiency.",
  "Make it work, make it right, make it fast."
];

function useAnimatedQuote(quotes, interval = 3000) {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % quotes.length), interval);
    return () => clearInterval(id);
  }, [quotes, interval]);
  return quotes[index];
}

const Home = () => {
  const quote = useAnimatedQuote(quotes);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white text-center px-4 overflow-hidden">
      {/* Animated grid and radial background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        {/* Responsive radial background circle */}
        <div className="absolute bottom-0 left-0 right-0 top-0 
          bg-[radial-gradient(circle_300px_at_50%_120px,#C9EBFF,transparent)] 
          md:bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full z-10">
        {/* Profile Image Full Height */}
        <div className="relative flex-shrink-0 flex items-center justify-center w-full md:w-1/2 h-[60vh] md:h-[80vh]">
          <div className="w-full h-full flex items-center justify-center">
            {/* Neon blue ring */}
            <div className="relative flex items-center justify-center">
              <span className="absolute inset-0 rounded-full pointer-events-none neon-blue-ring"></span>
              <div className="w-48 h-48 md:w-full md:h-full max-w-[500px] max-h-[500px] rounded-full overflow-hidden flex items-center justify-center bg-white">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="object-cover w-full h-full rounded-full shadow-neon border-8 border-white transition-all duration-500"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
          </div>
          {/* Neon effect using custom shadow */}
          <style>
            {`
              .shadow-neon {
                box-shadow: 0 0 80px 16px #00ffe7, 0 0 160px 32px #00ffe7;
              }
              .neon-blue-ring {
                box-shadow:
                  0 0 0 10px rgba(0, 174, 255, 0.3),
                  0 0 40px 10px #00bfff,
                  0 0 80px 20px #00bfff;
                z-index: 1;
              }
            `}
          </style>
        </div>
        {/* Text and Animated Quote */}
        <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 mt-8 md:mt-0 md:ml-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">Hi, I'm Mahi</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Full Stack Developer | Tech Entrepreneur | Head Honcho CSI Student Council Hyderabad Chapter | NEC Finalist IIT Bombay | Google Career Certificate Graduate | Google Developer Program & Community Member | Researcher |  AI Enthusiast
          </p>
          <div className="relative min-h-[60px]">
            <span className="block text-xl md:text-2xl font-semibold text-cyan-700 animate-fade-in-out transition-all duration-700">
              {quote}
            </span>
            <style>
              {`
                @keyframes fadeInOut {
                  0% { opacity: 0; transform: translateY(20px);}
                  10% { opacity: 1; transform: translateY(0);}
                  90% { opacity: 1; transform: translateY(0);}
                  100% { opacity: 0; transform: translateY(-20px);}
                }
                .animate-fade-in-out {
                  animation: fadeInOut 3s ease-in-out;
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Home;
