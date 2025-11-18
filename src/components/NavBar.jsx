import { Link } from "react-router-dom";
import Logo from "../assets/M6.jpg";

const NavBar = () => {
  return <nav>
    <img src={Logo} alt="Douna" className="h-30" />
    <ul>
    <li>
        <Link to="/">Home</Link>
    </li>
    <li><Link to="about">About</Link></li>
    <li><Link to="service">Service</Link></li>
    </ul>
    
  </nav>
}

export default NavBar
