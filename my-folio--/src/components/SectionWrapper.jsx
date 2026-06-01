const SectionWrapper = ({ id, title, children }) => (
  <section
    id={id}
    className="py-20 px-4 max-w-5xl mx-auto relative overflow-hidden"
  >
    {/* Background grid and radial gradient */}
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
    </div>
    <h2 className="text-3xl font-semibold mb-6 text-center">{title}</h2>
    {children}
  </section>
);

export default SectionWrapper;
