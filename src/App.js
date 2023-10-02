import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import SocialLinks from "./components/SocialLinks.js";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio.js";
import Experience from "./components/Experience.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div>
    <NavBar/>
    <Home/>
    <SocialLinks/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    </div>
  );
}

export default App;
