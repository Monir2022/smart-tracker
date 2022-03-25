import { Link } from "react-router-dom";
import homeImage from "../assets/images/home.jpg";
import React, { useContext } from "react";
import { LanContext } from "../contexts/LanContext";


export default function Home() {
  const { lan } = useContext(LanContext);


  return (
    <div className="home">
      <img className="home-image" src={homeImage} alt="home" />
      <div className="home-content">
        <h1>{lan.welcome}</h1>
        <Link className="home_button" to="/track">
          {lan.track_here}
        </Link>
      </div>
    </div>
  );
}
