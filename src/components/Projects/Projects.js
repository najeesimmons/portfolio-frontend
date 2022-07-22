// import KeenSlider from 'keen-slider'
import "./projects.css";
import React, { useState, useEffect } from "react";
import flatten from "lodash/flatten";
import uniq from "lodash/uniq";

const ProjectSlider = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);

  // create state to hold about data
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // create function to make api call
    const getProjectsData = async () => {
      try {
        const response = await fetch(url + "projects");
        // turn response into javascript object
        const data = await response.json();

        // set the about state to the data

        setProjects(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getProjectsData();
  }, [url]);

  const technologies = projects.map((p) => p.stack);
  // return array of objects --- two different arrays
  console.log("technologies", technologies);
  console.log("flatten", flatten(technologies));
  console.log(
    "flatten with map",
    flatten(technologies).map((p) => p.technology)
  );
  console.log(
    "uniq with flatten with map",
    uniq(flatten(technologies).map((p) => p.technology))
  );

  const renderProjects = () => {
    console.log("projects",projects)
    return (
      <div className="project-wrapper">
      <div className="project-container">
        <h2 className="section-heading">
          Projects{" "}
          <span role="img" alt="laptop emoji" aria-label="laptop emoji">
            💻
          </span>
        </h2>
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
