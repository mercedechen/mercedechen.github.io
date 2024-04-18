import "../styles/projects.css";
import {casDataCard} from "../data/casData";
import capstone from "../assets/fsa/capstone-ui.png";

// React
import { Link } from "react-router-dom";

export default function Projects(){
  return (
    <div className="container">
      <div className="fsa">
        <div className="project">
          <div className="details">
            <h3>Meet the Future of Shopping</h3>
            <p>
              SHOP is taking matters into their own hands and revolutionizing the entire e-commerce experience. Founded in 2023, SHOP had one vital focus: to tackle consumer frustrations. The proposed solution was to create a platform where everyone, no matter the location, has access to shop to their hearts' content, all in one platform. They have a growing catalog and special releases all lined up...
            </p>
            <Link to="/shop">
              <button>Read More</button>
            </Link>
          </div>
          <img src={capstone}/>
        </div>

        {/* <div className="project">
          <div className="details">
            <h3>Test</h3>
          </div>
        </div> */}

      </div>
      
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