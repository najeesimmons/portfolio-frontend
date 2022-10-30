import React, { useState } from "react";
import classes from "./Nav.module.css";

function Nav() {
  const [hamburgerIsActive, setHamburgerIsActive] = useState(false)
  
  const removeActiveStatus = () => setHamburgerIsActive(false);
  return (
    <div className={classes["nav-bar-wrapper"]}>
      <nav className={classes["nav-bar"]}>
        <img src="https://i.imgur.com/mFSQyiH.png" alt="initials" />
        <ul className={`${classes["nav-menu"]} ${hamburgerIsActive ? classes.active : ""}`}>
          <li className={classes["nav-item"]}>
            <a href="#about" className={classes["nav-link"]} onClick={removeActiveStatus}>About</a>
          </li>
          <li className={classes["nav-item"]}>
            <a href="#projects" className={classes["nav-link"]} onClick={removeActiveStatus}>Projects</a>
          </li>
          <li className={classes["nav-item"]}>
            <a href="#contact" className={classes["nav-link"]} onClick={removeActiveStatus}>Contact</a>
          </li>
          <li className={classes["nav-item"]}>
            <a
              href="https://github.com/najeesimmons"
              rel="noopener noreferrer"
              target="_blank"
              className={classes["nav-link"]}
              onClick={removeActiveStatus}
            >
              GitHub
            </a>
          </li>
          <li className={classes["nav-item"]}>
            <a
              href="https://drive.google.com/file/d/10888rfeezoSZ6VzjLi2aGFvhWjYza6bj/view?usp=share_link"
              rel="noopener noreferrer"
              target="_blank"
              className={classes["nav-link"]}
              onClick={removeActiveStatus}
            >
              Resume
            </a>
          </li>
        </ul>
        <div className={`${classes.hamburger} ${hamburgerIsActive ? classes.active : ""}`} onClick={() => setHamburgerIsActive(!hamburgerIsActive)}>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
