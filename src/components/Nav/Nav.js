import React from "react";
import classes from "./Nav.module.css";

function Nav() {
  // const handleClick = (e) => {
  //   e.preventDefault()
  //   const target = e.target.getAttribute('href')
  //   const startpoint = e.target.getAttribute('startpoint')
  //   const location = document.querySelector(target).offsetTop
  //   window.scrollTo({
  //     left: 0,
  //     top: location - startpoint
  //   })
  // }

  return (
    <header>
      <div className={classes["nav-bar-wrapper"]}>
        <nav className={classes["nav-bar"]}>
          <img src="https://i.imgur.com/v7h7Yxp.png" alt="initials" />
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
              <a href="https://github.com/najeesimmons">GitHub</a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1hVGf8htCn6edZCN75myipUh9SvuY7KIP/view?usp=sharing">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
