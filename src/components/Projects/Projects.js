import "./projects.css";
import React from "react";

const Projects = ({ projects }) => {
  const loaded = () => {
    return (
      <div className="project-container" id="projects">
        <h2 className="section-heading">
          Projects{" "}
          <span role="img" alt="laptop emoji" aria-label="laptop emoji">
            💻
          </span>
        </h2>
        <div className="grid">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className={`${"card"} ${"grid"} ${
                  index % 2 ? "left" : "right"
                }`}
              >
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                  />
                </div>
                <div className="project-info-container">
                  <h3 className="name">{project.name}</h3>
                  <h4 className="project-tech">
                    Technologies Used:
                    {project.stack.map((tech) => {
                      return (
                        <span key={tech.technology} className="project-tech">
                          {tech.technology}
                        </span>
                      );
                    })}
                  </h4>

                  <ul className="description">
                    {project.description.map((attribute, index) => {
                      return <li key={index}>{attribute}</li>;
                    })}
                  </ul>

                  <div className="project-links">
                    <div>
                      <a
                        href={project.live}
                        alt="link to live project"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        LIVE
                      </a>
                      <a
                        href={project.git}
                        alt="link to git repository"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        REPO
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return projects ? loaded() : <h1>Unable to access project data...</h1>;
};

export default Projects;
