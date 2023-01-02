import "./index.css";
import React from "react";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Nav from "./components/Nav/Nav";
import classes from "./App.module.css";
import Footer from "./components/Footer/Footer";

function App() {
  // in the past, I hosted server on heroku for free at this URL, free service is no longer available 
  // const URL = "https://najee-portfolio-backend.herokuapp.com/";

  const about = {
    name: "Najee Simmons",
    email: "najee.bryant.simmons@gmail.com",
    headshot: "https://i.imgur.com/mlCcXQu.png"
  };

  const projects = [
    {
      name: "ink X",
      description: [
        "MERN stack social media app helping tattoo artists find clients in their area",
        "Full CRUD operations on several data models",
        "Redesign and new features to come",
      ],
      live: "https://beautiful-profiterole-7323ce.netlify.app",
      git: "https://github.com/najeesimmons/inkX_frontend",
      image: "https://i.imgur.com/Kqv3pX4.png",
      stack: [
        { technology: "mongoDB", image: "https://i.imgur.com/qWx6Ldm.png" },
        { technology: "express", image: "https://i.imgur.com/qWWnmND.png" },
        { technology: "react", image: "https://i.imgur.com/fBGemoi.png" },
        { technology: "node.js", image: "https://i.imgur.com/AGudz0o.png" },
      ],
    },
    {
      name: "Wordle +",
      description: [
        "Pure Javascript clone of the popular game Wordle",
        "Utilizes Extensive DOM manipulation",
        "New features, expanding on the original game to come",
      ],
      live: "https://najeesimmons.github.io/wordle/",
      git: "https://github.com/najeesimmons/wordle",
      image: "https://i.imgur.com/DLDYMKv.png",
      stack: [
        { technology: "html", image: "https://i.imgur.com/oL03xZA.png" },
        { technology: "css", image: "https://i.imgur.com/Z7HCQq7.png" },
        { technology: "javascript", image: "https://i.imgur.com/DIDhXm4.png" },
      ],
    },
  ];

  return (
    <>
      <Nav />
      <div className={classes["app-container"]}>
        <About about={about} />
        <Projects projects={projects} />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
