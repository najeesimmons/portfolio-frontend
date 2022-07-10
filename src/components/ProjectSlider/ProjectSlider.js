import 'keen-slider/keen-slider.min.css'
// import KeenSlider from 'keen-slider'
import { useKeenSlider } from 'keen-slider/react' 
import classes from "../Projects/Projects.module.css"

import React from 'react'

function ProjectSlider(props) {
  const [sliderRef] = useKeenSlider()

  return (
    <div ref={sliderRef} className="keen-slider">
   {props.projects.map((project) => (
        <div className='`keen-slider__slide number-slide ${project.name}`' key={project.name}>
        {/* <div className={classes.container} key={project.name}> */}
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
        // </div>
      ))}
      </div>
  )
};

export default ProjectSlider