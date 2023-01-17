import React from "react";
import classes from "./About.module.css";

export const About = ({ about }) => {
  const loaded = () => (
    <div className={`${"grid"} ${classes["about-container"]}`} id="about">
      <div className={classes.headshot}>
        <img src={about.headshot} alt={about.name} />
      </div>

      <div className={classes["about-me"]}>
        <span className={classes["my-info"]}>
          <p className={classes.greeting}>
            <span
              role="img"
              alt="waving hand emoji"
              aria-label="waving hand emoji"
            >
              ✋
            </span>{" "}
            HI, MY NAME IS
          </p>
          <h1>Najee Simmons</h1>
        </span>
        <p className={classes.bio}>
          The best part of my job is building software that solves problems. I
          do my best work when I know I’m helping others.
        </p>
        <div className={classes["social-container"]}>
          <div id={classes.resume}>
            <a
              href="https://drive.google.com/file/d/10888rfeezoSZ6VzjLi2aGFvhWjYza6bj/view?usp=share_link"
              id={classes["resume-link"]}
              rel="noopener noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </div>
          <div className={classes["socials-list-holder"]}>
            <div id={classes.linkedin}>
              <a
                href="https://www.linkedin.com/in/najeesimmons/"
                alt="linkedin"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src="https://i.imgur.com/8iFblbv.png" alt="linkedin" />
              </a>
            </div>
            <div id={classes.github}>
              <a
                href="https://github.com/najeesimmons"
                alt="github"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src="https://i.imgur.com/439XQGH.png" alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return about ? loaded() : <h1>Unable to access data...</h1>;
};

export default About;
