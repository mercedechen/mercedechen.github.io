// React
import { NavLink } from "react-router-dom";

// Components
import Socials from "../components/Socials";

export default function Navigation(){
  return (
    <>
      <div className="nav">
        <NavLink to="/portfolio">Home</NavLink>
        <NavLink to="/portfolio/about">About</NavLink>
        <NavLink to="/portfolio/projects">Projects</NavLink>
        <NavLink to="/portfolio/extras">Extras</NavLink>
      </div>
      
      <Socials/>
    </>
  )
}