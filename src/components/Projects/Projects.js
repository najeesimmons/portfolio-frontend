import { useState, useEffect } from "react";
import {
  Container,
  ProjectInfo,
  ProjectImage,
  ProjectIcons,
  ProjectLinks,
} from "./Projects.styles";
import "./projects.css";

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
      <div>
        <h1 id="projects">Projects</h1>
        {projects.map((project) => (
          <Container key={project.name}>
            <ProjectInfo>
              <h1>{project.name}</h1>
              <ProjectIcons>
                {project?.stack?.map((tech) => {
                  return (
                    <div key={tech.technology}>
                      <img src={tech.image} alt={tech.technology} />
                    </div>
                  );
                })}
              </ProjectIcons>
              <ProjectLinks>
                <a href={project.git}>GITHUB</a>
                <a href={project.live}>LIVE SITE</a>
              </ProjectLinks>
              <p>{project.description}</p>
            </ProjectInfo>
            <ProjectImage>
              <img src={project.image} alt={project.name} />
            </ProjectImage>
          </Container>
        ))}
      </div>
    );
  };

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return projects ? loaded() : <h1>Loading...</h1>;
};

export default Projects;
