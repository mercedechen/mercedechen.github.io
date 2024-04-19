// React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./components/Home.jsx";
import Navigation from "./components/Navigation.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Shop from "./components/Shop.jsx";
import Extras from "./components/Extras.jsx";
import Footer from "./components/Footer.jsx";

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
            path="/work"
            element={<Work/>}
          />
          <Route
            path="/shop"
            element={<Shop/>}
          />
          <Route
            path="/extras"
            element={<Extras/>}
          />
        </Routes>

        <Footer/>
      </BrowserRouter>

    </>
  )
}
