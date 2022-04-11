import {NavBar} from "./Header.styles"

function Header() {
  //inline style for the nav tag
  return (
    <header>
      <NavBar>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li> 
      </NavBar>
    </header>
  );
}

export default Header;