import { Fade } from "react-awesome-reveal";
import SectionHeadline from "./SectionHeadline";

function Skills() {
  const skills = [
    { name: "JavaScript", icon: "/images/skills/javascript.png" },
    { name: "TypeScript", icon: "/images/skills/typescript.svg" },
    { name: "React.js", icon: "/images/skills/react.svg" },
    { name: "Tailwind", icon: "/images/skills/tailwind.svg" },
    { name: "Node.js", icon: "/images/skills/nodejs.svg" },
    { name: "Express", icon: "/images/skills/express.svg" },
    { name: "MongoDB", icon: "/images/skills/mongodb.svg" },
    { name: "PostgreSQL", icon: "/images/skills/postgresql.svg" },
    { name: "Dart", icon: "/images/skills/dart.svg" },
    { name: "Flutter", icon: "/images/skills/flutter.svg" },
    { name: "Git", icon: "/images/skills/git.svg" },
    { name: "Github", icon: "/images/skills/github.svg" },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16 pb-28">
      <SectionHeadline>Skills</SectionHeadline>
      <div className="lg:w-11/12 xl:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20 px-4">
        <div>
          <Fade cascade damping={0.4}>
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-red-400 to-red-100 text-transparent bg-clip-text">
              Let’s Explore My Skills <span className="symbol">&</span>{" "}
              Experience
            </h1>
            <p className="text-gray-600 dark:text-gray-200 mt-4 md:text-xl xl:text-lg leading-relaxed">
              Over the years, I have developed a strong foundation in software
              development, specializing in both frontend and backend
              technologies. My expertise spans across multiple languages,
              frameworks, and tools, enabling me to build scalable, efficient,
              and user
              <span className="symbol">-</span>friendly applications.
            </p>
            <p className="text-gray-600 dark:text-gray-200 mt-4 md:text-xl xl:text-lg leading-relaxed">
              As a passionate developer, I constantly explore new technologies
              and best practices to stay ahead in the field. Whether it&apos;s
              learning a new framework, improving performance optimizations, or
              contributing to open<span className="symbol">-</span>source
              projects, I am committed to continuous learning and innovation.
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Fade cascade damping={0.1}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-200 dark:bg-gray-500 rounded-lg px-4 py-5 flex flex-col items-center shadow-sm gap-3"
              >
                <img
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  className="h-16"
                />
                <h3 className="text-lg text-gray-600 dark:text-gray-200">{skill.name}</h3>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Skills;
