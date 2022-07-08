import React from "react";
import classes from "./App.module.css";


import Nav from "./components/Nav/Nav";
// import Footer from "./components/Footer/Footer";

import FullPageScroll from "./components/FullPageScroll.js/FullPageScroll";

// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects"

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  // const URL = "https://najee-portfolio-backend.herokuapp.com/";

  return (
    <>
      <Nav />
      <div className={classes["app-wrapper"]}>
        {/* <About url={URL}  />
      <Projects url={URL} /> */}
        <FullPageScroll />
      </div>
    </>
  );
}

export default App;
