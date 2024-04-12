// React
import { NavLink } from "react-router-dom";

// Components
import Socials from "../components/Socials";

export default function Navigation(){
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/extras">Extras</NavLink>
      
      <Socials/>
    </>
  )
}