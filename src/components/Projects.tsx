import { FaGithub } from "react-icons/fa"
import { projects, type Project } from "./data"
import { useState } from "react"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  
  return (
    <section id="projects" className="py-20 px-6 scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <div key={i} className="p-6 bg-white shadow-lg rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <p className="mt-2 text-sm text-gray-500">⚙ {project.tech}</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue text-white 
                  rounded-lg hover:bg-purple  transition"
              >
                <FaGithub /> Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-blue-light to-pink text-white rounded-xl shadow-lg hover:from-blue hover:to-purple transition"
                >
                  Live Demo
                </a>
              )}
              
              {project.howToUse && (
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 bg-pink text-white rounded-lg hover:bg-blue 
                    transition cursor-pointer"
                >
                  How to Use
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-lg w-full relative">
            <h3 className="text-xl font-semibold text-blue">
              {selectedProject.title} – How to Use
            </h3>
            <pre className="mt-4 whitespace-pre-wrap text-gray-700 text-sm bg-gray-50 p-4 rounded-lg">
              {selectedProject.howToUse}
            </pre>
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 
                cursor-pointer transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects