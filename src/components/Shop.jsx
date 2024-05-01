import "../styles/work.css";
import capstone from "../assets/projects/capstone-ui.png";
import wireframe from "../assets/projects/capstone-wireframe.png";
import planning from "../assets/projects/capstone-planning.png";

export default function Shop(){
  return (
    <div className="container">
      <div className="section">
        <div className="description">
          <h3>Meet the Future of Shopping</h3>
          <p>
            SHOP was founded in 2023 by a developer with a mission to tackle consumer frustration by creating a platform where everyone has access to shop to their hearts' content, all in one place. We understand that it becomes overwhelming with all the available platforms out there and difficulty in finding exactly what you need. That's why SHOP was created. You do all the shopping and we'll take care of the rest. Consumer experience is our primary priority. We strongly value our relationships with our consumers and believe that a hassle-free experience equals a happy consumer.
          </p>

          <p>
            Powered by Vite using React/Redux framework, localStorage, JavaScript, HTML, CSS and Figma
          </p>

          <a href="https://strong-gumdrop-8822d7.netlify.app/" target="_blank"><button>Live Prototype</button></a>

          <img src={capstone}/>
          <img src={wireframe}/>
          <img src={planning}/>
        </div>
      </div>
    </div>
  )
}