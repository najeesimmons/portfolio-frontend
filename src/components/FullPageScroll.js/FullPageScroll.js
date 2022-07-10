import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import About from "../About/About";
// import Projects from "../Projects/Projects";
import ProjectSlider from "../ProjectSlider/ProjectSlider";


export const FullPageScroll = () => {
  const SectionStyle = {
    height: "100vh",
    width: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  };

  const URL = "https://najee-portfolio-backend.herokuapp.com/";

  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection style={SectionStyle}>
          <About url={URL} />
        </FullpageSection>
        <FullpageSection>
          <ProjectSlider url={URL} />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default FullPageScroll;
