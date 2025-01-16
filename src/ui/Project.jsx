import ProjectCard from "./ProjectCard";

function Project() {
  const projects = [
    {
      image: "src/assets/images/projects-image/e-learn.png",
      name: "Tasty Tracks - Online Food Ordering System",
      url: "https://github.com/devisreal/TastyTracks",
      description:
        "Final year project for the course of Information Technology and Business Information System at Middlebury University",
      technologies:
        "Tailwind CSS, ReactJS, Next.js, Django, Django REST Framework, Postgres",
      githubUrl: "https://github.com/devisreal/TastyTracks",
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
