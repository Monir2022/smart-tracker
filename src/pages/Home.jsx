import { Link } from "react-router-dom";
import homeImage from "../assets/images/home.jpg";

export default function Home() {
  return (
    <div className="home">
      <img className="home-image" src={homeImage} alt="home" />
      <div className="home-content">
        <h1>Welcome to Smart Tracker</h1>
        <Link className="home_button" to="/track">
          Track Here
        </Link>
      </div>
    </div>
  );
}
