import {mech} from "../data/mech.js";

export default function Mech(){
  return (
    <div className="container">
      <div className="mech">
        <p>
          *Minor blur effect applied to protect client's proprietary property.
        </p>
        <div className="twitch">
          {
            mech?.map((item, idx) => {
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
    </div>
  )
}