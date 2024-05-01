import instagram from "../assets/socials/instagram.png";
import linkedin from "../assets/socials/linkedin.png";
import github from "../assets/socials/github.png";

export default function Socials(){
  return (
    <div className="socials">
      <a href="https://www.instagram.com/mercedechen/" target="_blank"><img src={instagram} alt="Social link to Instagram"/></a>
      <a href="https://www.linkedin.com/in/mercedechen/" target="_blank"><img src={linkedin} alt="Social link to LinkedIn"/></a>
      <a href="https://github.com/mercedechen" target="_blank"><img src={github} alt="Social link to Github"/></a>
    </div>
  )
}