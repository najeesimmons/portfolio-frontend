import React, { useState, useEffect } from "react";
import classes from "./About.module.css"

export const About = ({url}) => {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  useEffect(() => {
      // create function to make api call
      const getAboutData = async () => {
        try {
        const response = await fetch(url + "about");
        console.log(response)
        // turn response into javascript object
        const data = await response.json();

        // set the about state to the data
        setAbout(data);
        } catch (error) {
            console.error(error)
        }
      };
      
  getAboutData()}, [url]);
      
    // define a function that will return the JSX needed once we get the data
     const loaded = () => (
      <div id="about">
          <div className={classes.container}>
            <div className={classes.headshot}>
              <img src={about.headshot} alt={about.name} />
            </div>
            <div className={classes["about-me"]}>
            <span className={classes["my-info"]}>
              <h1>{about.name}</h1>
              <h3>Front-end Engineer</h3>
            </span>
              <span className={classes.bio}>{about.bio}</span>
            </div>
          </div>
        </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About