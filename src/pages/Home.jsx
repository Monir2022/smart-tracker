import { Link } from "react-router-dom";
import homeImage from "../assets/images/home.jpg";
import React, { useContext } from "react";
import { LanguageContext } from "../state/LanguageContext";


export default function Home() {
  const { language } = useContext(LanguageContext);


  return (
    <div className="home">
      <img className="home-image" src={homeImage} alt="home" />
      <div className="home-content">
        <h1>{language.welcome}</h1>
        <Link className="home_button" to="/track">
          {language.track_here}
        </Link>
      </div>
    </div>
  );
}
