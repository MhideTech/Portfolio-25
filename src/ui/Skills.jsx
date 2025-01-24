function Skills() {
  const skills = [
    { name: "JavaScript", icon: "🎨" },
    { name: "TypeScript", icon: "🎨" },
    { name: "React.js", icon: "📐" },
    { name: "Tailwind", icon: "🖌️" },
    { name: "Node.js", icon: "🌐" },
    { name: "Express", icon: "📕" },
    { name: "MongoDB", icon: "💻" },
    { name: "PostgreSQL", icon: "💻" },
    // { name: "Dart", icon: "🐍" },
    // { name: "Flutter", icon: "✏️" },
    // { name: "Git", icon: "✏️" },
    // { name: "Github", icon: "✏️" },
  ];

  return (
    <section className="bg-gray-700 text-white py-16 px-8 my-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">My Skills</h2>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Let’s Explore Popular{" "}
            <span className="text-lime-500">Skills & Experience</span>
          </h1>
          <p className="text-gray-400 mb-8">
            Sed ut perspiciatis unde omnis iste natus to voluptatem accusantium
            doloremque laudantium, totam rem aperiamc eaque ipsa quae ab illo
            inventore veritatis.
          </p>
          <button className="bg-lime-500 text-black font-semibold py-3 px-6 rounded-lg shadow-lg">
            Learn More &rarr;
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 flex flex-col items-center shadow-md"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
