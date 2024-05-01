import "../styles/work.css";
import {casDataCard} from "../data/casData";
import {research} from "../data/research.js";

// Project Previews
import capstone from "../assets/projects/capstone-ui.png";
import bookbuddy from "../assets/projects/bookbuddy-ui.png";
import marishopcalc from "../assets/projects/mari-shop-prototype.jpg";

// React
import { Link } from "react-router-dom";

export default function Work(){
  return (
    <div className="container">
      <div className="section">
        <div className="project">
          <div>
            <h3>Meet the Future of SHOP-ping</h3>
            <p>
              SHOP is taking matters into their own hands and revolutionizing the entire e-commerce experience. Founded in 2023, SHOP has one vital focus: to tackle the top consumer frustrations. The proposed solution was to create a platform where everyone, regardless of location, has access to shop to their hearts' content all in one platform. They have a growing catalog and special releases all lined up...
            </p>
            <Link to="/shop">
              <button>Read More</button>
            </Link>
          </div>
          <img src={capstone}/>
        </div>

        <div className="project">
          <div>
            <h3>Book Buddy</h3>
            <p>
              An online public library service called "Book Buddy" that offers free access to a collection of books. Users can browse the library, register, and log in to their accounts to manage their reading preferences and borrowing history...
            </p>
            <Link to="/bookbuddy">
              <button>Read More</button>
            </Link>
          </div>
          <img src={bookbuddy}/>
        </div>

        <div className="project">
          <div>
            <h3>Mari Shop Calculator</h3>
            <p>
              Mari Shop Calculator is a third-party tool created by two friends for "Lost Ark," a popular massive multiplayer online role-playing game (MMORPG) released in 2018, to min-max spending using in-game currency.
            </p>
            <Link to="/marishopcalc">
              <button>Read More</button>
            </Link>
          </div>
          <img src={marishopcalc}/>
        </div>

        <div className="research">
            {
              research?.map((item, idx) => {
                return (
                  <div key={idx}>
                    <h3>{item.title}</h3>
                    <img src={item.img}/>
                  </div>
                )
              })
            }
        </div>
      </div>
      
      {/* <div className="section">
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
      </div> */}
    </div>
  )
}