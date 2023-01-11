import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./Navbare.css"
const Navbare = () =>{
    return( 
        <div className="nav-container">
            <div className="logo">
                <h1>Lo3Baty</h1>
            </div>
            <div className="nav-items">
                <Link to='/Hero'>
                <li>Home</li>
                </Link>
                <Link to='/Cards'>
                <li>Games</li>
                </Link>
                <Link>
                <li>Store</li>
                </Link>
                <Link>
                <li>Comunity</li>
                </Link>
            </div>
            <div className="profile">
                <p id="snup">Sign in</p>
                <button id="snin">Sign up</button>
            </div>
        </div>
    )

}
export default Navbare