function ProjectCard({ project }) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-md overflow-hidden p-6 md:p-8">
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <div className="px-3 py-2 bg-gray-800 rounded-t-xl flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <img
          src={project.image}
          alt="Tasty Tracks"
          className="w-full h-full object-cover rounded-b-lg"
        />
      </div>

      <div className="w-full md:w-1/2 md:p-6 py-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {project.name}
        </h3>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mb-9"
          >
            {project.url}
          </a>
        )}

        <p className="text-gray-600 text-lg mb-2 font-thin">
          {project.description}
        </p>

        <p className="text-gray-600 text-lg mb-5">
          <strong>Technologies:</strong> {project.technologies}
        </p>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900"
        >
          <div className="flex items-center space-x-4 p-3 rounded-md transition-all duration-500 cursor-pointer bg-gray-200 border hover:border-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-5 h-5 mr-2"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
