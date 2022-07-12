import React, { useState, useEffect } from "react";
import classes from "./About.module.css";

export const About = ({ url }) => {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  useEffect(() => {
    // create function to make api call
    const getAboutData = async () => {
      try {
        const response = await fetch(url + "about");
        console.log(response);
        // turn response into javascript object
        const data = await response.json();

        // set the about state to the data
        setAbout(data);
      } catch (error) {
        console.error(error);
      }
    };

    getAboutData();
  }, [url]);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div className={classes.container}>
      <div className={classes.headshot}>
        <img src={about.headshot} alt={about.name} />
      </div>

      <div className={classes["about-me"]}>
        <span className={classes["my-info"]}>
          <p>HI THERE, I'M</p>
          <h1>
            <span>Najee</span> Simmons
          </h1>
        </span>
        <p className={classes.bio}>
          A <span>Front-End Web Developer</span> who cares <span>deeply</span>{" "}
          about the experiences users have with his applications. For me, the
          most rewarding part of my work is helping to solve problems.
        </p>
        <div className={classes["resume-button"]}>
          <a
            href="https://drive.google.com/file/d/1kJ0ur7QcFvOZsgATNAL_JFJDWjNW2Ru0/view?usp=sharing"
            className={classes["button-link"]}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
};

export default About;
