import {casDataCard} from "../data/casData";
import "../styles/projects.css";

export default function Projects(){
  return (
    <div className="container">
      <h3>Creative Design Services for the College of Arts and Sciences, University at Buffalo</h3>
      {
        casDataCard?.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.img}/>
            </div>
          )
        })
      }
    </div>
  )
}