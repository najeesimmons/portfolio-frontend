import {NavBar, NavBarWrapper} from "./Header.styles"

function Header() {
  //inline style for the nav tag
  return (
    <header>
     <NavBarWrapper>
     <NavBar>
        <img src="https://i.imgur.com/v7h7Yxp.png" alt="initials" />
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="https://github.com/najeesimmons">GitHub</a></li>
          <li><a href="/projects">Contact Me</a></li>
        </ul>
      </NavBar>
     </NavBarWrapper>
    </header>
  );
}

export default Header;