// import KeenSlider from 'keen-slider'
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import classes from "../ProjectSlider/ProjectSlider.module.css";
import React, { useState, useEffect } from "react";

function ProjectSlider({ url }) {
  const [sliderRef] = useKeenSlider();

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

//   const loaded = () => {
//     return (
//       <div ref={sliderRef} className="keen-slider">
//         {projects.map((project) => (
//           <div
//             className={`${classes["keen-slider__slide"]} ${classes["number-slide2"]}`}
//             key={project.name}
//           >
//             {/* <div className={classes.container} key={project.name}> */}
//             <div className={classes["project-info"]}>
//               <h1>{project.name}</h1>
//               <div className={classes["project-icons"]}>
//                 {project.stack.map((tech) => {
//                   return (
//                     <div key={tech.technology}>
//                       <img src={tech.image} alt={tech.technology} />
//                     </div>
//                   );
//                 })}
//               </div>
//               <div className={classes["project-links"]}>
//                 <a href={project.git}>GITHUB</a>
//                 <a href={project.live}>LIVE SITE</a>
//               </div>
//               <p>{project.description}</p>
//             </div>
//             <div className={classes["project-image"]}>
//               <img src={project.image} alt={project.name} />
//             </div>
//           </div>
//           // </div>
//         ))}
//       </div>
//     );
//   };

//   // if data arrives return the result of loaded, if not, an h1 that says loading
//   return projects ? loaded() : <h1>Loading...</h1>;
// }

const loaded = () => {
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">1</div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div>
    </div>
  );
};

// if data arrives return the result of loaded, if not, an h1 that says loading
return projects ? loaded() : <h1>Loading...</h1>;
}

export default ProjectSlider;
