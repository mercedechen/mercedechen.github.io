import "../styles/work.css";
import {casDataCard} from "../data/casData";
import {typography} from "../data/typography";
import capstone from "../assets/fsa/capstone-ui.png";

// React
import { Link } from "react-router-dom";

export default function Work(){
  return (
    <div className="container">
      <div className="section">
        <div className="project">
          <div>
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
      </div>

      <div className="section">
        <div className="typography">
          <h3>Typography</h3>
          {
            typography?.map((item, idx) => {
              return (
                <img src={item.img} key={idx}/>
              )
            })
          }
        </div>
      </div>
      
      <div className="section">
        <div className="cas">
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
    </div>
  )
}