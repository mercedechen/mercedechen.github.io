// React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./components/Home.jsx";
import Navigation from "./components/Navigation.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Shop from "./components/Shop.jsx";
import BookBuddy from "./components/BookBuddy.jsx";
import MariShopCalc from "./components/MariShopCalc.jsx";
import Mech from "./components/Mech.jsx";
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
            path="/bookbuddy"
            element={<BookBuddy/>}
          />
          <Route
            path="/marishopcalc"
            element={<MariShopCalc/>}
          />
          <Route
            path="/mech"
            element={<Mech/>}
          />
        </Routes>

        <Footer/>
      </BrowserRouter>

    </>
  )
}
