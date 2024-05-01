// React
import { NavLink } from "react-router-dom";

// Components
import Socials from "../components/Socials";

export default function Navigation(){
  return (
    <>
      <div className="nav">
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/mech">MECH</NavLink>
        </div>
        <Socials/>
      </div>
      
    </>
  )
}