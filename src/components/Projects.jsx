import "../styles/projects.css";
import {casDataCard} from "../data/casData";
import capstone from "../assets/fsa/capstone-ui.png";
import FullstackAcademy from "../components/FullstackAcademy.jsx";

export default function Projects(){
  return (
    <div className="container">
      <FullstackAcademy/>
      <div className="internship">
        <h3>Creative Design Services for the College of Arts and Sciences, University at Buffalo</h3>
        {
          casDataCard?.map((item, index) => {
            return (
              <img src={item.img} key={index}/>
            )
          })
        }
      </div>
    </div>
  )
}