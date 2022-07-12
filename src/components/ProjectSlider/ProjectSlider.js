// import KeenSlider from 'keen-slider'
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "./projectslider.css";
import React, { useState, useEffect } from "react";

const ProjectSlider = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [sliderRef] = useKeenSlider({
    loop: true,
    // mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

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

  const renderProjects = () => {
    return (
      <div className="container">
      <div ref={sliderRef} className={"keen-slider"}>
        {projects.map((project, index) => {
          const className = `keen-slider__slide number-slide${index + 1}`;
          return (
            <div key={index + 1} className={className}>
              {project.name}
              {project.description}
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
