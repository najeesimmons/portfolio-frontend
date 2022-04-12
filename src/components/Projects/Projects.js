import { useState, useEffect } from "react";
import { Container, ProjectInfo, ProjectImage, ProjectIcons, ProjectButtons } from "./Projects.styles";


export const Projects = ({url}) => {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  useEffect(() => {
      //create function to make api call
      const getProjectsData = async () => {
        try {
          console.log(url)
          // make api call and get response
      const response = await fetch(url + "Projects");
      console.log(response)
      // turn response into javascript object
      const data = await response.json();

      // set the about state to the data
      setProjects(data);
      } catch (error) {
          console.error(error)
      }
    };

  
  getProjectsData()}, [url]);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project) => (
      <div>
        <Container>
          <div>
          </div>
          <ProjectInfo>
            <h1>{project.name}</h1>
            <ProjectButtons>
            <a href={project.git}><button>Github</button></a>
            <a href={project.live}><button>live site</button></a>
            </ProjectButtons>
              <p>{project.description}</p>
            <ProjectIcons>
            </ProjectIcons>
          </ProjectInfo>
          <ProjectImage>
            <img src={project.image} alt={project.name} />
          </ProjectImage>
          <div>
          </div>
        </Container>
  
          
      </div>
    ));
  };

   // if data arrives return the result of loaded, if not, an h1 that says loading
  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;