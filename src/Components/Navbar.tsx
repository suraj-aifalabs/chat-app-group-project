import { Link } from "react-router-dom"

import "../Styles/Nav.css";
function Navbar() {
  return (
    
    <nav className="navbar">
        
        <Link to="/login">Login</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reserve">Reserve</Link>
      </nav>
 )
}

export default Navbar