import { Fade } from "react-awesome-reveal";
import ProjectCard from "./ProjectCard";
import SectionHeadline from "./SectionHeadline";
import Button from "./Button";

function Project() {
  const projects = [
    {
      image: "/images/projects-image/video-call.png",
      name: "Duo Video Share",
      url: "https://duo-share-v2.vercel.app/",
      description: "A featured simple P2P video sharing app",
      technologies: "JavaScript, ReactJS, TailwindCSS, WebRTC",
      githubUrl: "https://github.com/MhideTech/duo_share_v2",
    },
    {
      image: "/images/projects-image/plant-palace.png",
      name: "PlantPalace",
      url: "https://aptechota-plantpalace-cyberminds.vercel.app/",
      description:
        "An e-commerce web application for the purchase of various plant for indoor and outdoor decorations",
      technologies: "HTML, CSS, JavaScript",
      githubUrl: "https://github.com/MhideTech/Techwiz-Project-PlantPalace",
    },
    {
      image: "/images/projects-image/e-learn.png",
      name: "QuizWhiz",
      url: "",
      description:
        "An online learning platform that allow students to learn in a fun and interactive way through quizzes",
      technologies: "Tailwind CSS, ReactJS, TypeScript, Node.js, PostgreSQL",
      githubUrl: "https://github.com/MhideTech/quizwhiz-frontend",
    },
    {
      image: "/images/projects-image/e-library.png",
      name: "E-Library",
      url: "",
      description: "An online e-library management for book lovers",
      technologies: "JavaScript, TypeScript, ReactJS, TailwindCSS",
      githubUrl: "https://github.com/MhideTech/online-bookstore",
    },
    {
      image: "/images/projects-image/text-redaction.png",
      name: "Text Redaction Application",
      url: "https://textredaction.netlify.app/",
      description:
        "A text redaction web application created to redact sensitive words or information before being shared to social media platforms",
      technologies: "HTML, CSS, JavaScript",
      githubUrl: "https://github.com/MhideTech/Text-Redaction-App",
    },
  ];
  return (
    <div className="py-20 dark:bg-gray-700">
      <SectionHeadline>Projects</SectionHeadline>
      <div className="w-10/12 mx-auto flex flex-col gap-8 mt-16">
        <Fade damping={0.3}>
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </Fade>
      </div>
      <button className="block mx-auto mt-10 bg-gray-800 text-gray-200 dark:bg-gray-200 dark:text-gray-800 px-6 py-2 rounded lg:text-lg animate__animated animate__fadeInUp">
        More Projects Coming Soon...
      </button>
    </div>
  );
}

export default Project;
