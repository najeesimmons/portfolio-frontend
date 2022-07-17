import React from "react";
import classes from "./Nav.module.css";

function Nav() {
  return (
    <div className={classes["nav-bar-wrapper"]}>
      <nav className={classes["nav-bar"]}>
        <img src="https://i.imgur.com/mFSQyiH.png" alt="initials" />
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a
              href="https://github.com/najeesimmons"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1hVGf8htCn6edZCN75myipUh9SvuY7KIP/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
