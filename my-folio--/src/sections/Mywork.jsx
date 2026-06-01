import React from 'react';

const projects = [
  {
    title: 'Weather App',
image: 'https://github.com/Kollaramaheshwarrao/Infinity-Profile/blob/main/public/UdyamSpherelogo.png?raw=true',
description: 'A weather forecast app using OpenWeather API.',
    github: 'https://github.com/yourusername/weather-app',
    demo: 'https://your-demo-link.netlify.app',
  },
  {
    title: 'Portfolio Website',
    image: 'https://source.unsplash.com/300x300/?portfolio',
    description: 'My personal developer portfolio made in React.',
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://your-portfolio-link.netlify.app',
  },
  // Add more projects...
];

const MyWork = () => {
  return (
    <section id="mywork" className="relative py-16 px-6 bg-white text-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Work</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-72 h-72 bg-white/60 backdrop-blur-lg rounded-xl shadow-md p-4 flex flex-col justify-between transition-transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md h-36 object-cover w-full"
            />
            <div>
              <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>
            <div className="flex justify-between mt-3">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWork;
