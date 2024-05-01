import "../styles/work.css";
import msprototype from "../assets/projects/mari-shop-prototype.jpg";
import mscolor from "../assets/projects/mari-shop-color.jpg";
import mswireframe from "../assets/projects/mari-shop-wireframe.jpg";

export default function MariShopCalc(){
  return (
    <div className="container">
      <div className="section">
        <div className="description">
          <h3>Mari Shop Calculator</h3>
          <p>
            Mari Shop Calculator is a third-party tool created by two friends for "Lost Ark," a popular massive multiplayer online role-playing game (MMORPG) released in 2018, to min-max spending using in-game currency.
          </p>
          <img src={msprototype}/>
          <img src={mscolor}/>
          <img src={mswireframe}/>
        </div>
      </div>
    </div>
  )
}