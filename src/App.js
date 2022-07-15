import React from "react";
// import classes from "./App.module.css";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Nav from "./components/Nav/Nav";
import classes from "./App.module.css"

function App() {

const URL = "https://najee-portfolio-backend.herokuapp.com/";

return (
<div className={classes.wrapper}>
      <Nav />
      <div className={classes.container}>
        <section id="about" className={`${classes.page} ${classes.about}`}>
          <About url={URL} />
        </section>
        <section id='projects' className={classes["project-page"]}>
          <Projects url={URL} />
        </section>
        <section id='contact' className={classes.page}>
          <Contact />
        </section>
      </div>
      
    </div>
)}

export default App;
