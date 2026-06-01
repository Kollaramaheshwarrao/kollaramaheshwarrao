
const Header = () => {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <header
        className="p-4 fixed w-full z-50"
      >
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <ul className="flex gap-4 text-sm">
            {['Home', 'About', 'Skills', 'MyWork', 'Achievements', 'Contact'].map(section => (
              <li key={section}>
                <a href={`#${section.toLowerCase()}`} className="hover:text-blue-400 transition">{section}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
