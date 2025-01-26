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
    <section className="bg-gray-50 py-28 my-10">
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-5xl font-bold mb-6 leading-tight text-gray-500">
            Let’s Explore My Skills & Experience
          </h1>
          <p className="text-gray-800 font-light mb-8">
            Sed ut perspiciatis unde omnis iste natus to voluptatem accusantium
            doloremque laudantium, totam rem aperiamc eaque ipsa quae ab illo
            inventore veritatis.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg px-4 py-6 flex flex-col items-center shadow-sm"
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
