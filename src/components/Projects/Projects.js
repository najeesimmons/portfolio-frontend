import React, { useState, useEffect } from "react";
import classes from "./Projects.module.css"
import ProjectSlider from "../ProjectSlider/ProjectSlider";


export const Projects = ({ url }) => {
  // create state to hold about data
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    // create function to make api call
    const getProjectsData = async () => {
      try {
        const response = await fetch(url + "projects");
        // turn response into javascript object
        const data = await response.json();

        // set the about state to the data
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    getProjectsData();
  }, [url]);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes["projects-heading"]}>Projects</h1>
        <div className={classes["container-holder"]}>
          <ProjectSlider projects={projects} />
        {/* {projects.map((project) => (
          <div className={classes.container} key={project.name}>
            <div className={classes["project-info"]}>
              <h1>{project.name}</h1>
              <div className={classes["project-icons"]}>
                {project.stack.map((tech) => {
                  return (
                    <div key={tech.technology}>
                      <img src={tech.image} alt={tech.technology} />
                    </div>
                  );
                })}
              </div>
              <div className={classes["project-links"]}>
                <a href={project.git}>GITHUB</a>
                <a href={project.live}>LIVE SITE</a>
              </div>
              <p>{project.description}</p>
            </div>
            <div className={classes["project-image"]}>
              <img src={project.image} alt={project.name} />
            </div>
          </div>
        ))} */}
        </div>
      </div>
    );
  };

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return projects ? loaded() : <h1>Loading...</h1>;
};

export default Projects;
