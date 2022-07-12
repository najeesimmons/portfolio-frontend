import React from "react";
// import Fullpage, {
//   FullPageSections,
//   FullpageSection,
//   FullpageNavigation,
// } from "@ap.cx/react-fullpage";
import About from "../About/About";
import ProjectSlider from "../ProjectSlider/ProjectSlider";
import ContactForm from "../ContactForm/ContactForm";
import Nav from "../Nav/Nav";
import classes from "./FullPageScroll.module.css";

export const FullPageScroll = () => {
  // const SectionStyle = {
  //   height: "100vh",
  //   width: "100vh",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   margin: "0 auto",
  // };

  const URL = "https://najee-portfolio-backend.herokuapp.com/";

  return (
    // <div>
    //    <Nav />
    // <Fullpage>

    //   <FullpageNavigation />
    //   <FullPageSections >
    //     <FullpageSection id='about' style={SectionStyle}>
    //       <About url={URL} />
    //     </FullpageSection>
    //     <FullpageSection>
    //       <ProjectSlider id='projects' style={SectionStyle} url={URL} />
    //     </FullpageSection>
    //     <FullpageSection style={SectionStyle}>
    //       <ContactForm />
    //     </FullpageSection>
    //   </FullPageSections>
    // </Fullpage>
    // </div>
    <div>
      <Nav />
      <div className={classes.container}>
        <section id='about' className={classes.page}>
          <About url={URL} />
        </section>
        <section id='projects' className={classes.page}>
          <ProjectSlider url={URL} />
        </section>
        <section className={classes.page}>
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default FullPageScroll;
