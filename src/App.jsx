import "./App.css";
import AboutMe from "./Components/AboutMe";
import Education from "./Components/Education";
import Home from "./Components/Home";
import RecentWork from "./Components/RecentWork";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <Home />
      <AboutMe />
      <Skills/>
      <RecentWork/>
      <Resume/>
      <Education/>
    </>
  );
}

export default App;
