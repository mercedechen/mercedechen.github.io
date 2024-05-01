import {research} from "../data/research.js";

export default function Mech(){
  return (
    <>
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
    </>
  )
}