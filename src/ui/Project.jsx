import ProjectCard from "./ProjectCard";

function Project() {
  const projects = [
    {
      image: "src/assets/images/projects-image/e-learn.png",
      name: "Mhizta Orlah Online Learning Platform",
      url: "",
      description:
        "An online learning platform that allows student to learn in a fun and interactive way",
      technologies: "Tailwind CSS, ReactJS, TypeScript, Node.js, Postgres",
      githubUrl: "https://github.com/MhideTech/quizwhiz-frontend",
    },
  ];
  return (
    <div className="w-10/12 mx-auto flex flex-col gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}

export default Project;
