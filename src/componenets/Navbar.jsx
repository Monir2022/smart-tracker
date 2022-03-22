//NPM packages
import { Link } from "react-router-dom";
//Project file
import logo from "../assets/images/logo.png"

export default function Navbar() {
  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <img className="logo-img" src={logo} alt="logo thumbnail" />
      </Link>
      <ul className="navbar-link">
        <li>
          <Link to="/Homepage">Home</Link>
        </li>
        <li>
          <Link to="/track">Track</Link>
        </li>
      </ul>
    </div>
  );
}
