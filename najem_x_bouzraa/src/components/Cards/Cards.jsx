import "./Cards.css"
import data from "./Data"
const Cards = () => {
    return (
    <div className="cards-container">
        {
         data.map((elem)=>{   
            return (
                <div className="cards-self">
                    <div className="cards-img">
                        <img src={elem.pecture} />
                    </div>
                    <div className="cards-info">
                        <h4>{elem.title}</h4>
                        <p>{elem.price}</p>
                    </div>
                    <div className="cards-btn">
                        <button>Buy</button>
                    </div>
                </div>
        )
    })}
    </div>
    )
   
}
export default Cards