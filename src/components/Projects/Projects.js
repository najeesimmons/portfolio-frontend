import "./projects.css";
import React, { useState, useEffect } from "react";
import flatten from "lodash/flatten";
import uniq from "lodash/uniq";
import { FiFilter } from "react-icons/fi";

const ProjectSlider = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);

  // create state to hold about data
  const [projects, setProjects] = useState([]);

  // state for visibility of filter
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  // set state for filtering options
  const [activeFilter, setActiveFilter] = useState(null);

  const handleClick = (e) => {
    setFilterIsOpen(!filterIsOpen);
  };

  const handleTechClick = (e) => {
    setActiveFilter(e.target.value);
    console.log(activeFilter);
  };

  useEffect(() => {
    const getProjectsData = async () => {
      try {
        const response = await fetch(url + "projects");
        const data = await response.json();
        setProjects(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getProjectsData();
  }, [url]);

  const technologies = projects.map((p) => p.stack);
  const techList = uniq(flatten(technologies).map((p) => p.technology));

  const techListButtons = techList.map((tech) => {
    return (
      <button
        className="filter-tech-button"
        onClick={handleTechClick}
        key={tech}
        value={tech}
      >
        {tech}
      </button>
    );
  });

  const renderProjects = () => {
    return (
      <div className="project-wrapper">
        <div className="project-container">
          <h2 className="section-heading">
            Projects{" "}
            <span role="img" alt="laptop emoji" aria-label="laptop emoji">
              💻
            </span>
          </h2>
          <button
            className={`filter-button ${
              filterIsOpen ? "filter-button-active" : ""
            }`}
            onClick={handleClick}
          >
            <span>FILTER</span>
            <span className="filter-icon">
              <FiFilter />
            </span>
          </button>
          <div
            className={`filter-choices-box ${
              filterIsOpen ? "filter-active" : ""
            }`}
          >
            {techListButtons}
          </div>
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className={`card${index % 2 ? "-left" : "-right"}`}
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

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return renderProjects();
};

export default ProjectSlider;
