// React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./components/Home.jsx";
import Navigation from "./components/Navigation.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Extras from "./components/Extras.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation/>

        <Routes>
          {/* path needs to be changed to "/" once github page is changed to mercedechen.github.io/ */}
          <Route 
            path="/portfolio"
            element={<Home/>}
          />
          <Route
            path="/portfolio/about"
            element={<About/>}
          />
          <Route 
            path="/portfolio/projects"
            element={<Projects/>}
          />
          <Route
            path="/portfolio/extras"
            element={<Extras/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}
