import {NavBar, NavBarWrapper} from "./Nav.styles"

function Header() {


  return (
    <header>
     <NavBarWrapper>
     <NavBar>
        <img src="https://i.imgur.com/v7h7Yxp.png" alt="initials" />
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          {/* <li onClick={() => scrollToSection(projectsSection)}>Projects</li> */}
          <li><a href="https://github.com/najeesimmons">GitHub</a></li>
          <li><a href="https://drive.google.com/file/d/1kJ0ur7QcFvOZsgATNAL_JFJDWjNW2Ru0/view?usp=sharing">Resume</a></li>
          <li>Contact Me</li>
        </ul>
      </NavBar>
     </NavBarWrapper>
    </header>
  );
}

export default Header;