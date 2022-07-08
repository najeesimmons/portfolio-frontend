import "./App.css";


// IMPORT COMPONENTS
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
// IMPORT PAGES
import {About} from "./components/About/About";
import Projects from "./components/Projects/Projects";
import classes from "./App.module.css"

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://najee-portfolio-backend.herokuapp.com/";

  return (
    <div className={classes.App}>
      <Nav />
        <div className={classes["app-wrapper"]}>
        {/* passing the URL variable above as props to the About and Project components */}
          <About url={URL}  />
          <Projects url={URL} />
        </div>
      <Footer />
    </div>
  );
}

export default App;
