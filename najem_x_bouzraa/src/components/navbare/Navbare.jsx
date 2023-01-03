import "./Navbare.css"
const Navbare = () =>{
    return( 
        <div className="nav-container">
            <div className="logo">
                <h1>Lo3Baty</h1>
            </div>
            <div className="nav-items">
                <li>Home</li>
                <li>Games</li>
                <li>Store</li>
                <li>Comunity</li>
            </div>
            <div className="profile">
                <p id="snup">Sign up</p>
                <button id="snin">Sign in</button>
            </div>
        </div>
    )

}
export default Navbare