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
          <p className={classes.greeting}><span role="img" alt="waving hand emoji" aria-label="waving hand emoji">✋</span> HI, I'M</p>
          <h1>
          
            <span className={classes["first-name"]}>Najee</span> Simmons
          </h1>
        </span>
        <p className={classes.bio}>
          A <span>Front-End Web Developer</span> who cares <span>deeply</span>{" "}
          about the experiences users have with his applications. For me, the
          most rewarding part of my work is helping to solve problems.
        </p>
        <div className={classes["social-container"]}>
          <div id={classes.resume}>

          <a
            href="https://drive.google.com/file/d/1hVGf8htCn6edZCN75myipUh9SvuY7KIP/view?usp=sharing"
            id={classes["resume-link"]}
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
          </a>

          </div>
          <ul className={classes["socials-list"]}>
            <li id={classes.linkedin}>
              <a href="https://www.linkedin.com/in/najeesimmons/" alt="linkedin">
                <img src="https://i.imgur.com/8iFblbv.png" alt="linkedin" />
              </a>
            </li>
            <li id={classes.github}>
              <a href="https://github.com/najeesimmons" alt="github">
                <img src="https://i.imgur.com/439XQGH.png" alt="linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
};

export default About;
