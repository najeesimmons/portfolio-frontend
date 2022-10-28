import "./index.css";
import React from "react";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Nav from "./components/Nav/Nav";
import classes from "./App.module.css";

function App() {
  const URL = "https://najee-portfolio-backend.herokuapp.com/";

  return (
    <>
      <Nav />
      <div className={classes["app-wrapper"]}>
        <div className={classes["app-container"]}>
          <About url={URL} />

          <Projects url={URL} />

          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
