import {NavBar} from "./Header.styles"

function Header() {
  //inline style for the nav tag
  return (
    <header>
      <NavBar>
        <li><a href="/projects">Contact Me</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/about">About</a></li>
      </NavBar>
    </header>
  );
}

export default Header;