import { useState, useEffect } from "react";


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
      <div className="projects">
        <div className="container">
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name} />
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a>
        </div>
      </div>
    ));
  };

   // if data arrives return the result of loaded, if not, an h1 that says loading
  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;