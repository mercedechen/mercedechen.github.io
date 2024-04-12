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
          <Route 
            path="/"
            element={<Home/>}
          />
          <Route
            path="/about"
            element={<About/>}
          />
          <Route 
            path="/projects"
            element={<Projects/>}
          />
          <Route
            path="/extras"
            element={<Extras/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}
