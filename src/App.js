import "./App.css";


// IMPORT COMPONENTS
import Header from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
// IMPORT PAGES
import {About} from "./components/About/About";
import Projects from "./components/Projects/Projects";
import { AppWrapper } from "./App.styles";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://najee-portfolio-backend.herokuapp.com/";

  return (
    <div className="App">
      <Header />
        <AppWrapper>
        {/* passing the URL variable above as props to the About and Project components */}
          <About url={URL}  />
          <Projects url={URL} />
        </AppWrapper>
      <Footer />
    </div>
  );
}

export default App;
