import {NavBar, NavBarWrapper} from "./Header.styles"
import { useRef, forwardRef } from "react";
import { Projects } from "../Projects"

function Header() {

  const projectSection = useRef(null)

  const Projects = () => {
    
  }
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
  });
};

  return (
    <header>
     <NavBarWrapper>
     <NavBar>
        <img src="https://i.imgur.com/v7h7Yxp.png" alt="initials" />
        <ul>
          <li>About</li>
          <li>Projects</li>
          {/* <li onClick={() => scrollToSection(projectsSection)}>Projects</li> */}
          <li><a href="https://github.com/najeesimmons">GitHUb</a></li>
          <li>Contact Me</li>
        </ul>
      </NavBar>
     </NavBarWrapper>
    </header>
  );
}

export default Header;