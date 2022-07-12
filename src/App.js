import React from "react";
// import classes from "./App.module.css";
import About from "./components/About/About";
import ProjectSlider from "./components/ProjectSlider/ProjectSlider";
import ContactForm from "./components/ContactForm/ContactForm";
import Nav from "./components/Nav/Nav";
import classes from "./App.module.css"

function App() {

const URL = "https://najee-portfolio-backend.herokuapp.com/";

return (
<div>
      <Nav />
      <div className={classes.container}>
        <section id="about" className={`${classes.page} ${classes.about}`}>
          <About url={URL} />
        </section>
        <section id='projects' className={classes.page}>
          <ProjectSlider url={URL} />
        </section>
        <section className={classes.page}>
          <ContactForm id='contact' />
        </section>
      </div>
    </div>
)}

export default App;
