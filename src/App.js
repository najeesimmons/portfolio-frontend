import "./App.css";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
// IMPORT PAGES
import {About} from "./components/About";
import Projects from "./components/Projects/Projects";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://najee-portfolio-backend.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      {/* passing the URL variable above as props to the About and Project components */}
        <About url={URL}  />
        <Projects url={URL} />
      <Footer />
    </div>
  );
}

export default App;
