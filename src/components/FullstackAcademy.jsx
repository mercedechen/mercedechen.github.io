import "../styles/fsa.css";
import capstone from "../assets/fsa/capstone-ui.png";

export default function Projects(){
  return (
    <div className="fsa">
      <div className="preview">
        <h3>Meet The Future: Shopping</h3>
        <img src={capstone}/>
      </div>
      <div className="description">
        <p>
          SHOP is taking matters into their own hands to revolution the entire e-commerce experience. Founded in 2023, SHOP had one vital focus: to tackle consumer frustration. The proposed solution was to create a platform where everyone has access to shop to their hearts' content, all in one platform. They have a growing catalog and special releases all lined up.
        </p>
        {/* <button>Read More...</button> */}
      </div>
    </div>
  )
}