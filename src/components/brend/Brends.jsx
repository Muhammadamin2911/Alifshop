import {brendData} from "../../mock/brendData"
import "./Brend.css"
const Brends = () => {
  return (
    <div>
              <div className="brends">
      {
        brendData.map((item, index)=>{
          return(
          <div className="brend" key={index}>
            <div className="image">
              <img src={item.img} alt="" />
            </div>
              <h2>{item.brend}</h2>
          </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Brends
