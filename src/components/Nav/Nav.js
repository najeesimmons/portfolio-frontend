import React from 'react'
import classes from "./Nav.module.css";

function Nav() {

  return (
    <header>
     <div className={classes["nav-bar-wrapper"]}>
     <nav className={classes["nav-bar"]}>
        {/* <img src="https://i.imgur.com/v7h7Yxp.png" alt="initials" /> */}
        <h4>Najee Simmons</h4>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          {/* <li onClick={() => scrollToSection(projectsSection)}>Projects</li> */}
          <li><a href="https://github.com/najeesimmons">GitHub</a></li>
          <li><a href="https://drive.google.com/file/d/1kJ0ur7QcFvOZsgATNAL_JFJDWjNW2Ru0/view?usp=sharing">Resume</a></li>
          <li>Contact Me</li>
        </ul>
      </nav>
     </div>
    </header>
  );
}

export default Nav;